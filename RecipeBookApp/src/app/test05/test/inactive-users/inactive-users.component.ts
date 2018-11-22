import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/users.service';
import {CounterService} from '../service/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  // active users are stored in this string
  users: string[];

  // create service accessable in this class
  constructor( private userService: UserService, private counterService: CounterService) {}

  onSetToActive(id: number) {
    this.userService.setToActive(id);
    this.counterService.incrementInactiveToActive();
  }
  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
}
