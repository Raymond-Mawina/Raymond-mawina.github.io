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
