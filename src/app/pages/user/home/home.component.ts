import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../section/user/sidebar/sidebar.component';
import { NavbarProfileComponent } from '../../../section/user/navbar-profile/navbar-profile.component';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarProfileComponent,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  sideBarIsActive!: Observable<boolean>;

  constructor(private sideBarService: SidebarService) {}

  ngOnInit(): void {
    this.sideBarIsActive = this.sideBarService.isActivate;
  }
}
