const parseArgs = () => {
    // Write your code here
    const arr = [...process.argv.slice(2)]
    const str = arr.reduce((current, elem, currentIndex) =>
            elem.includes('--')
            && Array.isArray(current)
                ? ([...current, `${elem} is ${arr[currentIndex + 1]}`])
                : current
        , []).join(', ')

    console.log(str);
};

parseArgs();
