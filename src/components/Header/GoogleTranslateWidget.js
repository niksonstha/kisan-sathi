import React, { useEffect } from "react";

// const GoogleTranslateWidget = () => {
//   useEffect(() => {
//     // Create the Google Translate script element
//     const script = document.createElement("script");
//     script.src = "http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
//     script.async = true;

//     // Append the script to the document's head
//     document.head.appendChild(script);

//     // Define the callback function
//     window.loadGoogleTranslate = () => {
//       new window.google.translate.TranslateElement("google_element");
//     };
//   }, []);

//   return <div id="google_element"></div>;
// };


const GoogleTranslateWidget = () => {
  useEffect(() => {
    // Create the Google Translate script element
    const script = document.createElement('script');
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate&hl=ne'; // Set 'hl=ne' for Nepali language
    script.async = true;

    // Append the script to the document's head
    document.head.appendChild(script);

    // Define the callback function
    window.loadGoogleTranslate = () => {
      // Initialize Google Translate with 'google_element' and 'ne' (Nepali) as the target language
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en', // Set your page language (English in this case)
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, // Choose the layout style
          multilanguagePage: true, // Enable translation of iframes
        },
        'google_element'
      );
    };
  }, []);

  return <div id="google_element"></div>;
};

export default GoogleTranslateWidget;
