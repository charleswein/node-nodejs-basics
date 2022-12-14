import {join} from "node:path";
import {createGzip, Unzip} from "node:zlib";
import {createReadStream, createWriteStream} from "node:fs";
import {pipeline} from "node:stream/promises";
import {getPathToFolders} from "../utils.mjs";

const {pathToFilesFolder} = getPathToFolders(import.meta.url)

const input = join(pathToFilesFolder, '/fileToCompress.txt')
const output = join(pathToFilesFolder, '/archive.gz')

const compress = async () => {
    // Write your code here
    async function do_gzip(input, output) {
        const gzip = createGzip();
        const source = createReadStream(input);
        const destination = createWriteStream(output);

        try {
            await pipeline(source, gzip, destination);
        } catch (err) {
            throw err
        }
    }

    try {
        await do_gzip(input, output)
    } catch (err) {
        throw err
    }
};

await compress();
