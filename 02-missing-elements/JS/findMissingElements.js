const fs = require('fs');

const files = process.argv.slice(2);

const findMissingElements = (arrays) => {
  if (!Array.isArray(arrays)) return;

  const setOfAllElements = new Set(arrays.flat());
  const result = Array.from(setOfAllElements).filter((element) => {
    return !arrays.every((array) => array.includes(element));
  });
  console.log(result);
};

const readFileAsJSON = (file) => {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(file, (err, data) => {
        if (err) throw err;
        try {
          findMissingElements(JSON.parse(data));
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

const processFile = async (file) => {
  try {
    // check if file exists
    if (!fs.existsSync(file)) {
      console.log(`${file} does not exist.`);
      return;
    }

    await readFileAsJSON(file);

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
