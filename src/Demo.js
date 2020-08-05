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
     <button onClick={handleExportDataToExcel}>
         excel
     </button>
    </div>
  )
}

export default Demo
