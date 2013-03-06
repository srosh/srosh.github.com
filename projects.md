>These are a few of my recent pet projects:<a id="paper"></a>

####Experiments with Paper.js
I was always interested in using HTML5 features like canvas and SVG tags. I found out about paper.js some time ago and it seems to make interaction with canvas a lot easier.

It's designed with vector drawing principals in mind and things like anchor points and handles (that one can find in all vector drawing programs) are built in to Paper.js. So I've been working on this small vector drawing web app: [canvas.html][CANVAS]. I'm doing this mostly for fun so I'm not sure if there's going to be a GitHub project or a finished app in the near future.
<a id="flatdom"></a>

***

###FlatDOM
This is a Node.js module for parsing and generating different representations of HTML (or XML) into server-side Document Object Model. This server-side DOM is good for building structured web page templates ( take a look at [33GO][3390] ) or extracting data from a compiled page.

Using CSS selectors to identify elements and inject data to a parsed DOM on a server-side script was an old idea of mine. It allows a cleaner syntax for templates and makes reusing snippets of code more straight-forward. Using Node.js to do this also means that the javascript code made for manipulation of the DOM can be used on both client and server.

My goal with both FlatDOM and 33GO is to make this DOM based representation and manipulation as seamless and easy as possible.
>Here's the [GitHub Repo for FlatDOM][GITHUBFLAT] <a id="3390"></a>

***

###33GO
33GO is an extension of [FlatDOM][FLAT] more focused on building HTML templates and static webpages. The basic idea is starting from a javascript object or a json file and making a DOM tree from different sources.

The motivation behind it is that different representations are more useful at separate parts of DOM building. [Markdown][MD] for example is lighter on syntax and good at making huge text nodes. [Emmet][EMMET] (aka zencoding) and [JsonML][JSONMl] on the other hand are very simple and easy ways to represent structure.

33GO makes it possible to mix and match these different technologies. For example every page on this website is auto generated from `.md` files and Emmet structures:

    {
     "mod":"emmet",
	 "val":"div.container>div.row>"
    },
	[
     {
      "mod":"emmet",
      "val":"div.side-left.span4>"
     },
     [
      {
		"mod": "emmet",
		"val": "(div.row-fluid.intro>div.span4.pull-right.right-align>img.gravatar+(span.full-name-title.first-name{Soroosh}+br+span.full-name-title{Izadian}))"
	  },
	  {
		"mod": "emmet",
		"val": "div.row-fluid>div.span12.pull-right.right-align"
	  },
	  [
		{
		  "mod": "md",
		  "type": "file",
		  "val": "./left-column.md"
		}
	  ]
	 ],
	 {
	   "mod": "emmet",
	   "val": "div.span2.pull-right>"
	 },
	 {
	   "mod": "emmet",
	   "val": "div.span6.pull-right>div.side-right"
	 },
	 [
	  {
	    "mod": "md",
	    "type": "file",
	    "var": "content"
	  }
	 ]
	],
    "./footer.3390"

This part of the json template file generates everything except the header on this page for example.


>Here's the [GitHub Repo for 33GO][GITHUB33GO] <a id="boot-color"></a>

***
###Color variables for BootStrap.css

The current version of Twitter's bootstrap framework doesn't have all the color codes on their `variables.less` file. This makes it hard to change the colors on different less files.

This little project of mine started as changing every possible color code in the compiled `bootstrap.css` file and moved on to extracting color codes from all the original `.less` files.

My final goal was to change Bootstrap's color palette. So I implemented another class that would find closest colors in a palette to Bootstrap's original colors. The result is a [solarized][SOLAR] theme that I'm using on this website.
>Here's the [GitHub Repo for boot-color][GITHUBBOOT]

***
>[This page in markdown](projects.md)

[PAPER]: #paper
[3390]: #3390
[FLAT]: #flatdom
[SOLAR]: http://ethanschoonover.com/solarized
[EMMET]: http://docs.emmet.io
[JSONML]: http://www.jsonml.org
[MD]: http://daringfireball.net/projects/markdown
[CANVAS]: canvas.html
[GITHUBFLAT]: https://github.com/srosh/FlatDOM
[GITHUB33GO]: https://github.com/srosh/33GO
[GITHUBBOOT]: https://github.com/srosh/boot-color
