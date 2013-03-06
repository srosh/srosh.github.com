#Soroosh Izadian
***

####Email: [srosh@me.com](mailto:srosh@me.com)
####Website: [http://srosh.com/](http://srosh.com/)
***

##Education
###University of California Berkeley 2009 - 2012

####Bachelor of Arts, Computer Science

###Berkeley City College 2007 - 2009

***

##Experience and Skills

###Node.js and Javascript

* A web based REPL(Read Eval Print Loop) server for Node.js written in Javascript and HTML5. This project incorporates Websockets (using Socket.io), Express and ACE (Ajax.org Cloud9 Editor) for a realtime execution and representation of Javascript code on a remote Node.js host. You can view the project on [Github](https://github.com/srosh/REPLica) or access a demo deployed to Appfog [http://replica.srosh.com](http://replica.srosh.com).
* A server-side Document Object Model building and manipulation module for Node.js: This module supports parsing different text formats like Markdown, Emmet, JSONML, and HTML into a unified DOM structure which can be used to generate static web pages or automated data-scraping. There's more information on my website: [http://srosh.com/projects.html#flatdom](http://srosh.com/projects.html#flatdom)
* Javascript code that extracts color values in Twitter's Bootstrap CSS (Less) files and recompiles the stylesheet with different color values: [Project Page](http://srosh.com/projects.html#boot-color)
* A Node.js module for applying batch jobs to a group of files in a directory: [GitHub Repo](https://github.com/srosh/lsjs)
* An up-to-date version of my projects can be found at my personal website (at: [http://srosh.com/projects.html](http://srosh.com/projects.html)). This website is also a demonstration of my web development work, entirely done in HTML5 and using CSS, Javascript, jQuery and Twitter Bootstrap.


###iOS and Objective-C

During my years at UC Berkeley I participated in a student run seminar focused on learning Objc for four semesters. I was also enrolled in iOS individual program required for device tests and deployment to iTunes App Store. Personal projects I developed include:

* A pitch recognition app which processed audio input from iPhone's microphone using Fast Fourier Transform (FFT) and reproduced the closest musical tone in audio output. I leveraged the CoreAudio Framework and wrote code in C and Objective-C to make lower-level audio processing and high-level UI work together.
* A vector-drawing app using Quartz 2D Framework. I used iPhone's multi-touch capabilities and gestures to generate Bezier curves which were editable with vector handles very much like any commercial vector drawing software (for example Adobe Illustrator). At a later stage the project involved rendering custom views and performance optimizations.
* A Kaleidoscope that makes interactive patterns of pictures. This app is published on App Store at the following link: [https://itunes.apple.com/us/app/kaleid/id397281171](https://itunes.apple.com/us/app/kaleid/id397281171) . I used OpenGL ES for this project which was still going through changes at the time. With the introduction of Shaders to iOS I had to develop 2 different versions to support both old and new devices: one using Shaders to handle texture coordination and another using classic OpenGL approach to texturing.

###Back-end

design and implementation of a chat server and client which included the following: 

* designing a protocol for communicating messages between the server and client. this part involved brainstorming and writing up specifications as well as writing code for parser and serializer for said specifications. My major role in this project was implementing the parser and serializer in Java.
* designing a database schema for storing messages, server/client states and user authentication information. The database used was MySQL and I designed authentication and message tables. I also took part in writing appropriate SQL queries to communicate with the MySQL server and implementing them in Java.
* at a later stage our assignment was making the chat server runnable on multiple instances and in turn deploying it to the Amazon Web Services cloud servers. My part was writing Java code to facilitate communication between instances and testing/debugging the finished code.
* in addition to our coding roles we each took turns documenting the changes and specifications at every stage.


Projects for introduction to databases class :

* individual project that involved indexing and sorting massive amounts of text i.e. from an email database. this project was solely done using unix/gnu command line tools in Shell scripts.
* 2-person group project to implement a calendar/events web server using Ruby on Rails and PostgreSQL. My part was designing the tables and writing ActionScript code to access the data using Ruby as well as deploying the code over Heroku.
* Changing the functionality of a PostgreSQL plugin (similarity) by editing the source code in C. My role included writing code for major parts of the change and also writing compilation rules based on PostgreSQL specifications.


###Front-end, Computer Graphics and UI
Projects in Introduction to computer graphics and OpenGL class included working on:

* Mathematical concepts concerning the computation of splines and specifically drawing quadratic and cubic Bezier curves. as an extension to these exercises we were assigned individual projects to simulate drawing bezier curves in a C environment with mouse interaction.
* Using C and OpenGL to make a three dimensional world where the camera could move freely using mouse and keyboard. This project was particularly interesting as it introduced us to the basics of modern 3D games. This was a 2-person project and I worked on loading model files (.obj files), texturing, lighting and debugging parts of user interaction code including camera coordination.
* Implementing a Shader/Renderer based on Ray tracing in C. The result was a command line tool that would render a scene with a variety objects, materials, and lighting into a bitmap file. I was responsible for coding ray reflection for a subset of objects and testing code for different numbers of iteration.
* As a part of each project we were responsible for creating an HTML website and deploying it on campus computers using SSH and Apache.

Another related class I took was User Interface and User Experience design principles. In this class we explored common practices regarding input and output devices as well as design structures like MVC. The class was mostly focused on understanding and designing UI for handheld devices. Assignments in this class involved working on an Android device in a four person group to accomplish the following:

* Using a Bluetooth Wii remote to draw on an Android tablet screen. The project was done in Java and I was responsible for writing device interaction code as well as consolidating code written by the rest of the group.
* Making a mock-up App that involved every stage of design: group brainstorming, making prototypes, testing, etc. We made a cooking recipe App and in the process we produced paper prototypes, interviewed test users, made improvements to the design based on testers' feedback and presented the final design to the class.



>[This page in markdown](resume.md)
