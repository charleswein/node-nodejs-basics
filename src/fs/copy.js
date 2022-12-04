import {join} from "node:path";
import {constants, copyFile, mkdir, readdir} from "node:fs/promises";
import {getPathToFolders, operationFailedMessage} from "../utils.mjs";

const {pathToSourceFolder, pathToFilesFolder} = getPathToFolders(import.meta.url)
const pathToFilesCopyDir = join(pathToSourceFolder, '/files_copy')

const copy = async () => {
    // Write your code here
    try {
        await mkdir(pathToFilesCopyDir)
        const files = await readdir(pathToFilesFolder)
        for await (const fileName of files) {
            try {
                await copyFile(`${pathToFilesFolder}/${fileName}`, `${pathToFilesCopyDir}/${fileName}`, constants.COPYFILE_EXCL)
            } catch (err) {
                throw new Error(operationFailedMessage)
            }
        }
    } catch (err) {
        if(err.code === "EEXIST" || err.code === "ENOENT") {
            throw new Error(operationFailedMessage)
        }

        throw err
    }
};

copy();
