import StructuredDataWrapper from './structured-data-wrapper'

export const StructuredOrganisationData = () => {
    const organisation = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Oz Smart Home',
        logo: 'https://www.ozsmarthome.com.au/oz-smart-home-icon.svg',
        sameAs: [
            'https://www.youtube.com/channel/UC_tHsMQBR9da556Wh4vUW6w',
            'https://www.instagram.com/ozsmarthome/',
            'https://www.facebook.com/profile.php?id=61556389307850'

        ],
        url: "https://www.ozsmarthome.com.au/",
        "foundingDate": "2020-01-01",
        "foundingLocation": "Sydney, Australia",
        "areaServed": "AU",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+61-1800-865-070",
            "contactType": "Customer Service",
            "areaServed": "AU",
            "availableLanguage": ["English"]
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sydney",
            "addressRegion": "NSW",
            "postalCode": "2075",
            "addressCountry": "AU"
        }
    }

    return <StructuredDataWrapper data={organisation} />
}