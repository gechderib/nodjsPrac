// npm global command come with node
// npm --version

// local dependency - use it in particular project
// npm i<package name> exmaple npm i lodash or npm i bootstrap

// global dependency - use it in any project
// npm install -g <packagename>
// npm i nodemon -D

// package.json - a minfest file (stor important info about project)
// manual approach create the package in the root dir

// npm init (step by step press enter to skip)
// npm init -y (default everything)

// npm install 
// npm uninstall <packagename>

// npm start 
// npm run dev

// npm uninstall bootstrap
//
const _ = require('lodash')
const item = [1,[2,[3,[4]]]]

const newItem = _.flattenDeep(item)
console.log(newItem)
console.log('hello world to check')
