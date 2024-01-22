/*
* COMP 3133 - Lab01: Read the given CSV file using stream or fs
*
* Note: Create GitHub repository and commit all your code to GitHub
*
*    1)	Create node project name Lab01_ StudentID_COMP3133
*    2)	Add required modules to the project
*        npm install --save csv-parser
*
*    3)	Download given input_countries.csv file to read data and perform following task
*        a.	Delete canada.txt and usa.txt if already exist using fs module 
*        b.	Filter data of Canada and write data to canada.txt
*        c.	Filter data of United States and write data to usa.txt
*/
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

function writeCountryDataToFile(countryName) {
    const txtFilePath = path.join(__dirname, `${countryName}.txt`);
    const data = [];

    fs.createReadStream('lab/input_countries.csv', 'utf8')
        .pipe(csv())
        .on('data', (row) => {
            if (row.country === countryName) {
                data.push(row);
            }
        })
        .on('end', () => {
            if (data.length > 0) {
                const countryData = JSON.stringify(data, null, 2);
                fs.writeFileSync(txtFilePath, countryData, 'utf8');
                console.log(`Data Found!\nNew file ${countryName}.txt has been written`);
            } else {
                console.log(`No data found for ${countryName}`);
            }
        })
        .on('error', (error) => {
            console.error('Error:', error.message);
        });
}

writeCountryDataToFile('Canada');
writeCountryDataToFile('United States');




