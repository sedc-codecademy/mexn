import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective
{
  @HostBinding('class.open') isOpen: boolean = false;
  // @HostBinding('disabled') isOpen: boolean = false;
  // @HostBinding('style.color') isOpen: boolean = false;

  @HostListener('click') onElementClick()
  {
    this.isOpen = !this.isOpen;
  }

  constructor(private elRef: ElementRef)
  {
    this.elRef.nativeElement.style.color = 'orange'
  }

}
