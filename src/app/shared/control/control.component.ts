import { Component, ElementRef, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {

  private el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }

  // @HostListener('click')
  onClick() {
    // const html = this.el.nativeElement as HTMLDivElement
    // console.log('Clicked');
    // console.log(html.classList);
    console.log("Test");

  }

  label = input.required<string>();
}
