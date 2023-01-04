import * as SwitcherData from "../../Data/Pages/SwitcherData/SwitcherData";
export const LightTheme = () => {
  document.querySelector(".app")?.classList.add("light-mode");
  document.querySelector(".app")?.classList.remove("dark-mode");
  let html = document.querySelector("html");
  html.style = "";
  SwitcherData.OpacityValuePrimary();
  localStorage.clear();
};
export const dark = () => {
  document.querySelector(".app")?.classList.add("dark-mode");

  document.querySelector(".app")?.classList.remove("light-mode");

  let html = document.querySelector("html");
  html.style = "";
  SwitcherData.OpacityValuePrimary();
  localStorage.clear();
}
export const LtrtoRtl = () => {
  document.querySelector(".app")?.classList.add("rtl");
  document.querySelector("html[lang=en]")?.setAttribute("dir", "rtl");
  document
    .getElementById("style")
    ?.setAttribute(
      "href",
      "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"
    );
  document.querySelector(".app")?.classList.remove("ltr");

  localStorage.setItem("sashrtl", "true");
  localStorage.removeItem("sashltr");
};
export const RtltoLtr = () => {
  document.querySelector(".app")?.classList.add("ltr");
  document.querySelector("html[lang=en]")?.setAttribute("dir", "ltr");
  document
    .getElementById("style")
    ?.setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css");
  document.querySelector(".app")?.classList.remove("rtl");

  localStorage.setItem("sashltr", "true");
  localStorage.removeItem("sashrtl");
};
export const resetData = () => {
  let lighttheme = document.querySelector("#myonoffswitch1");
  lighttheme.checked = true; //lighttheme
  let Ltr = document.querySelector("#myonoffswitch23");
  Ltr.checked = true; //lighttheme
  document.querySelector(".app")?.classList.remove("rtl");
  document.querySelector(".app")?.classList.remove("dark-mode");
}
