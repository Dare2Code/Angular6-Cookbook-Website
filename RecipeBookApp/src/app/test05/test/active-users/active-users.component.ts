import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../service/users.service';
import {CounterService} from '../service/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  // create service accessable in this class
  constructor( private userService: UserService, private counterService: CounterService) {}

  ngOnInit() {
  this.users = this.userService.activeUsers;
}
  onSetToInactive(id: number) {
    this.userService.setToInactice(id);
    this.counterService.incrementActiveToInactive();
  }

}
