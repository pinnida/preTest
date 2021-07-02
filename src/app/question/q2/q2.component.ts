import { Component, OnInit } from '@angular/core';

// services
import { DataService } from 'src/app/shared/services';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css'],
})
export class Q2Component implements OnInit {
  categoryList: any;
  cols: any = [];

  constructor(private dataSVC: DataService) {}

  ngOnInit(): void {
    this.cols = [
      {
        field: 'category',
        header: 'category',
        width: '100%',
        calign: 'center',
        type: 'string',
      },
    ];

    this.getCategories();
  }

  getCategories() {
    this.dataSVC.getCarsSmall().then((dt) => {
      console.log(dt);

      let newArr = this.addObjectKey(dt);
      this.categoryList = newArr;
    });
  }

  addObjectKey(arr: any) {
    const newArr: any = [];

    arr.forEach((element: any) => {
      const obj = { category: element };
      newArr.push(obj);
    });

    return newArr;
  }
}
