import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingAlgorithmsComponent } from './sorting-algorithms/sorting-algorithms.component';
import { BubbleSortComponent } from './sorting-algorithms/bubble-sort/bubble-sort.component';
import { SelectionSortComponent } from './sorting-algorithms/selection-sort/selection-sort.component';
import { QuickSortComponent } from './sorting-algorithms/quick-sort/quick-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    SortingAlgorithmsComponent,
    BubbleSortComponent,
    SelectionSortComponent,
    QuickSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
