// hooks/useSEOTracking.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { trackEvent } from "../utils/analytics";

export const useSEOTracking = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Track page views
      trackEvent("page_view", {
        page_title: document.title,
        page_location: url,
        page_path: url,
      });

      // Track specific breed pages
      if (url.includes("/razas/")) {
        const pathParts = url.split("/");
        const category = pathParts[2];
        const breed = pathParts[3];

        if (breed) {
          trackEvent("breed_page_view", {
            breed_category: category,
            breed_name: breed,
            event_category: "navigation",
          });
        }
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const trackInteraction = (
    type: string,
    details: Record<string, any> = {}
  ) => {
    trackEvent(`user_interaction_${type}`, {
      event_category: "user_interaction",
      ...details,
    });
  };

  return { trackInteraction };
};
