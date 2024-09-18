
let nameInput :any = document.getElementById("name") as HTMLInputElement;
let jobtitle :any = document.getElementById("jobtitle") as HTMLInputElement ;
let phone :any = document.getElementById('contact') as HTMLInputElement;
let email :any = document.getElementById("email") as HTMLInputElement;
let linkedin :any = document.getElementById("linkedin") as HTMLInputElement;
let degree :any = document.getElementById("degree") as HTMLInputElement;
let university :any = document.getElementById("university") as HTMLInputElement ;
let year :any = document.getElementById("year") as HTMLInputElement;
let jobexp :any = document.getElementById("experience") as HTMLInputElement;
let skill1 :any = document.getElementById("skill1") as HTMLInputElement;
let skill2 :any = document.getElementById("skill2") as HTMLInputElement;
let skill3 :any = document.getElementById("skill3") as HTMLInputElement;
let profilePic :any = document.getElementById("profilepic") as HTMLInputElement;


let form = document.getElementById('ResumeForm') as HTMLFormElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('form_name', nameInput.value);
    localStorage.setItem('form_jobtitle', jobtitle.value);
    localStorage.setItem('form_contact' , phone.value);
    localStorage.setItem('form_email'   , email.value);
    localStorage.setItem('form_linkedin', linkedin.value);
    localStorage.setItem('form_degree', degree.value);
    localStorage.setItem('form_university', university.value);
    localStorage.setItem('form_year', year.value);
    localStorage.setItem('form_experience', jobexp.value);
    localStorage.setItem('form_skill1', skill1.value);
    localStorage.setItem('form_skill2', skill2.value);
    localStorage.setItem('form_skill3', skill3.value);


    if (profilePic.files && profilePic.files[0]){
        let reader = new FileReader();
        reader.onload =function() {
            let base64Image = reader.result as string;
            localStorage.setItem('form_profilrpic', base64Image);
            
               window.location.href = "../preview_resumee/DynamicResume.html"
        };
        reader.readAsDataURL(profilePic.files[0]);
    }else {
          window.location.href = "../preview_resumee/DynamicResume.html"
    }

});

