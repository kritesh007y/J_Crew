// "use strict";
// document.addEventListener(
//   "focusin",
//   function (t) {
//     t =
//       t &&
//       t.target &&
//       t.target.closest &&
//       t.target.closest("input,select,textarea,button,meter,progress");
//     t &&
//       window[gtm4wp_datalayer_name].push({
//         event: "gtm4wp.formElementEnter",
//         inputID: t.getAttribute("id") || "(no input ID)",
//         inputName: t.getAttribute("name") || "(no input name)",
//         inputClass: t.getAttribute("class") || "(no input class)",
//         formID: (t.form && t.form.getAttribute("id")) || "(no form ID)",
//         formName: (t.form && t.form.getAttribute("name")) || "(no form name)",
//         formClass:
//           (t.form && t.form.getAttribute("class")) || "(no form class)",
//       });
//   },
//   !1
// ),
//   document.addEventListener(
//     "focusout",
//     function (t) {
//       t =
//         t &&
//         t.target &&
//         t.target.closest &&
//         t.target.closest("input,select,textarea,button,meter,progress");
//       t &&
//         window[gtm4wp_datalayer_name].push({
//           event: "gtm4wp.formElementLeave",
//           inputID: t.getAttribute("id") || "(no input ID)",
//           inputName: t.getAttribute("name") || "(no input name)",
//           inputClass: t.getAttribute("class") || "(no input class)",
//           formID: (t.form && t.form.getAttribute("id")) || "(no form ID)",
//           formName: (t.form && t.form.getAttribute("name")) || "(no form name)",
//           formClass:
//             (t.form && t.form.getAttribute("class")) || "(no form class)",
//         });
//     },
//     !1
//   );
