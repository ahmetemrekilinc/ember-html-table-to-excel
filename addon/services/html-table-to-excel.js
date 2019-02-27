import Service, { inject as service }  from '@ember/service';
import { get, set } from '@ember/object';
import { isBlank } from '@ember/utils';
import { assert } from '@ember/debug';
import $ from 'jquery';

export default Service.extend({

  excel: service(),

  exportExcelFromTableId(tableId, exportOptions = {}){
    if(isBlank(tableId)){
      assert("Could not create excel document. tableId is blank.");
    }
    let tableRef = $("#" + tableId);
    if(!tableRef || tableRef.length < 1){
      assert("Could not create excel document. No html element can be located with id = " + tableId);
    }

    let excelCompleteData = [];
    let excelHeaderRow = [];

    let tableComponent = tableRef[0];
    let rows = tableComponent.rows;

    let headerRow = rows[0];
    let headerCells = headerRow.cells;
    for(let i=0; i < headerCells.length; i++){
      let headerCell = headerCells[i];
      let isToBeIgnored = false;
      for(let j=0; j<headerCell.classList.length; j++){
        let headerClass = headerCell.classList[j];
        if(headerClass === "export-ignore"){
          isToBeIgnored = true;
          break;
        }
      }
      if(!isToBeIgnored){
        let headerCellText = headerCell.innerText;
        excelHeaderRow.pushObject(headerCellText);
        let colSpan = $(headerCell).prop("colSpan") || 1;
        if(colSpan > 1){
          for(let c = 1; c < colSpan; c++){
            excelHeaderRow.pushObject("");
          }
        }
      }
    }

    excelCompleteData.pushObject(excelHeaderRow);

    for(let i=1; i<rows.length; i++){
      let dataRow = [];
      let row = rows[i];
      let cells = row.cells;
      for(let j=0; j<cells.length; j++){
        let cell = cells[j];
        let isToBeIgnored = false;
        for(let k=0; k<cell.classList.length; k++){
          let colClass = cell.classList[k];
          if(colClass === "export-ignore"){
            isToBeIgnored = true;
            break;
          }
        }
        if(!isToBeIgnored){
          let cellObject;
          if($(cell).hasClass("export-as-string")){
            cellObject = {t: 's', v: cell.innerText}
          }
          else{
            cellObject = cell.innerText;
          }
          dataRow.pushObject(cellObject);
          let colSpan = $(cell).prop("colSpan") || 1;
          if(colSpan > 1){
            for(let c = 1; c < colSpan; c++){
              dataRow.pushObject("");
            }
          }
        }
      }
      excelCompleteData.pushObject(dataRow);
    }

    let excelfilename = "excel-report.xlsx";
    let fileName = get(exportOptions, 'fileName');
    if(fileName){
      excelfilename = fileName + ".xlsx";
    }

    let excelsheetname = "Results";
    let sheetName = get(exportOptions, 'sheetName');
    if(sheetName){
      excelsheetname = sheetName;
    }

    let exportResultOptions = {sheetName: excelsheetname, fileName: excelfilename};

    let headerRows = get(exportOptions, 'headerRows');
    if(headerRows){
      set(exportResultOptions, 'headerRows', headerRows);
    }

    this.get('excel').export(excelCompleteData, exportResultOptions);

  }

});
