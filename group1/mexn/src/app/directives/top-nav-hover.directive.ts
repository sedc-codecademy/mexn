import { Directive, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTopNavHover]'
})
export class TopNavHoverDirective implements OnInit{

  constructor(
    private el:ElementRef
  ) {
    
    console.log('Top Nav Hover Directive')
  }
  
  ngOnInit()
  {
    console.log(this.el)
    
    if(this.el.nativeElement.name === 'tel')
    {
      this.validatePhoneNumber(this.el.nativeElement.value);
    }
  }
  
  validatePhoneNumber(phone)
  {
    //
  }
  
  //el.addEventListener("mouseenter", onMouseEnter);
  // @HostListener("mouseenter", ['$event.target']) onMouseEnter(target){
  //   console.log(target);
  // }
  
  // @HostBinding("class.valid") get valid()
  // {
  //   console.log('class valid existis');
  //   return 1;
  // }

}
