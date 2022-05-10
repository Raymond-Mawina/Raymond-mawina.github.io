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