import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-demo-lookups-basic',
  templateUrl: './basic.html',
})
export class DemoLookupsBasic {

  superhero: string = null;
  value = '';
  address = '';
  hero: string = null;

  superheroes = ['Hulk', 'Flash', 'Superman', 'Batman', 'Spiderman', 'Iron Man', 'Thor', 'Wolverine', 'Deadpool'];
  superheroeines = ['Catwoman', 'She-Hulk', 'Wonder Woman', 'Batwoman', 'Invisible Woman'];

  scopes = [
    { value: 'All', iconName: 'standard:groups' },
    { value: 'Men', iconName: 'standard:user' },
    { value: 'Women', iconName: 'standard:lead' },
  ];

  scope = this.scopes[0];

  constructor(private http: HttpClient ) {}

  lookup = (query: string, source = this.superheroes): string[] => {
    if (!query) {
      return null;
    }

    return source.filter((d: string) => d.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }

  // This function is now safe to pass around
  lookupAsync = (query: string): Observable<any[]> => {
    if (!query) {
      return null;
    }

    return this.http.get(`//maps.googleapis.com/maps/api/geocode/json?address=${query}`)
      .pipe(map((response: any) => response.results));
  }

  lookupPolymorphic = (query: string): string[] => {
    let heroes: string[];
    if (this.scope.value === 'Men') {
      heroes = [ ...this.superheroes ];
    } else if (this.scope.value === 'Women') {
      heroes = [ ...this.superheroeines ];
    } else {
      heroes = [ ...this.superheroes, ...this.superheroeines ];
    }

    return this.lookup(query, heroes);
  }
}
