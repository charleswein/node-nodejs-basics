import {createWriteStream} from "node:fs";
import {join} from "node:path";
import {pipeline} from "node:stream/promises";
import {getPathToFolders} from "../utils.mjs";

const {pathToFilesFolder} = getPathToFolders(import.meta.url)

const write = async () => {
    // Write your code here
    const ws = createWriteStream(join(pathToFilesFolder, '/fileToWrite.txt'))
    
    try {
        await pipeline(process.stdin, ws)
    } catch (err) {
        throw err
    }
};

await write();
