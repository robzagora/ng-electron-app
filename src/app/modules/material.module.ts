import { NgModule } from "@angular/core";
import { MatButtonModule, MatCardModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

const modules = [
    MatButtonModule,
    MatCardModule,
    ScrollingModule,
    VirtualScrollerModule
];

@NgModule({
    imports: [
        modules
    ],
    exports: [
        modules
    ]
})
export class MaterialModule {
    constructor() {

    }
}
