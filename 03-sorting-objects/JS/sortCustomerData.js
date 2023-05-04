const fs = require('fs');

const files = process.argv.slice(2);

const sortCustomerData = (array) => {
  if (!Array.isArray(array)) return;

  const result = [...array].sort(
    (customer1, customer2) =>
      customer1.customer_number.localeCompare(customer2.customer_number) ||
      customer2.invoice.number - customer1.invoice.number
  );
  console.log(result);
};

const readFileAsJSON = (file) => {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(file, (err, data) => {
        if (err) throw err;
        try {
          sortCustomerData(JSON.parse(data));
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
