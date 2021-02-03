// Definitions by: Steve Junior <https://github.com/theabhinavdas>

// "use strict";

// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-185022770-2"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'UA-185022770-2');
// </script>

module.exports = function gaReact(propertyId) {
  if (!window) {
    throw new Error("DOM is unavailable");
  }

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  const tawk = document.getElementById("gaReact");
  if (tawk) {
    // Prevent TawkTo to create root script if it already exists
    return window.Tawk_API;
  }

  const script = document.createElement("script");
  script.id = "gaReact";
  script.async = true;
  script.src =
    "https://www.googletagmanager.com/gtag/js?id=UA-185022770-2" + propertyId;
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");

  const first_script_tag = document.getElementsByTagName("script")[0];
  if (!first_script_tag || !first_script_tag.parentNode) {
    throw new Error("DOM is unavailable");
  }

  first_script_tag.parentNode.insertBefore(script, first_script_tag);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "UA-185022770-2");
};
