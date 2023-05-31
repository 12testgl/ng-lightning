import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-demo-lookups-multiple',
  templateUrl: './multiple.html',
})
export class DemoLookupsMultiple {

  inputCtrl = new UntypedFormControl();
  open = false;

  filteredStates$: Observable<any[]>;
  selectedStates: string[];

  private states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  constructor() {
    this.filteredStates$ = this.inputCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => !state ? this.states : this.filterStates(state))
      );
  }

  remove(state: string) {
    this.selectedStates = this.selectedStates.filter((s) => s !== state);
  }

  private filterStates(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.toLowerCase().indexOf(filterValue) > -1);
  }
}
