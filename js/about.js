const raymondMawina = new Profile();
raymondMawina.setName("Raymond Mawina");
raymondMawina.setAboutMe(
	"I am a coding newbie, aspiring to become a Snr Software Engineer."
);
raymondMawina.setAboutMe(
	"I am learning the in's and out's of programming and the tricks of trade when it comes to designing and developing websites and web applications."
);
raymondMawina.setAboutMe("My Short term goal is to become a Jr Web developer.");
raymondMawina.setAboutMe(
	"My Long term goal is to become a Snr Software Engineer."
);
raymondMawina.setAboutMe(
	"I am currently seeking learning opportunities, I crave opportunities like ICT NQF level 5 learnerships and internships for entry positions in tech."
);
raymondMawina.setAboutMe(
	"I am level headed and I am always learning usually by reading documentation about programming language or frameworks."
);
raymondMawina.setAboutMe(
	"My highest level of education is NQF 4 Grade 12. I got my matric in 2017."
);

const title = document.getElementById("title");
const titleText = document.createElement("h1");
titleText.innerText = raymondMawina.getName();
title.appendChild(titleText);

const footer = document.getElementById("footer");
const footerText = document.createElement("h4");
footerText.innerText = `copyright \u00A9 by ` + raymondMawina.getName();
footer.appendChild(footerText);

const aboutMe = document.getElementById("content-aboutMe");
const myName = document.createElement("p");
myName.style.width = "80%";
myName.style.marginLeft = "8%";
myName.style.border = "solid";
myName.style.padding = "15px";
myName.innerText = "My name is " + raymondMawina.getName();
aboutMe.appendChild(myName);

for (let index = 0; index < raymondMawina.getAboutMe().length; index++) {
	const aboutMeText = document.createElement("p");
	aboutMeText.style.width = "80%";
	aboutMeText.style.marginLeft = "8%";
	aboutMeText.style.border = "solid";
	aboutMeText.style.padding = "15px";
	aboutMeText.innerText = raymondMawina.getAboutMe()[index];
	aboutMe.appendChild(aboutMeText);
}
