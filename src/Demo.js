import React from "react"
 import XlsExport from './xls-export.js';
import {dataSample} from './const';

function Demo(props) {
 
function handleExportDataToExcel(){
 var xls = new XlsExport(dataSample);
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
