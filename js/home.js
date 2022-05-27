class Profile {
    constructor() {
        this.name = "";
        this.aboutMe = [];
        this.skills = [];
        this.skillIcon = [];
        this.email = "";
        this.emailIcon = "";
        this.cellNumber = "";
        this.cellIcon = "";
        this.github = "";
        this.githubIcon = "";
        this.website = "";
        this.websiteIcon = "";
        this.linkedIn = "";
        this.linkedInIcon = "";
        this.emailIcon = "";
        this.cvIcon = "";
        this.cv = "";
    }

    setName($data) {
        this.name = $data;
    }

    setAboutMe($data) {
        this.aboutMe.push($data);
    }

    setSkill($data) {
        this.skills.push($data);
    }

    setSkillIcon($data) {
        this.skillIcon.push($data);
    }

    setEmail($data) {
        this.email = $data;
    }

    setCV($data) {
        this.cv = $data;
    }

    setCellNumber($data) {
        this.cellNumber = $data;
    }

    setGitHub($data) {
        this.github = $data;
    }

    setWebsite($data) {
        this.website = $data;
    }

    setLinkedIn($data) {
        this.linkedIn = $data;
    }

    setCellIcon($data) {
        this.cellIcon = $data;
    }

    setGitHubIcon($data) {
        this.githubIcon = $data;
    }

    setWebsiteIcon($data) {
        this.websiteIcon = $data;
    }

    setLinkedInIcon($data) {
        this.linkedInIcon = $data;
    }

    setEmailIcon($data) {
        this.emailIcon = $data;
    }

    setCVIcon($data) {
        this.cvIcon = $data;
    }

    getName() {
        return this.name;
    }

    getAboutMe() {
        return this.aboutMe;
    }

    getSkills() {
        return this.skills;
    }

    getSkillIcon() {
        return this.skillIcon;
    }

    getEmail() {
        return this.email;
    }

    getCV() {
        return this.cv;
    }

    getCellNumber() {
        return this.cellNumber;
    }

    getGitHub() {
        return this.github;
    }

    getWebsite() {
        return this.website;
    }

    getLinkedIn() {
        return this.linkedIn;
    }

    getCellIcon() {
        return this.cellIcon;
    }

    getGitHubIcon() {
        return this.githubIcon;
    }

    getWebsiteIcon() {
        return this.websiteIcon;
    }

    getLinkedInIcon() {
        return this.linkedInIcon;
    }

    getEmailIcon() {
        return this.emailIcon;
    }

    getCVIcon() {
        return this.cvIcon;
    }
}

const raymondMawina = new Profile();
raymondMawina.setName("Raymond Mawina");

const footer = document.getElementById("footer");
const footerText = document.createElement("h4");
footerText.innerText = `copyright \u00A9 by ` + raymondMawina.getName();
footer.appendChild(footerText);

function about() {
    const raymondMawina = new Profile();
    raymondMawina.setName("Raymond Mawina");
    raymondMawina.setAboutMe(
        "I am a coding newbie, aspiring to become a Software Engineer. "
    );
    raymondMawina.setAboutMe(
        "I am learning the in's and out's of programming and the tricks of trade when it comes to designing and developing websites and web applications. "
    );
    raymondMawina.setAboutMe(
        "My short term goal is to become a Junior Web developer. "
    );
    raymondMawina.setAboutMe(
        "My long term goal is to become a Senior Software Engineer. "
    );
    raymondMawina.setAboutMe(
        "I am currently seeking learning opportunities, prefarably learnership opportunities in the ICT Sector. "
    );
    raymondMawina.setAboutMe(
        "I learn everyday, usually by reading documentations about programming language or frameworks. "
    );
    raymondMawina.setAboutMe(
        "I code everyday, because this way my skills become practical and applicable. "
    );
    raymondMawina.setAboutMe(
        "My highest level of education is Grade 12, which I obtained in 2016. "
    );

    const aboutMe = document.getElementById("about-Me");
    const mypic = document.getElementById("mypic");
    mypic.src = "../img/" + raymondMawina.getName().replace(" ", "") + ".png";
    mypic.style.height = "280px";
    mypic.style.width = "280px";
    mypic.style.marginTop = "20px";

    const myName = document.createElement("h1");
    myName.innerText = "I am " + raymondMawina.getName();
    aboutMe.appendChild(myName);

    for (let index = 0; index < raymondMawina.getAboutMe().length; index++) {
        const aboutMeText = document.createElement("strong");
        aboutMeText.style.fontSize = "19px";
        aboutMeText.innerText = raymondMawina.getAboutMe()[index];
        aboutMe.appendChild(aboutMeText);
    }
}

