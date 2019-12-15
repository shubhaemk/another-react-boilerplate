# Another React Boilerplate
![Header-GIF](https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif)

Cloning this repository (for now!) will get you started with building [React](https://reactjs.org/) projects faster.

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
\
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
* If it still does not work, Select None option in Source dropdown and then again docs option
* _Happy Hacking!_

## FAQ :astonished:

* Why is final build folder in .gitignore?
> If you're using GitHub for deployment, you'll use /docs to deploy( mostly ), so to avoid repetition it's in .gitignore but feel free to remove it!

## Future :star:

* Use it in as many [React](https://reactjs.org/) apps
* Document error if any and fix them
* Create a start up script like [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)

