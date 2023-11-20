import * as fs from "fs";
import * as path from "path";
const { program } = require("commander");

const packageJson: { version: string } = require("./package.json");
const packageVersion: string = packageJson.version;

program
  .version(packageVersion)
  .description("A simple CLI to count words in a document")
  .option("-f, --file <file>", "Path to the document file")
  .parse(process.argv);

const filePath: string | undefined = program.file;
console.log("File path:", filePath);

if (!filePath) {
  console.error(
    "Error: Please provide the path to the document file using the -f or --file option."
  );
  process.exit(1);
}

// Read the file content
const fileContent: string = fs.readFileSync(path.resolve(filePath), "utf-8");

// Count words
const wordCount: number = fileContent.split(/\s+/).filter(Boolean).length;

console.log(`Word count: ${wordCount}`);
