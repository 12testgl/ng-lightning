import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { createGenericTestComponent, dispatchEvent } from '../../../test/util';
import { NglFileUploadModule } from './module';

const createTestComponent = (html?: string, detectChanges?: boolean) =>
  createGenericTestComponent(TestComponent, html, detectChanges) as ComponentFixture<TestComponent>;

function getDropZoneElement(element: Element): HTMLElement {
  return element.querySelector('.slds-file-selector__dropzone');
}

function getInputElement(element: Element): HTMLInputElement {
  return element.querySelector('input[type=file]');
}

function getFileSelectorLabelElement(element: Element): HTMLLabelElement {
  return element.querySelector('label.slds-file-selector__body');
}

function getFile(name = 'test.png', type = 'image/png', size = 100): any {
  return { name, type, size };
}

describe('`<ngl-file-upload>`', () => {

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [TestComponent],
    imports: [NglFileUploadModule, FormsModule]
  }));

  it('should render correctly', () => {
    const fixture = createTestComponent();

    const labelEl = fixture.nativeElement.querySelector('.slds-form-element__label');
    expect(labelEl.textContent).toEqual('Upload');

    const inputEl = getInputElement(fixture.nativeElement);
    expect(inputEl.getAttribute('aria-labelledby')).toContain(labelEl.id);
    expect(inputEl.getAttribute('multiple')).toBeNull();
    expect(inputEl.getAttribute('disabled')).toBeNull();

    const selectorLabelEl = getFileSelectorLabelElement(fixture.nativeElement);
    expect(selectorLabelEl.getAttribute('for')).toEqual(inputEl.id);
    expect(inputEl.getAttribute('aria-labelledby')).toContain(selectorLabelEl.id);

    const spanEls = selectorLabelEl.querySelectorAll('span');
    expect(spanEls.item(0).textContent).toEqual('Upload Files');
    expect(spanEls.item(1).textContent).toEqual('or Drop Files');
  });


  it('should highlight drop zone on dragover', () => {
    const fixture = createTestComponent();

    const dropzoneEl = getDropZoneElement(fixture.nativeElement);
    expect(dropzoneEl).not.toHaveCssClass('slds-has-drag-over');

    dispatchEvent(dropzoneEl, 'dragover');
    fixture.detectChanges();
    expect(dropzoneEl).toHaveCssClass('slds-has-drag-over');

    dispatchEvent(dropzoneEl, 'dragleave');
    fixture.detectChanges();
    expect(dropzoneEl).not.toHaveCssClass('slds-has-drag-over');
  });

  it('should stop highlighting drop zone on drop', () => {
    const fixture = createTestComponent();
    const dropzoneEl = getDropZoneElement(fixture.nativeElement);

    dispatchEvent(dropzoneEl, 'dragover');
    fixture.detectChanges();
    expect(dropzoneEl).toHaveCssClass('slds-has-drag-over');

    dispatchEvent(dropzoneEl, 'drop');
    fixture.detectChanges();
    expect(dropzoneEl).not.toHaveCssClass('slds-has-drag-over');
  });

  it('should handle `multiple` attribute based on files limit', () => {
    const fixture = createTestComponent(`<ngl-file-upload [ngModel]="file" [maxFiles]="maxFiles"></ngl-file-upload>`);
    const inputEl = getInputElement(fixture.nativeElement);

    expect(inputEl.getAttribute('multiple')).not.toBeNull();
    fixture.componentInstance.maxFiles = 1;
    fixture.detectChanges();
    expect(inputEl.getAttribute('multiple')).toBeNull();

    fixture.componentInstance.maxFiles = 0;
    fixture.detectChanges();
    expect(inputEl.getAttribute('multiple')).not.toBeNull();
  });

  it('should validate number of selected files based on limit', fakeAsync(() => {
    const fixture = createTestComponent(`<form><ngl-file-upload name="fu" [ngModel]="file" [maxFiles]="maxFiles"></ngl-file-upload></form>`);
    const form = fixture.debugElement.query(By.directive(NgForm)).injector.get(NgForm);
    const FILE = getFile();

    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeFalsy();

    fixture.componentInstance.file = [FILE, FILE, FILE];
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeTruthy();
    expect(form.control.getError('nglFileUpload', ['fu']).maxFiles).toBe(3);

    fixture.componentInstance.file = [FILE, FILE];
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeFalsy();

    fixture.componentInstance.maxFiles = 1;
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeTruthy();
    expect(form.control.getError('nglFileUpload', ['fu']).maxFiles).toBe(2);

    fixture.componentInstance.maxFiles = 0;
    fixture.componentInstance.file = [FILE, FILE, FILE, FILE];
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeFalsy();
  }));

  it('should validate size of selected files based on limit', fakeAsync(() => {
    const fixture = createTestComponent(`<form><ngl-file-upload name="fu" [ngModel]="file" [maxFilesize]="maxFilesize" maxFiles="0"></ngl-file-upload></form>`);
    const form = fixture.debugElement.query(By.directive(NgForm)).injector.get(NgForm);
    const FILE = getFile();
    let error;

    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeFalsy();

    fixture.componentInstance.file = [FILE];
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeTruthy();
    error = form.control.getError('nglFileUpload', ['fu']).maxFilesize;
    expect([error.name, error.size]).toEqual(['test.png', 100]);

    fixture.componentInstance.maxFilesize = 100 + 1;
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeFalsy();

    fixture.componentInstance.file = [FILE, getFile('toobig.png', 'image/png', 200)];
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeTruthy();
    error = form.control.getError('nglFileUpload', ['fu']).maxFilesize;
    expect([error.name, error.size]).toEqual(['toobig.png', 200]);

    fixture.componentInstance.maxFilesize = 0;
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeFalsy();
  }));

  it('should proxy `accept` value to input', () => {
    const fixture = createTestComponent(`<ngl-file-upload [ngModel]="file" [accept]="accept"></ngl-file-upload>`);
    const inputEl = getInputElement(fixture.nativeElement);

    expect(inputEl.getAttribute('accept')).toBeNull();
    fixture.componentInstance.accept = '.mp3,media/*';
    fixture.detectChanges();
    expect(inputEl.getAttribute('accept')).toEqual('.mp3,media/*');

    fixture.componentInstance.accept = ['.pdf', 'media/*', '.png'];
    fixture.detectChanges();
    expect(inputEl.getAttribute('accept')).toEqual('.pdf,media/*,.png');
  });

  it('should validate type of selected files based on `accept`', fakeAsync(() => {
    const fixture = createTestComponent(`<form><ngl-file-upload name="fu" [ngModel]="file" [accept]="accept" maxFiles="0"></ngl-file-upload></form>`);
    const form = fixture.debugElement.query(By.directive(NgForm)).injector.get(NgForm);
    const PNGFILE = getFile();
    const MP3FILE = getFile('file.mp3', 'audio/mp3');
    const MP4FILE = getFile('file.mp4', 'audio/mp4');
    let error;

    fixture.componentInstance.file = [PNGFILE];
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeFalsy();

    fixture.componentInstance.accept = 'audio/*';
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeTruthy();
    error = form.control.getError('nglFileUpload', ['fu']).invalidType;
    expect(error).toEqual(PNGFILE);

    fixture.componentInstance.file = [MP3FILE, MP4FILE];
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeFalsy();

    fixture.componentInstance.accept = 'audio/mp3,image/*';
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeTruthy();
    error = form.control.getError('nglFileUpload', ['fu']).invalidType;
    expect(error).toEqual(MP4FILE);

    fixture.componentInstance.accept = '.mp4,image/*';
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeTruthy();
    error = form.control.getError('nglFileUpload', ['fu']).invalidType;
    expect(error).toEqual(MP3FILE);

    fixture.componentInstance.accept = '.mp4,.png';
    fixture.componentInstance.file = [MP4FILE, PNGFILE];
    fixture.detectChanges();
    tick();
    expect(form.control.invalid).toBeFalsy();
  }));

  it('should handle disabled state', () => {
    const fixture = createTestComponent(`<ngl-file-upload [ngModel]="file" disabled></ngl-file-upload>`);
    const inputEl = getInputElement(fixture.nativeElement);

    expect(inputEl.getAttribute('disabled')).not.toBeNull();

    const dropzoneEl = getDropZoneElement(fixture.nativeElement);
    dispatchEvent(dropzoneEl, 'dragover');
    fixture.detectChanges();
    expect(dropzoneEl).not.toHaveCssClass('slds-has-drag-over');
  });
});


@Component({ template: `<ngl-file-upload [ngModel]="file" label="Upload"></ngl-file-upload>` })
export class TestComponent {

  file: File[] = null;
  accept: string | string[] = null;
  maxFiles = 2;
  maxFilesize = 1;
}
