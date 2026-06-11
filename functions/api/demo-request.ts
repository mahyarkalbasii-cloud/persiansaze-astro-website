interface Env {
  DEMO_WEBHOOK_URL?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

interface DemoRequestPayload extends Record<string, string> {
  name: string;
  phone: string;
  company: string;
  referralSource: string;
  workField: string;
}

const SOURCE = "persiansaze-website";
const PHONE_PATTERN = /^0\d{10}$/;

const json = (
  body: Record<string, unknown>,
  status: number,
  headers: Record<string, string> = {},
) =>
  Response.json(body, {
    status,
    headers: {
      "cache-control": "no-store",
      ...headers,
    },
  });

const isRecord = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value);

const asTrimmedString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const toStringFields = (body: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(body)
      .filter((entry): entry is [string, string] => typeof entry[1] === "string")
      .map(([key, value]) => [key, value.trim()]),
  );

const readBody = async (request: Request): Promise<Record<string, unknown> | null> => {
  const contentType = request.headers.get("content-type") || "";

  try {
    if (contentType.includes("application/json")) {
      const body = await request.json();
      return isRecord(body) ? body : null;
    }

    if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      const formData = await request.formData();
      const body: Record<string, string> = {};
      formData.forEach((value, key) => {
        if (typeof value === "string") body[key] = value;
      });
      return body;
    }
  } catch (error) {
    console.error("Failed to parse demo request body", error);
  }

  return null;
};

const toPayload = (body: Record<string, unknown> | null): DemoRequestPayload | null => {
  if (!body) return null;

  const payload: DemoRequestPayload = {
    ...toStringFields(body),
    name: asTrimmedString(body.name),
    phone: asTrimmedString(body.phone),
    company: asTrimmedString(body.company),
    referralSource: asTrimmedString(body.referralSource),
    workField: asTrimmedString(body.workField ?? body.supplier),
  };

  if (!payload.name || !payload.phone || !payload.company || !payload.workField) {
    return null;
  }

  if (!PHONE_PATTERN.test(payload.phone)) {
    return null;
  }

  return payload;
};

export async function onRequest(context: PagesContext): Promise<Response> {
  const { request, env } = context;

  if (request.method !== "POST") {
    return json({ ok: false, error: "method-not-allowed" }, 405, { allow: "POST" });
  }

  const payload = toPayload(await readBody(request));
  if (!payload) {
    return json({ ok: false, error: "validation" }, 422);
  }

  const webhookUrl = env.DEMO_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    console.error("DEMO_WEBHOOK_URL is not configured for demo request submissions");
    return json({ ok: false, error: "not-configured" }, 500);
  }

  try {
    const upstreamResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
        source: SOURCE,
      }),
    });

    if (!upstreamResponse.ok) {
      console.error("Demo request webhook returned a non-2xx response", {
        status: upstreamResponse.status,
      });
      return json({ ok: false, error: "upstream" }, 502);
    }
  } catch (error) {
    console.error("Demo request webhook submission failed", error);
    return json({ ok: false, error: "upstream" }, 502);
  }

  return json({ ok: true }, 200);
}
