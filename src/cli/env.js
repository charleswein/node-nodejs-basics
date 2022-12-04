const parseEnv = () => {
    // Write your code here
    const arr = []
    Object.keys(process.env).forEach((key) => {
        if(key.startsWith("RSS_")) {
            arr.push(`${key}=${process.env[key]}`);
        }
    })

    console.log(arr.join('; '))
};

parseEnv();
