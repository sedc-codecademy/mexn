import { Directive, HostBinding, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[hover]'
})
export class HoverDirective
{
  @Input() color: string
  @HostBinding('style.borderColor') borderColor: string;
  @HostBinding('style.color') _color: string;

  @HostListener('mouseover') onHover()
  {
    console.log('onHover')
    this.borderColor = 'red'
  }

  @HostListener('mouseout') onMouseout()
  {
    this.borderColor = 'initial';
    this._color = 'initial';
  }

  @HostListener('keydown') onkeydown()
  {
    this._color = this.color
  }

  constructor(private elRef: ElementRef)
  {
    // this.elRef.nativeElement.style.color = 'orange'
  }

}
