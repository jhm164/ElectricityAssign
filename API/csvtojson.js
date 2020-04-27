var fs =require('fs');
var localdata;
var finalresult=[];



async function csvJSON(csv){

return 	new promise((resolve,reject)=>{
   var header=csv.split('\n')[0].split(",");
   // console.log(header)

   
var newarray=csv.split('\n').splice(1,csv.split('\n').length);

var localdata={};
for (let index = 0; index < newarray.length-1; index++) {

   localdata[header[0]]=newarray[index].split(',')[0]
   localdata[header[1]]=newarray[index].split(',')[1]
   localdata[header[2]]=newarray[index].split(',')[2]
   localdata[header[3]]=newarray[index].split(',')[3]
   finalresult.push(localdata)
//   console.log(newarray[index].split(','),index)
   
}


   // console.log(finalresult)

resolve(finalresult);
})
 
  }



const jk=async ()=>{

var val;
fs.readFileSync("metering_data.csv","utf-8",async function(err,result){
// console.log(JSON.parse())
if(err) return (err)
val=result;



})

return await csvJSON(val)

}
