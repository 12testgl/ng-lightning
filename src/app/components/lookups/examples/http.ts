import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});

@Component({
  selector: 'app-demo-lookups-http',
  templateUrl: './http.html',
})
export class DemoLookupsHttp {

  inputCtrl = new FormControl();

  wikiResults$: Observable<any[]>;
  wikiPage: string;
  wikiLoading = false;

  open: boolean;

  constructor(private http: HttpClient ) {
    this.wikiResults$ = this.inputCtrl.valueChanges
      .pipe(
        tap(() => this.wikiLoading = true),
        switchMap(term => {
          if (term === '') {
            this.open = false;
            return of([]);
          }
          return this.http
            .get('https://en.wikipedia.org/w/api.php', { params: PARAMS.set('search', term) }).pipe(
              map(response => response[1]),
            );
        }),
        tap(() => this.wikiLoading = false),
      );
  }

  openChange(isOpen: boolean) {
    if (isOpen && !this.inputCtrl.value) {
      return;
    }
    this.open = isOpen;
  }
}
