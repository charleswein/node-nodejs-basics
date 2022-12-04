import {getPathToFolders, operationFailedMessage} from "../utils.mjs";
import {readdir} from "node:fs/promises";

const {pathToFilesFolder} = getPathToFolders(import.meta.url)

const list = async () => {
    // Write your code here
    try {
        const files = await readdir(pathToFilesFolder)

        files.forEach(value => console.log(value))
    } catch (err) {
        if(err.code === "ENOENT") {
            throw new Error(operationFailedMessage)
        }
        throw err
    }
};

await list();
