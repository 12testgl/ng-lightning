import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HostService } from './host.service';

class MockElementRef extends ElementRef {
  constructor() { super(document.createElement('DIV')); }
}

describe('HostService', () => {
  let service: HostService;
  let el: ElementRef;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HostService, { provide: ElementRef, useClass: MockElementRef }] });
    service = TestBed.get(HostService);
    el = TestBed.get(ElementRef);
  });

  it('should toggle classes correctly', () => {
    service.updateClass(el, { a: true, });
    expect(el.nativeElement.classList).toContain('a');

    service.updateClass(el, { b: true, c: true });
    expect(el.nativeElement.classList).not.toContain('a');
    expect(el.nativeElement.classList).toContain('b');
    expect(el.nativeElement.classList).toContain('c');

    service.updateClass(el, { a: true, b: false, c: true });
    expect(el.nativeElement.classList).toContain('a');
    expect(el.nativeElement.classList).not.toContain('b');
    expect(el.nativeElement.classList).toContain('c');
  });

});
