import React, { useEffect } from "react";

const RedirectPage = () => {
  useEffect(() => {
    const getQueryParam = (param) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    };

    const redirectUrl = getQueryParam("url");
    const fallbackMessage = document.getElementById("fallbackMessage");
    const manualRedirectLink = document.getElementById("manualRedirect");

    if (redirectUrl) {
      manualRedirectLink.href = redirectUrl;
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 500);
    } else {
      fallbackMessage.textContent =
        "No link provided to redirect. Redirecting to our support team.";
      manualRedirectLink.href = "https://wa.me/919253029002";
      setTimeout(() => {
        window.location.href = "https://wa.me/919253029002";
      }, 500);
    }
  }, []);

  return (
    <div className="redirect-page">
      <h1>Redirecting...</h1>
      <p id="fallbackMessage">
        Please wait while we redirect you to the provided link.
      </p>
      <a id="manualRedirect" href="#">
        Click here if you are not redirected automatically.
      </a>
    </div>
  );
};

export default RedirectPage;
