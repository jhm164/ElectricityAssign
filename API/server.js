var fs =require('fs');
var localdata;
var express = require('express');
var cors=require("cors")
var app = express();
app.use(cors())

const dataToJson = require("data-to-json");
 

 const finalresult = dataToJson.csv({ filePath: "./metering_data.csv" }).toJson();

 console.log(finalresult)

// // async function csvJSON(csv){
// //    var header=csv.split('\n')[0].split(",");
// //    // console.log(header)

   
// // var newarray=csv.split('\n').splice(1,csv.split('\n').length);
// // console.log(newarray)
// // var localdata={};
// // for (let index = 0; index < newarray.length; index++) {

// //    localdata[header[0].trim()]=newarray[index].split(',')[0].trim()
// //    localdata[header[1]]=newarray[index].split(',')[1].trim()
// //    localdata[header[2]]=newarray[index].split(',')[2].trim()
// //    localdata[header[3].trim()]=newarray[index].split(',')[3].trim()
// //    finalresult.push(localdata)
// // //   console.log(newarray[index].split(','),index)
   
// // }


// //    console.log(finalresult)
 
// //   }



// async function csvJSON(csv){

//   var lines=csv.split("\n");

//   var result = [];

//   var headers=lines[0].split(",");

//   for(var i=1;i<lines.length;i++){

//     var obj = {};
//     var currentline=lines[i].split(",");

//     for(var j=0;j<headers.length;j++){
//       obj[headers[j]] = currentline[j];
//     }

//     result.push(obj);

//   }
  
//   //return result; //JavaScript object
//   return JSON.stringify(result); //JSON
// }
 

  
// fs.readFile("metering_data.csv","utf-8",function(err,result){
// // console.log(JSON.parse())
// if(err) reject(err)

// csvJSON(result)


// csv({
//     noheader:true,
//     output: "csv"
// })
// .fromString(result.split("\n");)
// .then((csvRow)=>{ 
//     console.log(csvRow) // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
// })



// })



 app.get('/all',(req,res)=>{
  console.log("hehre")

res.send(finalresult)

  })


 app.get('/chart/:id',async (req,res)=>{
  // console.log("hehre")

var id=req.params.id
console.log(finalresult)

var local = await finalresult.filter(async function(element) {

  console.log(element.Serial,"===",id)
  console.log(element)
  return  element.Serial.trim().toLowerCase()==id.trim().toLowerCase();
});

console.log('110',local.length,finalresult.length)

var p=[],x=[];
local.map((item,index)=>{
  p.push(new Date(item.ReadingDateTimeUTC.split(" ")[0].split("/")[2],item.ReadingDateTimeUTC.split(" ")[0].split("/")[1],item.ReadingDateTimeUTC.split(" ")[0].split("/")[0]))
})

local.map((item,index)=>{
  // console.log(item)
  x.push(parseInt(item.WH))
})
// res.send(local)

res.send([{"name":"ReadingDateTimeUTC","data":p},{"name":"WH","data":x}])
  })



 app.get('/allSerial',async (req,res)=>{
  // console.log("hehre")


console.log(finalresult)

var localx=[];

finalresult.map((item,index)=>{
   if(localx.indexOf(item.Serial) !== -1||item.Serial=="Serial"){
       
    } else{
      localx.push(item.Serial)
    }
})
res.send(localx)
  })


var PORT=process.env.PORT||4000;

app.listen(PORT,function(){
    console.log("server address http://localhost:"+PORT)
})