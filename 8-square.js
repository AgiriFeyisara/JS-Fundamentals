const [, , arg] = process.argv;
const size = parseInt(arg);

if (!isNaN(size)) {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
} else {
  console.log("Missing size");
}
