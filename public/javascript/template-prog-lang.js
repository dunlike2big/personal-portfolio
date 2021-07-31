// JavaScript Document
const progLangContext = {
   programmingLanguage: [
      {
         progLanguage: "HTML & CSS",
         barLength: "100",
         proficiency: "Advanced",
      },
      {
         progLanguage: "Javascript",
         barLength: "85",
         proficiency: "Intermediate",
      },
      {
         progLanguage: "Java",
         barLength: "80",
         proficiency: "Intermediate",
      },
      {
         progLanguage: "C",
         barLength: "80",
         proficiency: "Intermediate",
      },
      {
         progLanguage: "X86 Assembly Language",
         barLength: "75",
         proficiency: "Intermediate",
      },
   ],
};

function fillProgLangTemplate() {
   const source = document.getElementById("prog-lang-Template").innerHTML;
   const template = Handlebars.compile(source);
   const compiledProject = template(progLangContext);
   document.getElementById("prog-lang-Template-Fill").innerHTML = compiledProject;
}

fillProgLangTemplate();
