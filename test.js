// const bcrypt = require('bcrypt')
// const saltRounds = 10;
// const myPlaintextPassword = 'Password';

// const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

// console.log(hash)

//Reading the file using default 
//fs npm package  
// const fs = require("fs"); 
// csv = fs.readFileSync("earnings.csv") 
  
// // Convert the data to String and 
// // split it in an array 
// var array = csv.toString().split("\r"); 
  
// // All the rows of the CSV will be  
// // converted to JSON objects which  
// // will be added to result in an array 
// let result = []; 
  
// // The array[0] contains all the  
// // header columns so we store them  
// // in headers array 
// let headers = array[0].split(", ") 
  
// // Since headers are separated, we  
// // need to traverse remaining n-1 rows.  
// for (let i = 1; i < array.length - 1; i++) { 
//   let obj = {} 
  
//   // Create an empty object to later add  
//   // values of the current row to it 
//   // Declare string str as current array 
//   // value to change the delimiter and  
//   // store the generated string in a new 
//   // string s 
//   let str = array[i] 
//   let s = ''
  
//   // By Default, we get the comma seprated 
//   // values of a cell in quotes " " so we  
//   // use flag to keep track of quotes and  
//   // split the string accordingly 
//   // If we encounter opening quote (")  
//   // then we keep commas as it is otherwise 
//   // we replace them with pipe | 
//   // We keep adding the characters we  
//   // traverse to a String s 
//   let flag = 0 
//   for (let ch of str) { 
//     if (ch === '"' && flag === 0) { 
//       flag = 1 
//     } 
//     else if (ch === '"' && flag == 1) flag = 0 
//     if (ch === ', ' && flag === 0) ch = '|'
//     if (ch !== '"') s += ch 
//   } 
  
//   // Split the string using pipe delimiter |  
//   // and store the values in a properties array 
//   let properties = s.split("|") 
  
//   // For each header, if the value contains 
//   // multiple comma separated data, then we 
//   // store it in the form of array otherwise 
//   // directly the value is stored 
//   for (let j in headers) { 
//     if (properties[j].includes(", ")) { 
//       obj[headers[j]] = properties[j] 
//         .split(", ").map(item => item.trim()) 
//     } 
//     else obj[headers[j]] = properties[j] 
//   } 
  
//   // Add the generated object to our 
//   // result array  
//   result.push(obj) 
// } 
  
// // Convert the resultant array to json and  
// // generate the JSON output file. 
// let json = JSON.stringify(result); 
// fs.writeFileSync('output.json', json); 

// console.log(result)
// let sub =[]
// let sr

// sr = result[0].split(",")
  

// console.log()

// let new_res=[]

// let rawdata = fs.readFileSync('output1.json');
// let student = JSON.parse(rawdata);
// console.log(student[0].symbol_name.split(','));

// new_res.symbol[0][0] = student[0].symbol_name.split(',')[0],
// new_res.name[0][1]= student[0].symbol_name.split(',')[1]

// for  (let i=0; i<student.length;i++){
//   new_res.push({
//     a: student[i].symbol_name.split(',')[0],
//     b: student[i].symbol_name.split(',')[1]
//   })
// }

// console.log(new_res.length)
// console.log(new_res[0].a)
// console.log(new_res[0].b)
// console.log(student.length)




// for (let i=0;i<new_res.length;i++){
//   db.symbol.create({
//     symbol: new_res[i].a,
//     name: new_res[i].b
//   })
// }

// require('dotenv').config()
// let express = require('express')
// let app = express()
// const db = require('./models')
// const axios = require('axios')
// const API_KEY = process.env.API_KEY

// TIME_SERIES_INTRADAY 

// Time interval between two consecutive data points in the time series. The following values are supported: 1min, 5min, 15min, 30min, 60min



// app.get('/', (req, res) => {
//   axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY}`)
//   .then(response => {
//     res.send(response)
//       // res.send(response.data)
//   })
// })

function toTimestamp(strDate){
  var datum = Date.parse(strDate);
  return datum/1000;
 }

 let value = toTimestamp("2021-01-26 20:00:00")
 console.log(value)


