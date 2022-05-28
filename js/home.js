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

    const aboutMe = document.getElementById("about");
    const mypic = document.getElementById("mypic");
    mypic.src = "../img/" + raymondMawina.getName().replace(" ", "") + ".png";

    const myName = document.getElementById("myname");
    myName.innerText = "I am " + raymondMawina.getName();

    const aboutMeText = document.getElementById("about-p");
    for (let index = 0; index < raymondMawina.getAboutMe().length; index++) {
        aboutMeText.innerText += raymondMawina.getAboutMe()[index];
    }
}

about();

function skills() {
    const raymondMawina = new Profile();
    raymondMawina.setName("Raymond Mawina");

    raymondMawina.setSkill("HTML");
    raymondMawina.setSkillIcon("devicon-html5-plain-wordmark");
    raymondMawina.setSkill("CSS");
    raymondMawina.setSkillIcon("devicon-css3-plain-wordmark");
    raymondMawina.setSkill("JS");
    raymondMawina.setSkillIcon("devicon-express-original");
    raymondMawina.setSkill("PHP");
    raymondMawina.setSkillIcon("devicon-php-plain");
    raymondMawina.setSkill("MySQL");
    raymondMawina.setSkillIcon("devicon-mysql-plain-wordmark");

    const skillz = document.getElementById("content-skills");
    //console.log(raymondMawina.getSkills().length);
    for (let index = 0; index < raymondMawina.getSkills().length; index++) {
        const skill = document.createElement("strong");
        skill.className = "stack";
        skill.innerText = raymondMawina.getSkills()[index];
        skillz.appendChild(skill);
    }
}

skills();

function projects() {}

function contacts() {
    const raymondMawina = new Profile();
    raymondMawina.setName("Raymond Mawina");

    raymondMawina.setCellNumber("0714661268");
    raymondMawina.setEmail("rmawina@gmail.com");
    raymondMawina.setGitHub("https://github.com/Raymond-Mawina");
    raymondMawina.setWebsite("https://raymond-mawina.github.io/");
    raymondMawina.setLinkedIn("https://www.linkedin.com/in/raymond-mawina/");
    raymondMawina.setCV("../pdf/RaymondMawina-CV.pdf");

    const contacts = document.getElementById("content-contacts");
    const cell = document.getElementById("cell");
    cell.innerText = "Phone: " + raymondMawina.getCellNumber();
    const email = document.getElementById("email");
    email.innerText = "Email: " + raymondMawina.getEmail();

    const github = document.getElementById("github");
    github.href = raymondMawina.getGitHub();
    const linked = document.getElementById("linked");
    linked.href = raymondMawina.getLinkedIn();
    const website = document.getElementById("website");
    website.href = raymondMawina.getWebsite();
    const download = document.getElementById("download");
    download.href = raymondMawina.getCV();

    github.style.textDecoration = "none";
    github.style.color = "white";
    linked.style.textDecoration = "none";
    linked.style.color = "white";
    website.style.textDecoration = "none";
    website.style.color = "white";
    download.style.textDecoration = "none";
    download.style.color = "white";
}

contacts();
