import {join} from "node:path";
import {rm} from "node:fs/promises";
import {getPathToFolders, operationFailedMessage} from "../utils.mjs";

const {pathToFilesFolder} = getPathToFolders(import.meta.url)

const remove = async () => {
    // Write your code here
    const pathToFile = join(pathToFilesFolder, '/fresh.txt')

    try {
        await rm(pathToFile)
    } catch (err) {
        if(err.code === "ENOENT") {
            throw new Error(operationFailedMessage)
        }
        throw err
    }
};

await remove();
