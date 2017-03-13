// var skills = ["front-end developmet","teaching","organiser"];
//
// var work = {};
//
// work.position = "Associate";
// work.employer = "Digi";
// work.years = "0.5"
//
// var education= {};
//
// education["name"] = "Universiti Malaysia Sarawak";
// education["years"] = "2012 - 2016" ;
//
//  $("#main").append(work["position"]);
//  $("#main").append(education.name);

var bio = {
	"name": "Chandima Wijendra",
	"role": "Associate",
	"contacts": {
		"email": "chandimawijendra@gmail.com",
		"mobile": "+60 17 338  1231",
		"github": "chandimaw",
		"twitter": "@cwijendra",
		"location": "Kuala Lumpur, Malaysia"
	},
	"picture": "images/chandima.jpg",
	"welcomeMessage": "",
	"skills": ["HTML", "CSS", "JavaScript", "Software Development", "Teaching", "Ruby"]
};

bio.display = function(){

//name, title, image are displayed on the header
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.picture));

	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}

	$("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	// $("#twitterDiv").append(twitterFeed);
};

bio.display();

var work = {
	"jobs":
	[
		{
			"employer": "Digi Telecommunications Sdn Bhd",
			"title": "Associate, Technology Operations Centre",
			"location": "Shah Alam, Selangor",
			"date": "July 2016 - Present",
			"description": "I was hired to come up with solutions to reduce the number of trouble tickets that needs to solved " +
			"for our customers and stakeholders. We worked on gathering data of the types of complaints and come up with solutions such as automating " +
			"processes, optimizing SLAs, standardise SOP with stakeholders and providing fast resolution with quality."
		},
		{
			"employer": "VITALSYNAPSE Sdn Bhd",
			"title": "Technical Lead",
			"location": "Kuala Lumpur, Wilayah Persekutuan",
			"date": "Jan 2016 - Jun 2016",
			"description": "Planned and implement technology stack, architecture and development methodology to be used " +
			"for VitalSynapse (Initial Stage). At the same time, I worked on developing the prototype based on business and software requirements " +
			"I also had the opportunity to assist in R&D for data acquisition of medical records."
		}
	]
};

work.display = function() {
	for (job in work.jobs){
		//create new div for work experience
		$("#workExperience").append(HTMLworkStart);


		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		//concat
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

work.display();


var education = {
    "schools": [{
        "name": "Universiti Malaysia Sarawak",
        "location": "Samarahan, Sarawak",
        "degree": "B.Sc.(Hon) Computer Science",
        "majors": "Software Engineering",
        "dates": "2012/2013",
        "url": "www.unimas.my"
    }],
    "onlineCourses": [
			{
				"title": "Computer Science 101",
				"school": "Stanford Online",
				"dates": "August 2015",
				"url": "lagunita.stanford.edu"
			},
			{
				"school": "Udacity",
				"title": "Front-End Web Developer",
				"dates": "In Progress",
				"url": "www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
			}
	]
};

education.display = function(){
	for (var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			$(".education-entry:last").append(formattedName + formattedDegree);

			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
			// $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.schools[i].url));
	}

	$("#education").append(HTMLonlineClasses);
	for (var k = 0; k < education.onlineCourses.length; k++) {
			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
			$(".education-entry:last").append(formattedTitle + formattedSchool);

			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[k].url));
	}
};

education.display();

var projects = {
	"projects": [
		{
			"title": "Online Portfolio",
			"dates": "February 2017",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/portfolio1.png"],
			"url": "https://github.com/chandimaw/udacity-portfolio"
		},
		{
			"title": "Brewing Something Cool",
			"dates": "In Progress",
			"description": "Developing front-end for cool projects",
			"images": ["images/portfolio2.png"],
			"url": "https://github.com/chandimaw/brewingsomething"
		}
	]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));

        for (var j = 0; j < projects.projects[i].images.length; j++) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
        }
    }
};

projects.display();


function inName(name){
	name = name.trim().split(" ");

	console.log(name);

	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];
}

$('#header').append(internationalizeButton);

$("#mapDiv").append(googleMap);
