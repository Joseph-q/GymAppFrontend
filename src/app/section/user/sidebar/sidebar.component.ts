import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import User from '../../../core/models/users/user.get';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  constructor(
    private sideBarService: SidebarService,
    private userService: UserService,
    private router: Router
  ) {}
  sideBarChangeSize!: Observable<boolean>;
  user: User | null = null;
  ngOnInit(): void {
    this.sideBarChangeSize = this.sideBarService.isActivate;
    this.userService.GetUserInformation().subscribe((user) => {
      this.user = user;
    });
  }

  scrollTo(section: string) {
    document
      .querySelector('#' + section)
      ?.scrollIntoView({ behavior: 'smooth' });
  }
  toggleSidebarSize() {
    this.sideBarService.setSideBarChangeSize();
  }
}
