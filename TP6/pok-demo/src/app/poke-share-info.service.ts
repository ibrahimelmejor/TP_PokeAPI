import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  public stringVar = new Subject<string>();
  constructor() { }
  //Create an observable to watch subject
  getObservable(): Subject<string>
  {
    return this.stringVar;
  }
  //------- How to update the subject ------
    //Create a method that allows you to update
  public setValue(newStringVar: string)
  {
    this.stringVar.next(newStringVar);
  }
  value : string;

  getValue(): string{
    return this.value;
  }

  
}
