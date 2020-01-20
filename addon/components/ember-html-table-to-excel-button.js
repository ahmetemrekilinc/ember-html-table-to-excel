import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EmberHtmlTableToExcelButton extends Component {

  @service htmlTableToExcel;

  @action
  exportExcel(){
    let tableId = this.args.tableId;
    let headerRows = this.args.headerRows;

    let exportOptions = {
      fileName: this.args.fileName,
      sheetName: this.args.sheetName
    };
    if(headerRows){
      exportOptions.headerRows = headerRows;
    }
    this.htmlTableToExcel.exportExcelFromTableId(tableId, exportOptions);
  }

}
