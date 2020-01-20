import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GenericDemoPage extends Component {

  @tracked collapsed = true;

  get filesToDisplay() {
    return this.args.files ? this.args.files.split(',') : [];
  }

  @action
  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
