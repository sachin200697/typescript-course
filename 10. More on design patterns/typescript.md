## create compile config file for typescript: tsconfig.json

tsc --init

It will generate a file with many config options available inside it.

Option:

rootDir: is for scource code for typescript

outDir: is for compiled files

after defining above two options, we just need to use tsc to compile files inside src folder to build folder

we can also use "tsc -w" command. It will watch all changes automatically

## Automate compiling and executing 

npm init -y

npm i nodemon concurrently

add scripts to package.json file:

"start:build": "tsc -w",

"start:run": "nodemon build/index.js",

"start": "concurrently npm:start:*"  // it means take all npm scripts that begin with start: and run them.