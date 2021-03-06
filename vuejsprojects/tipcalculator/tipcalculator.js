//Creating Vue app named #tipcalculatorbyvue
const app = new Vue({
  el: '#tipcalculatorbyvue',
  data: {
    billAmount: 0, //Original bill
    currency: '€',
    tipPercent: 0, //Tip percent selected by user
    tipToPay: 0, //Display tip to pay
  },
  methods: {
    log(msg) {
      console.log(msg);
    },
    calculateTip(event) {
      if (this.billAmount === 0 || this.tipPercent === 0) {
        this.result = null
        return
      }
      //Allow only positive numbers to be inputted
      if (this.billAmount < 0 || isNaN(this.billAmount)) {
        alert('Error! Input only positive numbers. Use point, not comma.');
        this.billAmount = '';
        this.tipPercent = '0';
        this.tipToPay = '0';
        return
      }
      //Calculates tip to be paid
      this.tipToPay = (this.billAmount * this.tipPercent / 100).toFixed(2);
    },
  }
});

