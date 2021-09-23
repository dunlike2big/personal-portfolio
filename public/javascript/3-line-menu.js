// JavaScript Document

function goToFirstPage() {
   // time out to fix issue where it would not scroll to specific part of page while using offcanvas from bootstrap
   setTimeout(function () {
      document.getElementById("firstPage").scrollIntoView();
   }, 400);
}

function goToSecondPage() {
   setTimeout(function () {
      document.getElementById("secondPage").scrollIntoView();
   }, 400);
}

function goToThirdPage() {
   setTimeout(function () {
      document.getElementById("lastPage").scrollIntoView();
   }, 400);
}
