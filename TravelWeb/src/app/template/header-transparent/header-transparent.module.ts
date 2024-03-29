import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderTransparentComponent } from './header-transparent.component';
import { RouterModule } from '@angular/router';
import { MatBadgeModule, MatIconModule, MatDialogModule, MatMenuModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [HeaderTransparentComponent],
    imports: [

        CommonModule, 
        RouterModule,
        MatBadgeModule,
        MatIconModule,
        MatDialogModule,
        MatMenuModule,
        MatButtonModule,
        MatAutocompleteModule,
        ReactiveFormsModule
    ],
    exports: [HeaderTransparentComponent]
})
export class HeaderTransparentModule {}