import { Directive } from '@angular/core';

/**
 * Generated class for the ParallaxDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[parallax]' ,
  host: {
    '(ionScroll)':'onCntscroll($event)',
 }
})
export class ParallaxDirective {
constructor() {
  }
OnCntscroll(ev){
  console.log(ev);
}
}
