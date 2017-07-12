import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
  providers: [LoggingService]
})
export class TestingComponent implements OnInit {

  constructor(private loggingService:LoggingService) { }
  ngOnInit() {
    this.loggingService.logStatus("one");
  }

}
