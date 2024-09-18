"use strict";
let nameInput = document.getElementById("name");
let jobtitle = document.getElementById("jobtitle");
let phone = document.getElementById('contact');
let email = document.getElementById("email");
let linkedin = document.getElementById("linkedin");
let degree = document.getElementById("degree");
let university = document.getElementById("university");
let year = document.getElementById("year");
let jobexp = document.getElementById("experience");
let skill1 = document.getElementById("skill1");
let skill2 = document.getElementById("skill2");
let skill3 = document.getElementById("skill3");
let profilePic = document.getElementById("profilepic");
let form = document.getElementById('ResumeForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('form_name', nameInput.value);
    localStorage.setItem('form_jobtitle', jobtitle.value);
    localStorage.setItem('form_contact', phone.value);
    localStorage.setItem('form_email', email.value);
    localStorage.setItem('form_linkedin', linkedin.value);
    localStorage.setItem('form_degree', degree.value);
    localStorage.setItem('form_university', university.value);
    localStorage.setItem('form_year', year.value);
    localStorage.setItem('form_experience', jobexp.value);
    localStorage.setItem('form_skill1', skill1.value);
    localStorage.setItem('form_skill2', skill2.value);
    localStorage.setItem('form_skill3', skill3.value);
    if (profilePic.files && profilePic.files[0]) {
        let reader = new FileReader();
        reader.onload = function () {
            let base64Image = reader.result;
            localStorage.setItem('form_profilrpic', base64Image);
            window.location.href = "../preview_resumee/DynamicResume.html";
        };
        reader.readAsDataURL(profilePic.files[0]);
    }
    else {
        window.location.href = "../preview_resumee/DynamicResume.html";
    }
});
