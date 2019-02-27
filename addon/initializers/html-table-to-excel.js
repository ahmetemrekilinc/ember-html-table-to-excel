export function initialize() {
  var application = arguments[1] || arguments[0];
  application.inject('route', 'htmlTableToExcel', 'service:html-table-to-excel');
  application.inject('component', 'htmlTableToExcel', 'service:html-table-to-excel');
  application.inject('controller', 'htmlTableToExcel', 'service:html-table-to-excel');
}

export default {
  name: 'htmlTableToExcel',
  initialize: initialize
};
