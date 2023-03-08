import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hinvAppNot]'
})
export class AppNotDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
 @Input() set hinvAppNot(condition: boolean){
   if(!condition){
     this.viewContainer.createEmbeddedView(this.templateRef);
   }
   else{
     this.viewContainer.clear();
   }
 }
}
