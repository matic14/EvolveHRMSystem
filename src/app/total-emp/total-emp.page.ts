import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-total-emp',
  templateUrl: './total-emp.page.html',
  styleUrls: ['./total-emp.page.scss'],
})
export class TotalEmpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log("Button Clicked ");
    
  }
}
