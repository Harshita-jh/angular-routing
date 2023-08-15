import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseevent]'
})
export class MouseeventDirective {

  constructor(private el: ElementRef) { }

  @HostListener("mouseover") mouseover(){
    this.el.nativeElement.style.backgroundColor = "wheat"
    this.el.nativeElement.style.color = "blue"

  }

  @HostListener("mouseout") mouseout(){
    this.el.nativeElement.style.backgroundColor = ""
    this.el.nativeElement.style.color = ""
  }
}
