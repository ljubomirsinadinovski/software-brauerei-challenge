const fs = require('fs');
const readline = require('readline');

const files = process.argv.slice(2);
const SPLIT_SIZE = 3;

const splitArray = (array, splitSize) => {
  if (!Array.isArray(array)) return;
  for (let i = 0; i < array.length; i += splitSize) {
    console.log(array.slice(i, i + splitSize));
  }
};

const readFileAsJSON = (file) => {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(file, (err, data) => {
        if (err) throw err;
        try {
          splitArray(JSON.parse(data), SPLIT_SIZE);
          resolve();
        } catch (error) {
          console.log(`Not a valid JSON file: ${file}`);
          reject(error);
        }
      });
    } catch (err) {
      console.log(`${err}`);
      reject(err);
    }
  });
};

const readFileLineByLine = (file) => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: fs.createReadStream(file),
      crlfDelay: Infinity,
    });

    rl.on('line', (line) => {
      // Process the line
      try {
        splitArray(JSON.parse(line), SPLIT_SIZE);
      } catch (err) {
        console.log(
          `Invalid JSON entry in file ${file} The entry was: ${line} The error is ${err}`
        );
      }
    });

    rl.on('close', () => {
      resolve();
    });

    rl.on('error', (err) => {
      reject(err);
    });
  });
};

const processFile = async (file) => {
  try {
    // check if file exists
    if (!fs.existsSync(file)) {
      console.log(`${file} does not exist.`);
      return;
    }

    try {
      await readFileAsJSON(file);
    } catch (err) {
      await readFileLineByLine(file);
    }

    console.log(`${file} has been processed.`);
  } catch (err) {
    console.error(`Error processing ${file}:`, err);
  }
};

(async () => {
  for (let file of files) {
    await processFile(file);
  }
})();
