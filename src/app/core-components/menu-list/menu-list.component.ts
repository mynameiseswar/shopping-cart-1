import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface MenuList {
  displayName: string;
  id: number;
  icon: string;
  link: string;
  isActive: boolean;
}

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {

  constructor(
    private router: Router
  ){}

  menuList: Array<MenuList> =[
    {
      displayName: 'Home',
      id: 1,
      icon: 'home',
      link: 'home',
     isActive: true
    },
    {
      displayName: 'Products',
      id: 6,
      icon: '360',
      link: 'products',
     isActive: false
    },
    {
      displayName: 'About Us',
      id: 2,
      icon: 'bolt',
      link: 'about-us',
     isActive: false
    },
    {
      displayName: 'Contact Us',
      id: 3,
      icon: 'chair',
      link: 'contact-us',
     isActive: false
    },
    {
      displayName: 'Feedback',
      id: 4,
      icon: 'campaign',
      link: 'feedback',
     isActive: false
    },
    {
      displayName: 'Logout',
      id: 5,
      icon: 'logout',
      link: 'login',
     isActive: false
    }
  ];

  resetMenuListActivate(){
    this.menuList.forEach(
      (e) => e.isActive = false
    );
  }

  menuClick(target: MenuList){
    this.resetMenuListActivate();
    target.isActive = true;
    this.router.navigate([`/${target.link}`]);

  }

}
