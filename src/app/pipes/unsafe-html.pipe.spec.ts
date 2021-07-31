import { Sanitizer, SecurityContext } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import {
  BrowserModule,
  DomSanitizer,
  SafeHtml,
} from '@angular/platform-browser';
import { UnsafeHtmlPipe } from './unsafe-html.pipe';

describe('UnsafeHtmlPipe', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserModule],
    });
  });

  it('create an instance', inject([DomSanitizer], (sanitizer: DomSanitizer) => {
    const pipe = new UnsafeHtmlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  }));

  it('should not sanitize html', inject(
    [DomSanitizer],
    (sanitizer: DomSanitizer) => {
      const pipe = new UnsafeHtmlPipe(sanitizer);
      const exampleData = '<div data-custom="test"></div>';
      const pipedResult = pipe.transform(exampleData);
      const result = sanitizer.sanitize(SecurityContext.HTML, pipedResult);
      expect(result).toEqual(exampleData);
    }
  ));

  it('should sanitize html when pipe is not used', inject(
    [DomSanitizer],
    (sanitizer: DomSanitizer) => {
      const exampleData = '<div data-custom="test"></div>';
      const result = sanitizer.sanitize(SecurityContext.HTML, exampleData);
      expect(result).toEqual('<div></div>');
    }
  ));
});
