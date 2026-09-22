import { CHECKOUT_URL, PRODUCT_INFO } from "../config/site";

// Declare fbq globally
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

/**
 * Tracks a Meta Pixel event safely if fbq is initialized.
 */
export function trackMetaEvent(eventName: string, params?: Record<string, any>) {
  try {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      if (params) {
        window.fbq("track", eventName, params);
      } else {
        window.fbq("track", eventName);
      }
    }
  } catch (err) {
    console.warn("Meta Pixel tracking notice:", err);
  }
}

/**
 * Constructs the final checkout URL by carrying forward any UTM and attribution parameters
 * from the landing page URL (e.g. utm_source, utm_medium, utm_campaign, utm_content, utm_term, fbclid).
 */
export function getCheckoutUrlWithUtms(): string {
  if (typeof window === "undefined") {
    return CHECKOUT_URL;
  }

  try {
    const currentParams = new URLSearchParams(window.location.search);
    const checkoutUrlObj = new URL(CHECKOUT_URL);

    // Merge current search params into checkout URL
    currentParams.forEach((value, key) => {
      checkoutUrlObj.searchParams.set(key, value);
    });

    return checkoutUrlObj.toString();
  } catch {
    return CHECKOUT_URL;
  }
}

/**
 * Initiates the checkout flow:
 * 1. Fires the Meta Pixel InitiateCheckout event with product currency and value.
 * 2. Redirects user to the checkout URL with preserved UTMs.
 */
export function proceedToCheckout() {
  trackMetaEvent("InitiateCheckout", {
    content_name: PRODUCT_INFO.name,
    content_category: "Digital Course",
    value: PRODUCT_INFO.priceNumber,
    currency: PRODUCT_INFO.currency,
    num_items: 1,
  });

  const targetUrl = getCheckoutUrlWithUtms();
  window.location.href = targetUrl;
}

/**
 * Smoothly scrolls the viewport to the main offer section (#oferta).
 */
export function scrollToOffer() {
  const offerElement = document.getElementById("oferta");
  if (offerElement) {
    offerElement.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.hash = "oferta";
  }
}
