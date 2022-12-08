import { readFile } from "fs";

import { hello } from "./hello.js";

export function hello() {
  console.log("Hello world!");
}

readFile();
