import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  bmi: number;
  result: string;
  interpretation: string;

  constructor(private route: ActivatedRoute) {
    this.result = '';
    this.interpretation = '';
    this.bmi = +this.route.snapshot.paramMap.get('value')!;
    this.getResult();
  }

  getResult(): void {
    if (this.bmi >= 25) {
      this.result = 'Over weight';
      this.interpretation =
        'You have an above-average body weight, try to exercise more';
    } else if (this.bmi >= 18.5) {
      this.result = 'Normal';
      this.interpretation = 'You have a normal body weight. Good job!';
    } else {
      this.result = 'Under weight';
      this.interpretation =
        'You have a lower body weight than normal. You can eat a little more';
    }
  }
}
