import { Component, OnInit } from '@angular/core';
import { OutputService } from "../output.service";

@Component({
  selector: 'app-showoutput',
  templateUrl: './showoutput.component.html',
  styleUrls: ['./showoutput.component.css']
})
export class ShowoutputComponent implements OnInit {

  constructor(public outputService: OutputService) { }

  ngOnInit(): void {
  }

}
