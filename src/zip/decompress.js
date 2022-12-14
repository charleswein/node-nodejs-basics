import {createReadStream, createWriteStream} from "node:fs";
import {pipeline} from "node:stream/promises";
import {createUnzip} from "node:zlib";
import {getPathToFolders} from "../utils.mjs";
import {join} from "node:path";

const {pathToFilesFolder} = getPathToFolders(import.meta.url)

const input = join(pathToFilesFolder, '/archive.gz')
const output = join(pathToFilesFolder, '/fileToCompress.txt')

const decompress = async () => {
    // Write your code here
    async function ungzip(input, output) {
        const unZip = createUnzip()
        const source = createReadStream(input);
        const destination = createWriteStream(output);
        try {
            await pipeline(source, unZip , destination);
        } catch (err) {
            throw err
        }
    }

    try {
        await ungzip(input, output)
    } catch (err) {
        throw err
    }
};

await decompress();
