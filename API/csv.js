

const dataToJson = require("data-to-json");
 

 const dataInJSON = dataToJson.csv({ filePath: "./metering_data.csv" }).toJson();

 console.log(dataInJSON)