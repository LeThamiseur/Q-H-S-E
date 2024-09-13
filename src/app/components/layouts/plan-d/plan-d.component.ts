import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-d',
  templateUrl: './plan-d.component.html',
  styleUrl: './plan-d.component.css'
})
export class PlanDComponent {

  pourquoiList: Array<{ value: string }> = [{ value: '' }];
  maxPourquoi: number = 5;

  addPourquoi() {
    if (this.pourquoiList.length < this.maxPourquoi) {
      this.pourquoiList.push({ value: '' });
    }
  }

  removePourquoi(index: number) {
    if (this.pourquoiList.length > 1) {
      this.pourquoiList.splice(index, 1);
    }
  }
}
