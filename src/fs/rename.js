import {getPathToFolders, operationFailedMessage} from "../utils.mjs";
import {open, rename as fsPromiseRename} from "node:fs/promises";
import {join} from "node:path";

const {pathToFilesFolder} = getPathToFolders(import.meta.url)

const rename = async () => {
    // Write your code here
    const fileToRename = '/wrongFilename.txt'
    const newFileName = '/properFilename.md'

    try {
        await open(join(pathToFilesFolder, newFileName),'wx')
        await fsPromiseRename(join(pathToFilesFolder, fileToRename), join(pathToFilesFolder, newFileName))
    } catch (err) {
        if(err.code === "ENOENT" || err.code === "EEXIST") {
            throw new Error(operationFailedMessage)
        }

        throw err
    }
};

await rename();
