# Another React Boilerplate

![Header-GIF](https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif)

Cloning this repository (for now!) will get you started with building [React](https://reactjs.org/) projects faster.

[![License: MIT](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/shubhaemk/another-react-boilerplate/blob/master/LICENSE) 
[![David](https://david-dm.org/shubhaemk/another-react-boilerplate.svg)](https://david-dm.org/shubhaemk/another-react-boilerplate?type=dev)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/shubhaemk/another-react-boilerplate)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://twitter.com/shubham_kamath)

## Try It :yum:

* ```git clone https://github.com/shubhaemk/another-react-boilerplate.git your-project-folder```
* Then change **git origin** to your repository, **project name** and **author name** in package.json
* ```npm install```
* ```npm run start``` to run
* ```npm run build``` to create a production build
* ```npm run deploy``` to deploy on GitHub ( [Instructions](https://github.com/shubhaemk/another-react-boilerplate#deploy) )
* Clean up ```src/app.jsx``` once everything is up!
* _Happy Hacking!_

## Features :fire:

- [x] ES6+ -> ES5
- [x] JSX -> JS
- [x] HMR
- [x] Media bundling
- [x] Webpack, Babel modular configuration
- [x] Error Overlay
- [x] CSS support
- [x] SASS support
- [x] CSS Minification
- [x] CSS prefixer
- [x] Different configuration files for Production and Development
- [x] Lint support
- [x] Vendor Bundling in final build
- [x] Deployable build to GitHub using docs option. Guide below!

## Deploy :cloud: 

* ```npm run deploy``` will create a docs folder in application directory with a build
* Commit and push those changes to GitHub
* Go to your repository -> Settings -> GitHub Pages -> Source
* Select docs option from the dropdown
* A link will be generated which will be activated after few minutes
* If it still does not work, Select None option in Source dropdown and then docs option again
* _Happy Hacking!_

## FAQ :astonished:

* Why is final build folder in .gitignore?
> If you're using GitHub for deployment, you'll use /docs to deploy( mostly ), so to avoid repetition it's in .gitignore but feel free to remove it!

* Why not deploy it using gh-pages?
> Deploying via gh-pages required me to go beyond the scope of this project, using docs it's easier.

## Future :star:

* Use it in as many [React](https://reactjs.org/) apps
* Document error if any and fix them
* Create a start up script like [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)

