import {Transform} from "node:stream";
import {EOL} from "node:os";
import {pipeline} from "node:stream/promises";

const transform = async () => {
    // Write your code here
    const ts = new Transform({
        transform(chunk, encoding, callback) {
            const str = chunk.toString().trim().split('').reverse().join('')
            // this.push(str)
            callback(null, str + EOL)
        }
    })

    try {
        await pipeline(process.stdin, ts, process.stdout)
    } catch (err) {
        throw err
    }
};

await transform();
