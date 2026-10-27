import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[enterToTab]'
})
export class EnterToTabDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('keydown.enter', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    console.log("Directive");
    event.preventDefault(); // Prevent default form submission on Enter

    console.log("EL ", this.el);
    console.log("EL native ", this.el.nativeElement);
    console.log("EL native form ", this.el.nativeElement.form);
     console.log("document ", document.body);
    // Find all focusable elements within the current form or document body
    const formElements = this.el.nativeElement.form ?
      Array.from(this.el.nativeElement.form.querySelectorAll('input, select, textarea, button, a[href], p-inputmask, p-dropdown')) :
      Array.from(document.body.querySelectorAll('input, select, textarea, button, a[href], p-inputmask p-dropdown'));
    if (formElements) {
      const index = formElements.indexOf(this.el.nativeElement);
      console.log("index do elemento");
      console.log(index);

      if (index > -1 && index + 1 < formElements.length) {
        const nextElement = formElements[index + 1] as HTMLElement;
        
        console.log("Elemento");
        console.log(nextElement);
  
        nextElement.focus(); // Focus the next element
      }
    }
  }
}
