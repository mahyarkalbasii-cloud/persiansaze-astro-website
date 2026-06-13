import { projectCityBySlug, projectNeighborhoodBySlug } from "@/content/neighborhoods";

type CoverageAreaSeed = {
  neighborhoodSlug: string;
  label?: string;
};

const topCoverageAreas: CoverageAreaSeed[] = [
  { neighborhoodSlug: "lavasan" },
  { neighborhoodSlug: "chitgar", label: "چیتگر" },
  { neighborhoodSlug: "shamsabad-industrial-estate", label: "شهرک صنعتی شمس‌آباد" },
  { neighborhoodSlug: "niavaran" },
  { neighborhoodSlug: "shahrak-e-gharb" },
  { neighborhoodSlug: "mehrshahr" },
];

export const coverageMenuLinks = topCoverageAreas.flatMap((area) => {
  const neighborhood = projectNeighborhoodBySlug.get(area.neighborhoodSlug);
  if (!neighborhood) return [];

  const city = projectCityBySlug.get(neighborhood.projectCitySlug);
  if (!city) return [];

  return [
    {
      label: area.label ?? neighborhood.name,
      href: `/projects/${city.slug}/${neighborhood.slug}/`,
      cityName: city.name,
      focus: neighborhood.focus,
    },
  ];
});
