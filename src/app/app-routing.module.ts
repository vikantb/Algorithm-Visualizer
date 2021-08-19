import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortingAlgorithmsComponent } from './sorting-algorithms/sorting-algorithms.component';

const routes: Routes = [
  {path: '**', component: SortingAlgorithmsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
