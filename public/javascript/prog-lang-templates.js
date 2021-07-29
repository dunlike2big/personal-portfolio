// JavaScript Document
const context = {
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
     
};

function fillProjectTemplate() {
   const projectSource = document.getElementById("project-Template").innerHTML;
   const projectTemplate = Handlebars.compile(projectSource);
   const compiledProject = projectTemplate(context);
   document.getElementById("project-Template-Fill").innerHTML = compiledProject;
}

fillProjectTemplate();