about();

function skills() {
    const raymondMawina = new Profile();
    raymondMawina.setName("Raymond Mawina");

    const title = document.getElementById("title");
    const titleText = document.createElement("h1");
    titleText.innerText = raymondMawina.getName();
    title.appendChild(titleText);

    const footer = document.getElementById("footer");
    const footerText = document.createElement("h4");
    footerText.innerText = `copyright \u00A9 by ` + raymondMawina.getName();
    footer.appendChild(footerText);

    raymondMawina.setSkill("C++");
    raymondMawina.setSkillIcon("devicon-cplusplus-plain");
    raymondMawina.setSkill("Java");
    raymondMawina.setSkillIcon("devicon-java-plain");
    raymondMawina.setSkill("PHP");
    raymondMawina.setSkillIcon("devicon-php-plain");
    raymondMawina.setSkill("HTML");
    raymondMawina.setSkillIcon("devicon-html5-plain-wordmark");
    raymondMawina.setSkill("CSS");
    raymondMawina.setSkillIcon("devicon-css3-plain-wordmark");
    raymondMawina.setSkill("MySQL");
    raymondMawina.setSkillIcon("devicon-mysql-plain-wordmark");
    raymondMawina.setSkill("Python");
    raymondMawina.setSkillIcon("devicon-python-plain-wordmark");
    raymondMawina.setSkill("ExpressJS");
    raymondMawina.setSkillIcon("devicon-express-original");

    const skillz = document.getElementById("content-skills");
    console.log(raymondMawina.getSkills().lebgth);
    for (let index = 0; index < raymondMawina.getSkills().length; index++) {
        const skillImage = document.createElement("div");
        const skillText = document.createElement("div");

        skillImage.style.border = "solid";
        skillText.style.border = "solid";

        skillText.style.marginLeft = "5px";

        skillImage.style.float = "left";
        skillText.style.float = "left";

        skillImage.style.marginTop = "5px";
        skillText.style.marginTop = "5px";

        skillImage.style.width = "12%";
        skillText.style.width = "30%";

        skillImage.style.height = "17.2vh";
        skillText.style.height = "17.2vh";

        skillImage.style.marginLeft = "30%";

        //skillImage.style.backgroundColor = "pink";
        //skillText.style.backgroundColor = "pink";

        const infoText = document.createElement("p");
        infoText.innerText = raymondMawina.getSkills()[index];
        infoText.style.fontSize = "medium";
        infoText.style.fontWeight = "bold";
        infoText.style.textTransform = "uppercase";
        infoText.style.marginTop = "47px";
        skillText.appendChild(infoText);

        const imageText = document.createElement("p");
        imageText.className = raymondMawina.getSkillIcon()[index];

        imageText.style.fontSize = "43px";
        imageText.style.marginTop = "34px";
        skillImage.appendChild(imageText);

        skillz.appendChild(skillImage);
        skillz.appendChild(skillText);
    }
}

function projects() {
    const raymondMawina = new Profile();
    raymondMawina.setName("Raymond Mawina");

    const title = document.getElementById("title");
    const titleText = document.createElement("h1");
    titleText.innerText = raymondMawina.getName();
    title.appendChild(titleText);

    const footer = document.getElementById("footer");
    const footerText = document.createElement("h4");
    footerText.innerText = `copyright \u00A9 by ` + raymondMawina.getName();
    footer.appendChild(footerText);
}

