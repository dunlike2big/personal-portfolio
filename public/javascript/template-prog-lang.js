// JavaScript Document
const proglangcontext = {
   programmingLanguage: [
      {
         progLanguage: "HTML & CSS",
         barLength: "100",
         proficiency: "hmm",
      },
      {
         progLanguage: "Javascript",
         barLength: "75",
         proficiency: "hmm",
      },
      {
         progLanguage: "Java",
         barLength: "100",
         proficiency: "hmm",
      },
      {
         progLanguage: "C",
         barLength: "75",
         proficiency: "hmm",
      },
      {
         progLanguage: "X86 Assembly Language",
         barLength: "100",
         proficiency: "hmm",
      },
   ],
};

function fillProgLangTemplate() {
   const source = document.getElementById("prog-lang-Template").innerHTML;
   const template = Handlebars.compile(source);
   const compiledProject = template(proglangcontext);
   document.getElementById("prog-lang-Template-Fill").innerHTML = compiledProject;
}

fillProgLangTemplate();
