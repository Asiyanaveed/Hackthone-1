
let EducationBtn = document.getElementById("Educationbtn");
let SkillBtn = document.getElementById("Skillbtn");
let ExperienceBtn = document.getElementById("Experiencebtn");

let EducationSec: any = document.getElementById("educationsec");
let SkillSec: any = document.getElementById("skillsec");
let ExperienceSec:any = document.getElementById("experiencesec");

EducationBtn?.addEventListener('click', ()=>{
    if(EducationSec.style.display == 'block'){
        EducationSec.style.display = 'none'; 
    }else{
        EducationSec.style.display = 'block';
    }
})

SkillBtn?.addEventListener('click', ()=>{
    if(SkillSec.style.display == 'block'){
        SkillSec.style.display = 'none'; 
    }else{
        SkillSec.style.display = 'block';
    }
})

ExperienceBtn?.addEventListener('click', ()=>{
    if(ExperienceSec.style.display == 'block'){
        ExperienceSec.style.display = 'none'; 
    }else{
        ExperienceSec.style.display = 'block';
    }
})

