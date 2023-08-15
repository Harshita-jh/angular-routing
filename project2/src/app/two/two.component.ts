import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';




@Component({

  selector: 'app-two',

  templateUrl: './two.component.html',

  styleUrls: ['./two.component.css']

})

export class TwoComponent {




  data:string=''

  constructor(private dataService:DataService){

    dataService.observable.subscribe(res => this.data = res)

  }

}