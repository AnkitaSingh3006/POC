import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

 // @HostListener('mouseenter') onMouseEnter() {
 //   this.highlight('yellow');
 // }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @Input() appHighlight = '';
 // @HostListener('mouseenter') onMouseEnter() {
   // this.highlight(this.appHighlight || 'red');
  //}

  @Input() defaultColor = '';
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }

}
