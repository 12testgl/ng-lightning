import { Component } from '@angular/core';

@Component({
  selector: 'demo-pills',
  templateUrl: './pills.html',
})
export class DemoPills {

  pills: any[] = [];

  private pillCounter = 1;

  ngOnInit() {
    for (let x = 5; x > 0; x--) {
      this.add();
    }
  }

  add() {
    this.pills.push(`Pill ${this.pillCounter++}`);
  }

  remove(pill: string) {
    this.pills = this.pills.filter(_pill => _pill !== pill);
  }
}
