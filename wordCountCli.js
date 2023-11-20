"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const { program } = require("commander");
const packageJson = require("./package.json");
const packageVersion = packageJson.version;
program
    .version(packageVersion)
    .description("A simple CLI to count words in a document")
    .option("-f, --file <file>", "Path to the document file")
    .parse(process.argv);
const filePath = program.file;
console.log("File path:", filePath);
if (!filePath) {
    console.error("Error: Please provide the path to the document file using the -f or --file option.");
    process.exit(1);
}
// Read the file content
const fileContent = fs.readFileSync(path.resolve(filePath), "utf-8");
// Count words
const wordCount = fileContent.split(/\s+/).filter(Boolean).length;
console.log(`Word count: ${wordCount}`);
