import { Component, OnInit } from '@angular/core';
import {UserService} from './service/users.service';
import {CounterService} from './service/counter.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [UserService, CounterService]
})
export class TestComponent {

}
