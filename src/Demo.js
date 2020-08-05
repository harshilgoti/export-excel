import React from "react"
 import XlsExport from './xls-export.js';
import {dataSample} from './const';

function Demo(props) {
 
function handleExportDataToExcel(){
  let data = []

  dataSample.forEach(item=>{
    // console.log("item",item)
    let sum = 0
   sum = item.price.reduce((acc,cur)=>{
      acc=acc+cur
      return acc
    },0)
    // console.log("sum",sum)
    data.push(Object.assign(item,{"total_price":sum}))
  })


// console.log("data",data)
 var xls = new XlsExport(data);
    xls.exportToXLS('sample');
    // xls.exportToCSV('export2017.xls');
}
   

  return (
    <div >
      <h2>Click here to download a XLS sample</h2>
     <button onClick={handleExportDataToExcel}>
      XLS sample
     </button>
    </div>
  )
}

export default Demo
