const [, , arg] = process.argv;
const num = Number(arg);

if (!isNaN(num) && arg !== undefined && arg.trim() !== "") {
  console.log(`My number: ${parseInt(num)}`);
} else {
  console.log("Not a number");
}
