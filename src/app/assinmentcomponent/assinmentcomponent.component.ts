import { Component, OnInit } from '@angular/core';
import { AssinmentcomponentService } from './assinmentcomponent.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-assinmentcomponent',
  templateUrl: './assinmentcomponent.component.html',
  styleUrls: ['./assinmentcomponent.component.css']
})
export class AssinmentcomponentComponent implements OnInit {
  public assignmentData: any;
  public jsonValue: any;

  constructor(private apiService: AssinmentcomponentService) {
    const callFunctionAfterTenSecont = interval(10000);
    callFunctionAfterTenSecont.subscribe(() => {
      this.getdata();
    });
  }

  ngOnInit() {
    this.getdata();
  }

  // Fetch data from service //
  getdata() {
    this.apiService.getAssignmentData().subscribe((data: { hits: any }) => {
      this.assignmentData = data.hits;
      console.log(data);
    });
  }

  jsonObject(value) {
    console.log('value', value);
    this.jsonValue = value;
  }

}
