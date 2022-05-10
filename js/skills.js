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
