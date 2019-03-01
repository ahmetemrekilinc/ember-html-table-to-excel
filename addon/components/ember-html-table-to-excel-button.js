import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  tagName:'button',
  attributeBindings:['disabled', 'title', 'type', 'data-toggle'],
  classNames: ["ember-html-table-to-excel-button"],

  click(){
    let tableId = this.get("tableId");
    let fileName = this.get("fileName");
    let sheetName = this.get("sheetName");
    let headerRows = this.get("headerRows");
    let exportOptions = {
      fileName: fileName,
      sheetName: sheetName
    };
    if(headerRows){
      set(exportOptions, 'headerRows', headerRows);
    }
    this.get('htmlTableToExcel').exportExcelFromTableId(tableId, exportOptions);
  }

});
