//---------------new changes-------
document.getElementById("weight").style.visibility = "hidden";



let optionel=document.querySelectorAll("option");


let searchel=document.getElementById("search");
searchel.addEventListener("change",(e)=>{
  for (const ele of optionel)
   {
    let originalvalue=ele.value;
    let eventvalue=e.target.value;
if(originalvalue==eventvalue)
{
 document.getElementById(originalvalue).style.visibility = "hidden";
 
    console.log(originalvalue);
    console.log("sucess");
document.getElementById("lbsInput").addEventListener("input", function(e) {
    let lbs = e.target.value;
    console.log(lbs)
if(originalvalue=="tonne")
{
  document.getElementById("kgramsoutput").innerHTML = lbs * 1000;
  document.getElementById("gramsoutput").innerHTML = lbs*1000000;
  document.getElementById("millioutput").innerHTML = lbs*1000000000;
  document.getElementById("microoutput").innerHTML = lbs*1000000000000;
  document.getElementById("poundoutput").innerHTML = lbs*2204.62;
  document.getElementById("ounceoutput").innerHTML = lbs*35273.9199982575;
    }
   else if(originalvalue=="kilo")
{
  document.getElementById("tonneoutput").innerHTML = lbs * 0.001;
  document.getElementById("gramsoutput").innerHTML = lbs*1000;
  document.getElementById("millioutput").innerHTML = lbs*1000000;
  document.getElementById("microoutput").innerHTML = lbs*1000000000;
  document.getElementById("poundoutput").innerHTML = lbs*2.20462;
  document.getElementById("ounceoutput").innerHTML = lbs*35.2739199982575;
    }
   else if(originalvalue==="gram")
{
  document.getElementById("kgramsoutput").innerHTML = lbs * 0.001;
  document.getElementById("tonneoutput").innerHTML = lbs*1e-6;
  document.getElementById("millioutput").innerHTML = lbs*1000;
  document.getElementById("microoutput").innerHTML = lbs*1000000;
  document.getElementById("poundoutput").innerHTML = lbs*0.00220462;
  document.getElementById("ounceoutput").innerHTML = lbs*0.035274;
    }
   else if(originalvalue=="microgram")
{
  document.getElementById("kgramsoutput").innerHTML = lbs * 1e-9;
  document.getElementById("gramsoutput").innerHTML = lbs*1e-6;
  document.getElementById("millioutput").innerHTML = lbs*0.001;
  document.getElementById("tonneoutput").innerHTML = lbs*1e-12;
  document.getElementById("poundoutput").innerHTML = lbs*2.2046e-9;
  document.getElementById("ounceoutput").innerHTML = lbs*3.5274e-8;
    }
    else if(originalvalue=="milligram")
{
  document.getElementById("kgramsoutput").innerHTML = lbs * 1e-6;
  document.getElementById("gramsoutput").innerHTML = lbs*0.001;
  document.getElementById("tonneoutput").innerHTML = lbs*1e-9;
  document.getElementById("microoutput").innerHTML = lbs*1000;
  document.getElementById("poundoutput").innerHTML = lbs*2.2046e-6;
  document.getElementById("ounceoutput").innerHTML = lbs*3.5274e-5;
    }
   else if(originalvalue="pound")
{
  document.getElementById("kgramsoutput").innerHTML = lbs * 0.453592;
  document.getElementById("gramsoutput").innerHTML = lbs*453.592;
  document.getElementById("millioutput").innerHTML = lbs*453592;
  document.getElementById("microoutput").innerHTML = lbs*4.536e+8;
  document.getElementById("tonneoutput").innerHTML = lbs*0.000453592;
  document.getElementById("ounceoutput").innerHTML = lbs*16;
        if(originalvalue=="ounce")
  {
    document.getElementById("kgramsoutput").innerHTML = lbs * 0.0283495;
    document.getElementById("gramsoutput").innerHTML = lbs*28.3495;
    document.getElementById("millioutput").innerHTML = lbs*28349.5;
    document.getElementById("microoutput").innerHTML = lbs*2.835e+7;
    document.getElementById("poundoutput").innerHTML = lbs*0.0625;
   document.getElementById("tonneoutput").innerHTML = lbs*2.835e-5;
      }
    }

});
}
else if(originalvalue!="")
{
 document.getElementById(originalvalue).style.visibility = "visible";
}
  }

})


























// //-----------get value from html-------
// document.getElementById("weight").style.visibility = "hidden";
// let inputel=document.getElementById("search");
// let lbsel=document.getElementById("lbsinput");



// // -----inputvalue taken from search field
// inputel.addEventListener("input", function(e) {

// console.log(inputel.value);
// let referencvalue=inputel.value;
// if(referencvalue!=null)
// {
//   //document.getElementById(referencvalue).style.visibility = "hidden";
//   document.getElementById("weight").style.visibility = "visible";

// }
// else{
        
//   document.getElementById("weight").style.visibility = "hidden";

// }
// });

// //--------------load data based on user input value----------
// document.getElementById("lbsInput").addEventListener("input", function(e) {
//     let lbs = e.target.value;
//     console.log(lbs)
// if(referencevalue="tonne")
// {
//   document.getElementById("kgramsoutput").innerHTML = lbs * 1000;
//   document.getElementById("gramsoutput").innerHTML = lbs*1000000;
//   document.getElementById("millioutput").innerHTML = lbs*1000000000;
//   document.getElementById("microoutput").innerHTML = lbs*1000000000000;
//   document.getElementById("poundoutput").innerHTML = lbs*2204.62;
//   document.getElementById("ounceoutput").innerHTML = lbs*35273.9199982575;
//     }

// });
