export default function sitemap() {
  const base = "https://your-education-website.com";

  return [
    {
      url: `${base}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];
}
