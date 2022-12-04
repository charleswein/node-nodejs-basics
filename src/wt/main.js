import {Worker} from "worker_threads";
import {join} from "node:path";
import {cpus} from "node:os";
import {getPathToFolders} from "../utils.mjs";

const {pathToSourceFolder} = getPathToFolders(import.meta.url)
let CPULength = cpus().length

const performCalculations = async () => {
    // Write your code here
    let count = CPULength

    const workerResults = await Promise.allSettled(new Array(CPULength).fill(undefined).map((_, index) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(join(pathToSourceFolder, '/worker.js'), {workerData: count + index})
            worker.on("message", (value) => {
                console.log(value)
                resolve(value)
            })
            worker.on("error", reject)
            worker.on("exit", (code) => {
                reject(new Error(`Worker stopped with exit code ${code}`))
            })
        })
    }))
    console.log(workerResults.map(({status, value}) => ({
        status: status === "fulfilled" ? 'resolved' : 'error',
        data: value
    })))

    return workerResults.map(({status, value}) => ({
        status: status === "fulfilled" ? 'resolved' : 'error',
        data: value
    }))
};

await performCalculations();
