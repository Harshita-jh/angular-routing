import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';




@Component({

  selector: 'app-one',

  templateUrl: './one.component.html',

  styleUrls: ['./one.component.css']

})

export class OneComponent {

  data:string=''

  constructor(private dataService:DataService){

    dataService.observable.subscribe(res => this.data = res)

  }

  updatedData(){

    this.dataService.fetchUpdatedDataFromComps("Hello All, This is One Component...")

  }

}