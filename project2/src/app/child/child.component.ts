import { Component, EventEmitter, Input, Output} from '@angular/core';




@Component({

  selector: 'app-child',

  templateUrl: './child.component.html',

  styleUrls: ['./child.component.css']

})

export class ChildComponent {

  @Input() amt:number=0;




  @Output() chiru:EventEmitter<number> = new EventEmitter<number>()




  bankInvest(){

    this.amt++

    this.chiru.emit(this.amt)

  }

  stockMarket(){

    this.amt--

    this.chiru.emit(this.amt)

  }





  // passData(){

  //   this.chiru.emit(`Mr. ${this.uname}`)

  // }

}