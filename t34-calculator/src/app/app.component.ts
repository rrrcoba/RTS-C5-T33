import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 't34-calculator';

  operation: string = '';
  operand1: string = '';
  operand2: string = '';

  op: string = '0';
  result: string = '0';

  number(n: string) {
    if (this.op == '0') {
      this.del();
    }
    this.op = this.op + n;
  }

  ac() {
    this.op = '0';
    this.result = '0';
    this.operand1 = '';
    this.operand2 = '';
    this.operation = '';
  }

  c() {
    this.op = '0';
  }

  del() {
    if (this.op != '') {
      this.op = this.op.substr(0, this.op.length - 1);
    }
  }

  plus() {
    this.operation = '+';
    this.operand1 = this.op;
    this.op = '0';
  }

  minus() {
    this.operation = '-';
    this.operand1 = this.op;
    this.op = '0';
  }

  product() {
    this.operation = 'x';
    this.operand1 = this.op;
    this.op = '0';
  }

  divide() {
    this.operation = '÷';
    this.operand1 = this.op;
    this.op = '0';
  }

  equal() {
    this.operand2 = this.op;
    switch (this.operation) {
      case '+':
        var n1 = 0;
        var n2 = 0;
        var r = 0;
        n1 = parseInt(this.operand1);
        n2 = parseInt(this.operand2);
        r = n1 + n2;
        this.result = r.toString();
        break;
      case '-':
        var n1 = 0;
        var n2 = 0;
        var r = 0;
        n1 = parseInt(this.operand1);
        n2 = parseInt(this.operand2);
        r = n1 - n2;
        this.result = r.toString();
        break;
      case 'x':
        var n1 = 0;
        var n2 = 0;
        var r = 0;
        n1 = parseInt(this.operand1);
        n2 = parseInt(this.operand2);
        r = n1 * n2;
        this.result = r.toString();
        break;
      case '÷':
        var n1 = 0;
        var n2 = 0;
        var r = 0;
        n1 = parseInt(this.operand1);
        n2 = parseInt(this.operand2);
        r = n1 / n2;
        this.result = r.toString();
        break;
      default:
        break;
    }
    this.operand1 = '';
    this.operand2 = '';
    this.op = '0';
    this.operation = '';
  }
}
