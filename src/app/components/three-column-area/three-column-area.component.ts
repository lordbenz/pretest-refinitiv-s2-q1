import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-column-area',
  templateUrl: './three-column-area.component.html',
  styleUrls: ['./three-column-area.component.css'],
})
export class ThreeColumnAreaComponent implements OnInit {
  public inputText: string;
  public numberInput: number;
  public result: boolean = false;
  public dropdownValue: string = 'isPrime';
  constructor() {}

  ngOnInit(): void {}
  onChangeDropdown(value: string) {
    if (value === 'isPrime') {
      this.dropdownValue = 'isPrime';
    } else {
      this.dropdownValue = 'IsFibanacci';
    }
    this.result =
      this.dropdownValue === 'isPrime'
        ? this.isPrime(this.numberInput)
        : this.isFibonacci(this.numberInput);
    console.log('this.result', this.result);
  }
  onChangeText() {
    this.numberInput = parseInt(this.inputText);
    if (typeof this.numberInput === 'number' && !isNaN(this.numberInput)) {
      this.validateInput();
      this.result =
        this.dropdownValue === 'isPrime'
          ? this.isPrime(this.numberInput)
          : this.isFibonacci(this.numberInput);
      console.log('this.result', this.result);
    }
  }

  isFibonacci(n: number): boolean {
    console.log('isFibonacci', n);
    if (this.isSquare(5 * (n * n) - 4) || this.isSquare(5 * (n * n) + 4)) {
      return true;
    } else {
      return false;
    }
  }

  isPrime(n: number): boolean {
    console.log('isPrime', n);
    for (let i = 2; i < n; i++) if (n % i === 0) return false;
    return n > 1;
  }

  isSquare(n: number): boolean {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }
  validateInput() {
    if (this.numberInput < 0) {
      this.numberInput = 1;
    }
    this.numberInput = Math.round(this.numberInput);
  }
}
