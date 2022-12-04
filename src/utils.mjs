import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";

export function getPathToFolders(url) {
    return {
        pathToSourceFolder: dirname(fileURLToPath(url)),
        pathToFilesFolder: join(dirname(fileURLToPath(url)), '/files'),
        fsOperationFailedMessage: "FS operation failed"
    }
}

