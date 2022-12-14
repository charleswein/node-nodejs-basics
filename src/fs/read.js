import {join} from "node:path";
import {readFile as fsPromiseRead} from "node:fs/promises"
import {getPathToFolders, operationFailedMessage} from "../utils.mjs";

const {pathToFilesFolder} = getPathToFolders(import.meta.url)

const read = async () => {
    // Write your code here
    try {
        const file = await fsPromiseRead(join(pathToFilesFolder, '/fileToRead.txt'), {encoding: "utf-8"})
        console.log(file)
    } catch (err) {
        if(err.code === "ENOENT") {
            throw new Error(operationFailedMessage)
        }

        throw err
    }
};

await read();
