import React from "react";
import { Helmet } from "react-helmet";

const SeoHead = ({ 
  title, 
  description, 
  path = "/", 
  image = "/images/og-default.jpg" 
}) => {

  const baseUrl = "https://www.newalmadinatravels.com";
  const fullUrl = `${baseUrl}${path}`;
  const fullImage = `${baseUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="New Al Madina Travels" />
      <meta property="og:locale" content="en_PK" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Geo Reinforcement */}
      <meta name="geo.region" content="PK-PB" />
      <meta name="geo.placename" content="Lahore" />
      <meta name="geo.position" content="31.5204;74.3587" />
      <meta name="ICBM" content="31.5204, 74.3587" />
    
    </Helmet>
  );
};

export default SeoHead;