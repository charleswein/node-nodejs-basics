import {readFile} from "node:fs/promises";
import {join} from "node:path";
import {createHash} from "node:crypto";
import {getPathToFolders} from "../utils.mjs";

const {pathToFilesFolder} = getPathToFolders(import.meta.url)

const calculateHash = async () => {
    // Write your code here
    const file = await readFile(join(pathToFilesFolder, '/fileToCalculateHashFor.txt'))
    console.log(createHash('sha256').update(file).digest('hex'));
};

await calculateHash();
