import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent {
  weight: number = 60;
  age: number = 25;
  height: number = 170;
  sex: string = 'male';

  constructor(private router: Router) {}

  changeHeight(event: any): void {
    this.height = event.target.value;
  }

  selectMale(): void {
    this.sex = 'male';
  }

  selectFemale(): void {
    this.sex = 'female';
  }

  calculateBMI(): void {
    const BMI = this.weight / Math.pow(this.height / 100, 2);
    this.router.navigate(['/result', BMI.toFixed(1)]);
  }
}