function contacts() {
    const raymondMawina = new Profile();
    raymondMawina.setName("Raymond Mawina");

    const title = document.getElementById("title");
    const titleText = document.createElement("h1");
    titleText.innerText = raymondMawina.getName();
    title.appendChild(titleText);

    const footer = document.getElementById("footer");
    const footerText = document.createElement("h4");
    footerText.innerText = `copyright \u00A9 by ` + raymondMawina.getName();
    footer.appendChild(footerText);

    raymondMawina.setCellNumber("071-466-1268");
    raymondMawina.setEmail("rmawina@gmail.com");
    raymondMawina.setGitHub("https://github.com/Raymond-Mawina");
    raymondMawina.setWebsite("https://raymond-mawina.github.io/");
    raymondMawina.setLinkedIn(
        "https://www.linkedIn.com/mwlite/in/raymond-mawina-954922b7"
    );
    raymondMawina.setCV("../pdf/RaymondMawina-CV.pdf");

    raymondMawina.setCellIcon("fa-solid fa-mobile");
    raymondMawina.setGitHubIcon("fa-brands fa-github");
    raymondMawina.setLinkedInIcon("fa-brands fa-linkedin");
    raymondMawina.setEmailIcon("fa-solid fa-at");
    raymondMawina.setCVIcon("fa-solid fa-briefcase");
    raymondMawina.setWebsiteIcon("fa-solid fa-globe");

    const contacts = document.getElementById("content-contacts");

    const masterCell = document.createElement("div");
    masterCell.style.width = "99%";

    const photo = document.createElement("div");
    const number = document.createElement("div");
    photo.style.float = "left";
    number.style.float = "left";
    photo.style.width = "10%";
    number.style.width = "25%";
    photo.style.marginLeft = "33%";
    photo.style.border = "solid";
    number.style.border = "solid";
    number.style.height = "22.9vh";
    number.style.marginLeft = "5px";
    number.style.marginTop = "5px";
    photo.style.marginTop = "5px";

    const nPhoto = document.createElement("p");
    nPhoto.className = raymondMawina.getCellIcon();
    nPhoto.style.fontSize = "50px";

    const nNumber = document.createElement("p");
    nNumber.innerText = raymondMawina.getCellNumber();
    nNumber.style.marginTop = "61px";

    photo.appendChild(nPhoto);
    number.appendChild(nNumber);

    masterCell.appendChild(photo);
    masterCell.appendChild(number);
    contacts.appendChild(masterCell);

    const masterE = document.createElement("div");
    masterE.style.width = "99%";
    const photoE = document.createElement("div");
    const email = document.createElement("div");
    photoE.style.float = "left";
    email.style.float = "left";
    photoE.style.width = "10%";
    email.style.width = "25%";
    photoE.style.marginLeft = "33%";
    photoE.style.border = "solid";
    email.style.border = "solid";
    email.style.height = "22.9vh";
    email.style.marginLeft = "5px";
    email.style.marginTop = "5px";
    photoE.style.marginTop = "5px";

    const ePhoto = document.createElement("p");
    ePhoto.className = raymondMawina.getEmailIcon();
    ePhoto.style.fontSize = "50px";

    const eNumber = document.createElement("p");
    eNumber.innerText = raymondMawina.getEmail();
    eNumber.style.marginTop = "61px";

    photoE.appendChild(ePhoto);
    email.appendChild(eNumber);

    masterE.appendChild(photoE);
    masterE.appendChild(email);
    contacts.appendChild(masterE);

    const masterG = document.createElement("div");
    masterG.style.width = "99%";
    const photoG = document.createElement("div");
    const github = document.createElement("div");
    photoG.style.float = "left";
    github.style.float = "left";
    photoG.style.width = "10%";
    github.style.width = "25%";
    photoG.style.marginLeft = "33%";
    photoG.style.border = "solid";
    github.style.border = "solid";
    github.style.height = "22.9vh";
    github.style.marginLeft = "5px";
    github.style.marginTop = "5px";
    photoG.style.marginTop = "5px";

    const gPhoto = document.createElement("p");
    gPhoto.className = raymondMawina.getGitHubIcon();
    gPhoto.style.fontSize = "50px";

    const gNumber = document.createElement("a");
    gNumber.href = raymondMawina.getGitHub();
    gNumber.innerHTML = "GITHUB";

    const gDiv = document.createElement("div");
    gDiv.appendChild(gNumber);
    gDiv.style.marginTop = "65px";

    gNumber.style.marginTop = "61px";

    photoG.appendChild(gPhoto);
    github.appendChild(gDiv);

    masterG.appendChild(photoG);
    masterG.appendChild(github);
    contacts.appendChild(masterG);

    const masterL = document.createElement("div");
    masterL.style.width = "99%";
    const photoL = document.createElement("div");
    const linked = document.createElement("div");
    photoL.style.float = "left";
    linked.style.float = "left";
    photoL.style.width = "10%";
    linked.style.width = "25%";
    photoL.style.marginLeft = "33%";
    photoL.style.border = "solid";
    linked.style.border = "solid";
    linked.style.height = "22.9vh";
    linked.style.marginLeft = "5px";
    linked.style.marginTop = "5px";
    photoL.style.marginTop = "5px";

    const lPhoto = document.createElement("p");
    lPhoto.className = raymondMawina.getLinkedInIcon();
    lPhoto.style.fontSize = "50px";

    const lNumber = document.createElement("a");
    lNumber.href = raymondMawina.getLinkedIn();
    lNumber.innerHTML = "LINKEDIN";

    const lDiv = document.createElement("div");
    lDiv.appendChild(lNumber);
    lDiv.style.marginTop = "65px";

    lNumber.style.marginTop = "61px";

    photoL.appendChild(lPhoto);
    linked.appendChild(lDiv);

    masterL.appendChild(photoL);
    masterL.appendChild(linked);
    contacts.appendChild(masterL);

    const masterW = document.createElement("div");
    masterW.style.width = "99%";
    const photoW = document.createElement("div");
    const web = document.createElement("div");
    photoW.style.float = "left";
    web.style.float = "left";
    photoW.style.width = "10%";
    web.style.width = "25%";
    photoW.style.marginLeft = "33%";
    photoW.style.border = "solid";
    web.style.border = "solid";
    web.style.height = "22.9vh";
    web.style.marginLeft = "5px";
    web.style.marginTop = "5px";
    photoW.style.marginTop = "5px";

    const wPhoto = document.createElement("p");
    wPhoto.className = raymondMawina.getWebsiteIcon();
    wPhoto.style.fontSize = "50px";

    const wNumber = document.createElement("a");
    wNumber.href = raymondMawina.getWebsite();
    wNumber.innerHTML = "MY PERSONAL SITE";

    const wDiv = document.createElement("div");
    wDiv.appendChild(wNumber);
    wDiv.style.marginTop = "65px";

    wNumber.style.marginTop = "61px";

    photoW.appendChild(wPhoto);
    web.appendChild(wDiv);

    masterW.appendChild(photoW);
    masterW.appendChild(web);
    contacts.appendChild(masterW);

    const masterC = document.createElement("div");
    masterC.style.width = "99%";
    const photoC = document.createElement("div");
    const cv = document.createElement("div");
    photoC.style.float = "left";
    cv.style.float = "left";
    photoC.style.width = "10%";
    cv.style.width = "25%";
    photoC.style.marginLeft = "33%";
    photoC.style.border = "solid";
    cv.style.border = "solid";
    cv.style.height = "22.9vh";
    cv.style.marginLeft = "5px";
    cv.style.marginTop = "5px";
    photoC.style.marginTop = "5px";

    const cPhoto = document.createElement("p");
    cPhoto.className = raymondMawina.getCVIcon();
    cPhoto.style.fontSize = "50px";

    const cNumber = document.createElement("a");
    cNumber.href = raymondMawina.getCV();
    cNumber.innerHTML = "DOWNLOAD MY CV";

    const cDiv = document.createElement("div");
    cDiv.appendChild(cNumber);
    cDiv.style.marginTop = "65px";

    cNumber.style.marginTop = "61px";

    photoC.appendChild(cPhoto);
    cv.appendChild(cDiv);

    masterC.appendChild(photoC);
    masterC.appendChild(cv);
    contacts.appendChild(masterC);
}
