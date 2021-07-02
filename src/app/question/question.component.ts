import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  title = 'preTest';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goto(page: string) {
    this.router.navigate(['/' + page]);
  }
}
