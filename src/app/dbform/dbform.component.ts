import { Component, OnInit } from '@angular/core';
import { Database } from "../database";
import { OutputService } from '../output.service';

@Component({
  selector: 'app-dbform',
  templateUrl: './dbform.component.html',
  styleUrls: ['./dbform.component.css']
})
export class DBFormComponent {

  model = new Database("", "", "");

  submitted = false;

  constructor(public outputService: OutputService){};

  generate(){ 
    this.outputService.add(`CREATE DATABASE ${this.model.name};`);
  }
}
