import { isPlatformServer } from '@angular/common';
import {
  Directive,
  Inject,
  OnInit,
  PLATFORM_ID,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appShellRender]',
})
export class ShellRenderDirective implements OnInit {
  constructor(
    private readonly viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      console.log('Render');
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
