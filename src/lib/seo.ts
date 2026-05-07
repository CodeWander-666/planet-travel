import { Metadata } from "next";
export function generatePageMetadata(title:string, description:string, path:string, imageUrl?:string):Metadata {
  const url = `https://codewander-666.github.io/planet-travel${path}`;
  return {
    title, description,
    alternates:{ canonical:url },
    openGraph:{ title, description, url, siteName:"Planet&Travel", locale:"en_IN", type:"website", images:imageUrl },
    twitter:{ card:"summary_large_image", title, description },
    robots:{ index:true, follow:true },
  };
}
