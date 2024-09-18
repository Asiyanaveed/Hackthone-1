

window.addEventListener('load', () => {
    let name = localStorage.getItem('form_name');
    let jobtitle = localStorage.getItem('form_jobtitle');
    let phone = localStorage.getItem('form_contact');
    let email = localStorage.getItem('form_email');
    let linkedin = localStorage.getItem('form_linkedin');
    let degree = localStorage.getItem('form_degree');
    let university = localStorage.getItem('form_university');
    let year = localStorage.getItem('form_year');
    let jobexp = localStorage.getItem('form_experience');
    let skill1 = localStorage.getItem('form_skill1');
    let skill2 = localStorage.getItem('form_skill2');
    let skill3 = localStorage.getItem('form_skill3');
    let profilePic = localStorage.getItem('form_profilrpic');


    document.getElementById('formName')!.textContent = name;
    document.getElementById('jobtitle')!.textContent = jobtitle;
    document.getElementById('Phone')!.textContent = phone; 
    document.getElementById('Demail')!.textContent = email;
    document.getElementById('linkedin')!.textContent = linkedin;
    document.getElementById('skill1')!.textContent = skill1;
    document.getElementById('skill2')!.textContent = skill2;
    document.getElementById('skill3')!.textContent = skill3;
    document.getElementById('degree')!.textContent = degree;
    document.getElementById('university')!.textContent = university;
    document.getElementById('year')!.textContent = year;
    document.getElementById('jobexp')!.textContent = jobexp;

    if(profilePic){
        (document.getElementById('img') as HTMLImageElement).src = profilePic;
    }

    let username = name ? name.toLowerCase().replace(/\s+/g, '') : 'user';
    let baseUrl = 'http://127.0.0.1:5500/Dynamic_Resume/preview_resumee/DynamicResume.html';
    let uniqeUrl = `${baseUrl}?/${username}`;

    let resumeLink = document.getElementById('resumelink') as HTMLAnchorElement;
   resumeLink.setAttribute('href',uniqeUrl);

   document.getElementById('copybtn')!.addEventListener('click', () =>{
    navigator.clipboard.writeText(uniqeUrl).then(() =>{
        alert('Resume link copy to clipboard');
    });
   });
})

document.getElementById('editbtn')!.addEventListener('click', () => {
    window.history.back();
});

document.getElementById('printbtn')!.addEventListener('click', () => {
    window.print();
} )

