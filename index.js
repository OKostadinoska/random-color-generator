// importing color libraries from npm
import chalk from 'chalk';
import randomColor from 'randomcolor';

// giving a name to the process.argv property (initialize)
const hueColor = process.argv[2];
const luminosityColor = process.argv[3];

// returns a hex code for a random color
const selectedColor = randomColor({
  hue: hueColor,
  luminosity: luminosityColor,
});

// Use RGB colors in terminal emulators that support it
console.log(
  chalk.hex(selectedColor).bold(`############################
############################
############################
#####                 ######
#####    ${selectedColor}      ######
#####                 ######
############################
############################
############################`),
);
