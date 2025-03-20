export default function StructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Kyaw Thet Htwe",
      "url": "https://www.kyawthethtwe.me", // Updated to reflect the actual domain
      "jobTitle": "Frontend Developer",
      "description": "Frontend Developer specializing in Next.js and TypeScript",
      "knowsAbout": ["Next.js", "React", "TypeScript", "Web Development"],
      "sameAs": [
        "https://www.linkedin.com/in/kyaw-thet-htwe-856b59201/",
        "https://github.com/kyawthethtwe"
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  }