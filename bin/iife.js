// -----------------------------------------------------------------------------
// node script for wraping a file in IIFE
// -----------------------------------------------------------------------------

const fs = require("fs");
const thisProcess = require("process");

const iifeStart = "\n;(function () {\n";
const iifeEnd = "\n})();\n";

// make sure file paramter given
const file = thisProcess.argv[2];
if (typeof file !== "string") {
  throw new Error("Missing file parameter!");
}

const fileData = fs.readFileSync(file);
fs.writeFileSync(file, iifeStart + fileData + iifeEnd);

console.info("IIFE", file);
