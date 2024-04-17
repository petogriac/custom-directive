import {
  Directive,
  inject,
  Input,
  OnChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[hdHasAccess]',
  standalone: true,
})
export class HasAccessDirective implements OnChanges {
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);

  @Input({required: true}) hdHasAccess!: string | undefined;

  ngOnChanges() {
    this.viewContainer.clear();

    if (this.hdHasAccess === 'ok') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}

