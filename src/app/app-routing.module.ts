import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component
import { Q1Component } from './question/q1/q1.component';
import { Q2Component } from './question/q2/q2.component';

// const routes: Routes = [];

const routes: Routes = [
  { path: '', redirectTo: '/question', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./question/question-routing.module').then(
        (m) => m.QuestionRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
