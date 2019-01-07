import { NgModule } from '@angular/core';

import { ScientificListComponent } from './scientific-list/scientific-list.component';
import { BenchmarkingListComponent } from './benchmarking-list/benchmarking-list.component';
import { BenchmarkingDetailComponent } from './benchmarking-detail/benchmarking-detail.component';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BenchmarkingChallengeListComponent } from './benchmarking-challenge-list/benchmarking-challenge-list.component';


/**
 * routes
 */
const routes: Routes = [
  { path: 'scientific' ,  component: ScientificListComponent },
  { path: 'scientific/:id', component: BenchmarkingListComponent },
  { path: 'scientific/:id/:beventsid', component: BenchmarkingChallengeListComponent },
  { path: 'scientific/:id/:beventsid/:bchallengeid', component: BenchmarkingDetailComponent },

];

/**
 * child module for routing
 */
@NgModule({
  // This is a child module so we use forChild
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

/**
 * export routing module
 */
export class ScientificRoutingModule { }
/**
 * routing components export
 */
export const routingComponents = [ScientificListComponent, BenchmarkingListComponent, BenchmarkingDetailComponent];
