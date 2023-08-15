import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';




@Injectable({

  providedIn: 'root'

})

export class DataService {

  private behaviorSubj = new BehaviorSubject('Hi All Components !')

  observable = this.behaviorSubj.asObservable()

  fetchUpdatedDataFromComps(data:string){

    this.behaviorSubj.next(data)

  }

}