import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutputService {
  output: string = "";

  add(output: string) {
    this.output = output;
  }

  constructor() { }
}
