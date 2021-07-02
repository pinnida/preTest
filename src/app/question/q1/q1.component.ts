import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css'],
})
export class Q1Component implements OnInit {
  myinp: any = {
    value: '',
    key: 'isPrime',
    result: '',
  };

  constructor(private dcPipe: DecimalPipe) {}

  ngOnInit(): void {
    this.myinp = {
      value: '',
      key: 'isPrime',
      result: '',
    };
  }

  roundToInteger(value: any) {
    if (value < 0) {
      value = 1;
    } else {
      value = this.dcPipe.transform(value, '1.0-0');
    }

    this.myinp = {};
    this.myinp.result = '';
    this.myinp.key = 'isPrime';
    this.myinp.value = value;
  }

  checkUpdate(myinp: any) {
    let value = myinp.value;
    let key = myinp.key;

    if(value){
      this.myinp.result = (key === 'isPrime') ? this.check_prime(value) : this.check_fibo(value);
    }
  }

  //************** check_Prime ****************** */
  check_prime(num: number) {
    if (num === 1) {
      return false;
    } else if (num === 2) {
      return true;
    } else {
      for (var x = 2; x < num; x++) {
        if (num % x === 0) {
          return false;
        }
      }
      return true;
    }
  }

  //************** check_Fibonacci ****************** */
  check_fibo(num: number) {
    if (
      this.isSquare(5 * (num * num) - 4) ||
      this.isSquare(5 * (num * num) + 4)
    ) {
      return true;
    } else {
      return false;
    }
  }
  isSquare(n: any) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }
}
