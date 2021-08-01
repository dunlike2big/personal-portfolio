// JavaScript Document
const projectContext = {
   project: [
      {
         image: {
            src: "images/projects/Flipper-GIF.gif",
            alt: "Flipper GIF",
         },
         title: "Flipper (Game)",
         projectDescription:
            "A 2D shifting perspective game made in 40 hours using Unity for OSU HackOHI/O 2020",
         creators: [
            { name: "Zheng Ji Tan" },
            { name: "Matthew Anakin Crabtree" },
            { name: "Deakon Ziegler" },
         ],
         projectLink: "https://github.com/OneMoreOneUp/Hack-Ohio-2020",
      },
      {
         image: {
            src: "images/projects/online-portfolio.png",
            alt: "Desktop Compatible",
         },
         title: "Online Portfolio",
         projectDescription:
            "An interactive website showcasing skills, job experience and personal projects.",
         creators: [{ name: "Zheng Ji Tan" }],
         projectLink: "https://github.com/Just-ZJ/Personal-Website",
      },
   ],
};

function fillProjectTemplate() {
   const source = document.getElementById("project-Template").innerHTML;
   const template = Handlebars.compile(source);
   const compiledProject = template(projectContext);
   document.getElementById("project-Template-Fill").innerHTML = compiledProject;
}

fillProjectTemplate();

function goToFirstPage() {
   setTimeout(function () {
      document.getElementById("firstPage").scrollIntoView();
   }, 500);
}

function goToSecondPage() {
   setTimeout(function () {
      document.getElementById("secondPage").scrollIntoView();
   }, 500);
}

function goToThirdPage() {
   setTimeout(function () {
      document.getElementById("lastPage").scrollIntoView();
   }, 500);
}
