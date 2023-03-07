import chalk from "chalk";

export function unique(array) {
  let uniqueArray = new Set(array)
  return Array.from(uniqueArray);
}

export function print(text) {
  return console.log(text)
}

export function printErr(err) {
  return console.log(chalk.bold.red(err));
}

export function printSucc(err) {
  return console.log(chalk.blue(err));
}



