# TDD with React and ES6

Completed Labs for TDD with React and ES6 by Chris Minnick

## About the Repo

You can clone the entire repository by running the command:

`git clone https://github.com/watzthisco/tdd-react-es6-labs`

This will create a new directory called tdd-react-es6-labs. Change into this directory with this command:

`cd tdd-react-es6-labs`

Each lab in the course (starting with Lab 7) is in its own branch. The branches are named in `labxx` format.
To see the finished files for Lab 7, for example, run this command:

`git checkout lab07`

## Installation

### With Internet Connection
1. Install Node
2. Install git
3. Install gulp 4 globally (follow instructions here https://demisx.github.io/gulp4/2015/01/15/install-gulp4.html)
3. In the console, type: `npm install`

### Without Internet Connection
1. Extract node_modules.zip
2. Test gulp commands using the local version of gulp with the following command:

`node_modules/.bin/gulp build`

3. If that works, try using the appropriate shell script in the root of
the project (either gulp.sh (Unix and Mac) or gulp.cmd (Windows)

`./gulp.sh build`

or

`gulp.cmd build`
 

## Usage

### Building

1. `gulp build`

### Testing

To Lint:

Use `gulp jshint` for JSHint
Use `gulp eslint` for ESLint

Run unit tests in Karma

1. Start Karma server: `gulp karma`
2. Open some browsers and go to http://localhost:9876 in each
3. `gulp test`

Run unit tests in the console:
`gulp jasmine`
or 
`gulp jest`

## Credits
written by Chris Minnick, copyright 2016, WatzThis?

## License
http://creativecommons.org/licenses/by-nc/4.0