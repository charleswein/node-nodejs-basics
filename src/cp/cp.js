import {join} from "node:path";
import {spawn} from "node:child_process";
import {getPathToFolders} from "../utils.mjs"

const spawnChildProcess = async (args) => {
    // Write your code here
    const childArgs = [join(getPathToFolders(import.meta.url).pathToFilesFolder, '/script.js')]
    const cp = spawn('node', args ? [...childArgs, ...args.split(' ')] : childArgs)

    process.stdin.on('data', (chunk) => {
        cp.stdin.write(chunk)
    })

    cp.stdout.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

spawnChildProcess();
