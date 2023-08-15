import React, { useEffect } from "react";

const GoogleTranslateWidget = () => {
  useEffect(() => {
    // Create the Google Translate script element
    const script = document.createElement("script");
    script.src = "http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
    script.async = true;

    // Append the script to the document's head
    document.head.appendChild(script);

    // Define the callback function
    window.loadGoogleTranslate = () => {
      new window.google.translate.TranslateElement("google_element");
    };
  }, []);

//   return <div id="google_element"></div>;
};

export default GoogleTranslateWidget;
