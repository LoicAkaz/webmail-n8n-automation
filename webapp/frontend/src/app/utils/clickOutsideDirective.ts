import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({ selector: '[clickOutside]' })
export class ClickOutsideDirective {
  @Input('clickOutsideExclude') excludeSelector: string | null = null;
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onDocumentClick(target: EventTarget | null) {
    if (!target) return; // ignore null
    if (!(target instanceof HTMLElement)) return; // ignore non-HTMLElement

    const clickedInside = this.elementRef.nativeElement.contains(target);
    const clickedOnExcluded = this.excludeSelector
      ? this.excludeSelector
        .split(',')
        .some(selector => !!target.closest(selector.trim()))
      : false;

    if (!clickedInside && !clickedOnExcluded) {
      this.clickOutside.emit();
    }
  }
}
