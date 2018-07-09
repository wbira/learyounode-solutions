const args = process.argv.slice(2);
const result = args.reduce((acc, val) => acc += Number(val), 0);
console.log(result);
