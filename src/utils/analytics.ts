// utils/analytics.ts
export const trackEvent = (eventName: string, parameters: Record<string, string | number | boolean> = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, parameters);
    }
};

export const trackBreedView = (breedName: string, category: string) => {
    trackEvent('breed_view', {
        breed_name: breedName,
        breed_category: category,
        event_category: 'engagement',
        event_label: `${category}_${breedName}`
    });
};

export const trackWhatsAppClick = (source: string = 'unknown') => {
    trackEvent('contact_whatsapp', {
        event_category: 'contact',
        event_label: 'whatsapp_click',
        source: source
    });
};

export const trackModalOpen = (breedName: string) => {
    trackEvent('modal_open', {
        breed_name: breedName,
        event_category: 'engagement',
        event_label: 'breed_modal'
    });
};