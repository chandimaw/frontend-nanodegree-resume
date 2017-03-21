var bio = {
	"name": "Chandima Wijendra",
	"role": "Associate",
	"contacts": {
		"mobile": "+60 17 338  1231",
		"email": "chandimawijendra@gmail.com",
		"github": "chandimaw",
		"twitter": "@cwijendra",
		"location": "Kuala Lumpur, Malaysia"
	},
	"biopic": "images/chandima.jpg",
	"welcomeMessage": "",
	"skills": ["HTML", "CSS", "JavaScript", "Software Development", "Teaching", "Ruby"]
};

bio.display = function(){
//name, title, image are displayed on the header
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

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

	if(work.jobs.length > 0){

		work.jobs.forEach(function(job){

			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

			//concat
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			var formattedDates = HTMLworkDates.replace("%data%", job.date);
			var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

			$(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
		});
	}
};


var education = {
    "schools": [{
        "name": "Universiti Malaysia Sarawak",
        "location": "Samarahan, Sarawak",
        "degree": "B.Sc.(Hon) Computer Science",
        "majors": ["Software Engineering"],
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
				"title": "Front-End Web Developer",
				"school": "Udacity",
				"dates": "In Progress",
				"url": "www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
			}
	]
};

// education.display = function(){
// 	for (var i = 0; i < education.schools.length; i++) {
// 			$("#education").append(HTMLschoolStart);
//
// 			var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
// 			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
// 			$(".education-entry:last").append(formattedName + formattedDegree);
//
// 			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
// 			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
// 			// $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
// 			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.schools[i].url));
// 	}
//
// 	$("#education").append(HTMLonlineClasses);
// 	for (var k = 0; k < education.onlineCourses.length; k++) {
// 			$("#education").append(HTMLschoolStart);
//
// 			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
// 			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
// 			$(".education-entry:last").append(formattedTitle + formattedSchool);
//
// 			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates));
// 			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[k].url));
// 	}
// };

education.display = function () {
    if(education.schools.length > 0) {
        education.schools.forEach(function(school){
            $("#education").append(HTMLschoolStart);

            var formattedschoolName = HTMLschoolName.replace("#", school.url).replace("%data%", school.name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
            var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

            $(".education-entry:last").append(formattedschoolNameDegree, formattedschoolDates, formattedschoolLocation, formattedschoolMajor);
        });
    }

    if(education.onlineCourses.length > 0) {

        $("#education").append(HTMLonlineClasses);  //Placed before the loop otherwise it will be repeated twice.

        education.onlineCourses.forEach(function(online){

						$("#education").append(HTMLschoolStart);

            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", online.title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", online.school);
            var formattedTitleSchool = formattedonlineTitle + formattedonlineSchool;
            var formattedonlineDates = HTMLonlineDates.replace("%data%", online.dates);
            var formattedonlineURL = HTMLonlineURL.replace('#', online.url).replace("%data%", online.school);

            $(".education-entry:last").append(formattedTitleSchool, formattedonlineDates, formattedonlineURL);
        });
    }
};



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

bio.display();
work.display();
education.display();
projects.display();


// function inName(name){
// 	name = name.trim().split(" ");
//
// 	console.log(name);
//
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//
// 	return name[0]+" "+name[1];
// }
//
// $('#header').append(internationalizeButton);

$("#mapDiv").append(googleMap);
