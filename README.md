Chrome extensions
=================

## Requirements
* [Node](http://nodejs.org/) installed 
* Install grunt-cli with `$ npm install -g grunt-cli`

## Installation

Retreive the dependencies with `$ npm install`

Run grunt from the repo dir: `$ grunt` This generates the extensions in the build dir.

## Current extensions
### Load jquery bookmarklet. 
A bookmarklet which loads jquery into the current page. Good for pages which doesn't contain
jQuery by default. Like google.com, for instance.

Located in build/getjquerybookmarklet.html

Just open the page in your browser and drag it into your bookmark bar. 
When you need jquery injected on the current page, just click the bookmarklet.
