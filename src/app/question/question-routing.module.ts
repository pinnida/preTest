import { Q1Component } from './q1/q1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component
import { Q2Component } from './q2/q2.component';
import { QuestionComponent } from './question.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'question',
  },
  {
    path: 'question',
    component: QuestionComponent,
  },
  {
    path: 'q1',
    component: Q1Component,
  },
  {
    path: 'q2',
    component: Q2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionRoutingModule {}
