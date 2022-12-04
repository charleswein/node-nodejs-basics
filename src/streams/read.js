import {join} from "node:path";
import {createReadStream} from "node:fs";
import {getPathToFolders} from "../utils.mjs";
import {pipeline} from "node:stream/promises";

const {pathToFilesFolder} = getPathToFolders(import.meta.url)

const read = async () => {
    // Write your code here
    const rs = createReadStream(join(pathToFilesFolder, '/fileToRead.txt'), {encoding: "utf-8"})

    try {
        await pipeline(rs, process.stdout)
    } catch (err) {
        throw err
    }
};

await read();
