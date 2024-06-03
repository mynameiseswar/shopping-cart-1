import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

 // private userACtion = new Subject();

 private userACtion = new BehaviorSubject(0);

  constructor() { }


  setUserAction(target: number){
    this.userACtion.next(target);
  }

  getUserAction(){
    return this.userACtion.asObservable();
  }
}
