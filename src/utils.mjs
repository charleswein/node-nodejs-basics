import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";

export const operationFailedMessage = "FS operation failed"

export function getPathToFolders(url) {
    return {
        pathToSourceFolder: dirname(fileURLToPath(url)),
        pathToFilesFolder: join(dirname(fileURLToPath(url)), '/files'),
    }
}

