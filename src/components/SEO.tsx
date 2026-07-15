import { Helmet } from "react-helmet-async";

const SITE_URL = "https://ofatce-global-web.lovable.app";
const DEFAULT_OG_IMAGE =
  "https://ofatce-global-web.lovable.app/lovable-uploads/83ac60f5-dae5-4126-90cc-4e8bc6dc14e9.png";

interface SEOProps {
  title: string;
  description: string;
  path: string; // route path, e.g. "/about-us"
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEO = ({ title, description, path, image, type = "website", jsonLd }: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="OFATCE Global Limited" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
};

export const SITE = { url: SITE_URL, name: "OFATCE Global Limited" };
export default SEO;
