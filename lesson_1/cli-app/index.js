// const { resolve } = require("path");
const { readFile, writeFile } = require("fs/promises");

const { program } = require("commander");

program
  .option("--from [filename]", "File to copy from", "")
  .option("--to [filename]", "File to copy to", "")
  .parse(process.argv);

const opts = program.opts();

// const fromPath = resolve(__dirname, "test.txt");
// const toPath = resolve(__dirname, "copy.txt");

readFile(opts.from)
  .then((data) => writeFile(opts.to, data))
  .then(() => console.log("copy finished"))
  .catch((error) => console.error("Error", error));

console.log("Hello!");
