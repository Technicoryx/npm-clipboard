import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import {NpmClipboardService} from './npm-clipboard.service';
@Directive({
  selector: '[libNpmClipboardIfSupported]'
})
export class NpmClipboardIfSupportedDirective implements OnInit {

  constructor(
    private _clipboardService: NpmClipboardService,
    private _viewContainerRef: ViewContainerRef,
    private _templateRef: TemplateRef<any>
  ) { }
  ngOnInit() {
    if (this._clipboardService.isSupported) {
        this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
}
}
