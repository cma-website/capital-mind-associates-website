
export default function BusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AccountingService"],
    "@id": "https://capitalmindassociates.com/#business",
    "name": "Capital Mind Associates",
    "url": "https://capitalmindassociates.com/",
    "telephone": "+918796862433",
    "description":
      "Capital Mind Associates provides accounting, bookkeeping, GST return filing, ITR filing, income tax services, company registration, trademark registration, copyright registration, MSME/Udyam registration, business loan assistance and E-Way Bill services for startups, small businesses, companies and professionals.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RZ - 15-D, Gali No. 3, Sant Mohalla, Main Sagarpur, Sagar Pur",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110046",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Delhi NCR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918796862433",
      "contactType": "customer service"
    },
    "knowsAbout": [
      "Accounting Services",
      "Bookkeeping Services",
      "GST Registration and Return Filing",
      "Income Tax Return Filing",
      "Company Registration",
      "Trademark Registration",
      "Copyright Registration",
      "MSME and Udyam Registration",
      "Business Loan Assistance",
      "E-Way Bill Services",
      "Financial Reporting"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c")
      }}
    />
  );
}
