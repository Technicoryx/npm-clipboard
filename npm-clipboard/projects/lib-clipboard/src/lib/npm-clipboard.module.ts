import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {NpmClipboardIfSupportedDirective} from './npm-clipboard-if-supported.directive';
import {NpmClipboardDirective} from './npm-clipboard.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [NpmClipboardDirective, NpmClipboardIfSupportedDirective],
    exports: [NpmClipboardDirective, NpmClipboardIfSupportedDirective]
})
export class ClipboardModule {}
