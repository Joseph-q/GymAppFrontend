import { Component, afterNextRender } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import User from '../../../core/models/users/user.get';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  isEdit = false;
  user: Observable<User | null> = of(null);
  constructor(userService: UserService) {
    this.user = userService.GetUserInformation();
  }
}
