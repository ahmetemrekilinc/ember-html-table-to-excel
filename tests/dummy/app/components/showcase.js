//BEGIN-SNIPPET showcase
import Component from '@glimmer/component';

export default class Showcase extends Component {

  constructor(){
    super(...arguments);

    let data = [];
    data.pushObject(
      {
        textProp: "dummydata 1",
        formattedNumberProp: "128.101.733",
        decimalNumberProp: "9.080.119,27",
        numericButStringProp: 9080119.27,
        dateProp: "27.02.2019",
        ignorableProp: "Ignoreable Data 1",
        moneyPropTRY : "1.371.699,47₺",
        moneyPropUSD: "$4,929,359.43",
        moneyPropEUR: "49.543,21€",
        moneyPropGBP: "£4,828,816.67",
        inputProp: "input data 1",
        textareaProp: "text area data 1"
      }
    );
    data.pushObject(
      {
        textProp: "dummydata 2",
        formattedNumberProp: "853",
        decimalNumberProp: "349,27",
        numericButStringProp: 34927,
        dateProp: "04.11.1998",
        ignorableProp: "Ignoreable Data 2",
        moneyPropTRY : "99,47₺",
        moneyPropUSD: "$29.43",
        moneyPropEUR: "43,21€",
        moneyPropGBP: "£16.67",
        inputProp: "input data 2",
        textareaProp: "text area data 2"
      }
    );
    this.data = data;
  }

}
//END-SNIPPET
