"use strict";
const btn = document.querySelector(".btn");
const personalInfo = document.querySelector(".personal-information");
const typeEmail = document.querySelector(".type-email");

const viewMore1 = document.querySelector(".view-more1");
const viewMore2 = document.querySelector(".view-more2");
const viewMore3 = document.querySelector(".view-more3");
const viewMore4 = document.querySelector(".view-more4");
const viewMore5 = document.querySelector(".view-more5");
const viewMore6 = document.querySelector(".view-more6");

const viewLess1 = document.querySelector(".view-less1");
const viewLess2 = document.querySelector(".view-less2");
const viewLess3 = document.querySelector(".view-less3");
const viewLess4 = document.querySelector(".view-less4");
const viewLess5 = document.querySelector(".view-less5");
const viewLess6 = document.querySelector(".view-less6");

const exInfo = document.querySelector(".ex-info");
const edInfo = document.querySelector(".ed-info");
const actInfo = document.querySelector(".act-info");
const hobbyInfo = document.querySelector(".hobby-info");
const langInfo = document.querySelector(".lang-info");
const skillInfo = document.querySelector(".skill-info");

const profileList = [exInfo, edInfo, actInfo, hobbyInfo, langInfo, skillInfo];
const viewMoreList = [
  viewMore1,
  viewMore2,
  viewMore3,
  viewMore4,
  viewMore5,
  viewMore6,
];
const viewLessList = [
  viewLess1,
  viewLess2,
  viewLess3,
  viewLess4,
  viewLess5,
  viewLess6,
];
const hover = document.querySelectorAll(".hover");
// thông tin cá nhân
btn.addEventListener("click", function () {
  const inputEmail = String(document.querySelector(".input-email").value);
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (inputEmail.match(regex)) {
    personalInfo.classList.remove("hidden");
    typeEmail.classList.add("hidden");
  } else {
    alert(`Email của bạn không hợp lệ. Bạn vui lòng kiểm tra lại.`);
  }
});
// ẨN LÝ LỊCH - CHỈ XUẤT HIỆN KHI NHẤN VÀO
for (let i = 0; i < viewMoreList.length; i++) {
  viewMoreList[i].addEventListener("click", function () {
    profileList[i].classList.remove("hidden");
    viewMoreList[i].classList.add("hidden");
    viewLessList[i].classList.remove("hidden");
  });
  viewLessList[i].addEventListener("click", function () {
    profileList[i].classList.add("hidden");
    viewMoreList[i].classList.add("hidden");
    viewLessList[i].classList.add("hidden");
  });
}
