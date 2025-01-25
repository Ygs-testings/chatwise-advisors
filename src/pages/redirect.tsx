import React, { useEffect } from "react";

const RedirectPage = () => {
  useEffect(() => {
    const getQueryParam = (param: string) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    };

    const redirectUrl = getQueryParam("url");
    const fallbackMessage = document.getElementById("fallbackMessage");
    const manualRedirectLink = document.getElementById("manualRedirect");

    // Google Analytics page view tracking (manual for SPA)
    if (window.gtag) {
      window.gtag("config", "AW-16836513990", {
        page_path: window.location.pathname + window.location.search,
      });
    }

    // Google Ads conversion tracking
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16836513990/label",
        value: 1.0, // Example value; you can change this based on your needs
        currency: "INR", // Change the currency if needed
      });
    }

    if (redirectUrl && manualRedirectLink && fallbackMessage) {
      manualRedirectLink.href = redirectUrl;
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 500);
    } else if (manualRedirectLink && fallbackMessage) {
      fallbackMessage.textContent =
        "No link provided to redirect. Redirecting to our support team.";
      manualRedirectLink.href = "https://wa.me/919253029002";
      setTimeout(() => {
        window.location.href = "https://wa.me/919253029002";
      }, 500);
    }
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-500 text-white text-center">
      <h1 className="text-4xl mb-4">Redirecting...</h1>
      <p id="fallbackMessage" className="text-xl mb-8">
        Please wait while we redirect you to the provided link.
      </p>
      <a
        id="manualRedirect"
        href="#"
        className="inline-block px-5 py-2.5 text-base bg-white text-[#2575fc] rounded hover:bg-[#2575fc] hover:text-white transition-colors"
      >
        Click here if you are not redirected automatically.
      </a>
    </div>
  );
};

export default RedirectPage;
