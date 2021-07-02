import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuestionRoutingModule } from './question-routing.module';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { QuestionComponent } from './question.component';

@NgModule({
  declarations: [Q1Component, Q2Component, QuestionComponent],
  exports: [Q1Component, Q2Component, QuestionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuestionRoutingModule,
  ],
})
export class QuestionModule {}
