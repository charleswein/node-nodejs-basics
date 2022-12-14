import {join} from "node:path";
import {open, writeFile} from "node:fs/promises";
import {getPathToFolders, operationFailedMessage} from "../utils.mjs";

const {pathToFilesFolder} = getPathToFolders(import.meta.url)

const create = async () => {
    // Write your code here
    const pathToFile = join(pathToFilesFolder,'/fresh.txt')

    try {
        await open(pathToFile,'wx')
        await writeFile(pathToFile, "I am fresh and young")
    } catch (err) {
        if(err.code === "ENOENT" || err.code === "EEXIST") {
            throw new Error(operationFailedMessage)
        }

        throw err
    }
};

await create();
