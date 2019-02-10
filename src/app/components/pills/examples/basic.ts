import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pills-basic',
  templateUrl: './basic.html',
})
export class DemoPillsBasic implements OnInit {

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

  log() {
    console.log('pill was removed.');
  }
}
