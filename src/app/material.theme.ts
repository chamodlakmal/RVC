import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
    imports: [
        MatIconModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatStepperModule,
        MatSelectModule,
        MatMenuModule,
        MatTabsModule,
        MatBadgeModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        MatGridListModule,
        MatProgressBarModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatStepperModule,
        MatSelectModule,
        MatMenuModule,
        MatTabsModule,
        MatBadgeModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        MatGridListModule,
        MatProgressBarModule,
        MatDialogModule,
        MatButtonModule
    ]
})
export class MatModule { }