import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface MenuList {
  displayName: string;
  id: number;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [],
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
      link: 'home'
    },
    {
      displayName: 'Products',
      id: 6,
      icon: '360',
      link: 'products'
    },
    {
      displayName: 'About Us',
      id: 2,
      icon: 'bolt',
      link: 'about-us'
    },
    {
      displayName: 'Contact Us',
      id: 3,
      icon: 'chair',
      link: 'contact-us'
    },
    {
      displayName: 'Feedback',
      id: 4,
      icon: 'campaign',
      link: 'feedback'
    },
    {
      displayName: 'Logout',
      id: 5,
      icon: 'logout',
      link: 'login'
    }
  ];

  menuClick(target: MenuList){
    console.log(target);

    this.router.navigate([`/${target.link}`]);

  }

}
