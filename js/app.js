/* global ko */
"use strict";

var frontEndUdacityProjectsData = [{
	name: 'Project 1: Simple Portfolio',
	url: 'https://github.com/micyang/build-a-portfolio-site',
	description: 'Build simple porfolio using HTML and CSS',
	learningExperience: 'This was my first major undertaking in learning HTML and CSS. I learned to think in boxes for each HTML element and how the CSS interacted with HTML. Thinking in this way, I was able to use bootstrap to organize my content with rows and columns.'
}, {
	name: 'Project 2: Online Resume',
	url: 'https://github.com/micyang/frontend-nanodegree-resume',
	description: 'Modify existing sample resume',
	learningExperience: 'Udacity provided a large set of variables and functions for manipulating the DOM. At first it was overwhelming because the helperjs file had tons of code, but the comments helped me to understand what was going on. So I could understand the geist of it.'
}, {
	name: 'Project 3: Classic Arcade Clone',
	url: 'https://github.com/micyang/frontend-nanodegree-arcade-game',
	description: 'Build simple frogger clone using javascript object oriented programming',
	learningExperience: 'Udacity provided visual assets and an engine for the game to run on. It was the first time using javascript pseudo-classical object oriented programming. I created classes for player, enemies, and items. One of the major challenges was understanding scoping. I had a problem using "this" in one of my functions that I did not realize at the time but fixed it assigning "this" to a variable self.'
}, {
	name: 'Project 4: Website Optimization',
	url: 'https://github.com/micyang/frontend-nanodegree-mobile-portfolio',
	description: 'Optimize one website to have Google speed score of 90 or higher and another website to have 60 frames per second',
	learningExperience: 'Udacity provided sample websites for optimization. Learned about how reducing Critical Rendering Path (CRP) to increase the page load speed. By inlining and calling files asynchronously, it increases page load speed. To optimize the page to 60 frames per second, it is necessary to identify caluations that are redundant and the amount of times it calls the DOM. Accessing the DOM frequently will cause a slow down, therefore assigning a DOM element to a variable will increase the frame rate.'
}, {
	name: 'Project 5: Neighborhood Map',
	url: 'https://github.com/micyang/neighborhood-map',
	description: 'Build one page application of google maps',
	learningExperience: 'One of the main things I learned was good software design by seperating model and view with viewModel. By separating concerns, editing data will not interfere with how the view is displayed and vice versa. I learned how to explore frameworks such as Google Maps and Yelp. The major challenge is figuring out to build this application from scratch. Udacity did not provide any sort of code base for this.'
}, {
	name: 'Project 6: Feed Reader',
	url: 'https://github.com/micyang/frontend-nanodegree-feedreader',
	description: 'Write tests for a website',
	learningExperience: 'Udacity provided a website for testing using a javascript testing framework, Jasmine. I learned about test driven software development. Writing the tests were straight forward, until the tests involving asynchronous data. The challenge was figuring out when exactly the data is gathered. For a while I had a problem with the for loop. I thought I could use the variable i in the for loop to increment the index but it turns out that I only get the last i value. In order to increment the indexI had to use the beforeEach and afterEach functions due to the asynchronous nature.'
}];

var ViewModel = function() {
	var self = this;
	
	self.frontEndUdacityProjects = ko.observableArray([]);
	
	self.init = function() {
		$.each(frontEndUdacityProjectsData, function(key, data) {
			data.learningExperienceInfo = ko.observable(false);
			data.toggleLearningExperienceInfo = function() {
				this.learningExperienceInfo(!this.learningExperienceInfo());
			};
			self.frontEndUdacityProjects.push(data);
		});
	};
	
	self.init();
};

$(ko.applyBindings(new ViewModel()));