import { Component } from '@angular/core';

export interface MenuList {
  displayName: string;
  id: number;
  icon: string;
}

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {

  menuList: Array<MenuList> =[
    {
      displayName: 'Home',
      id: 1,
      icon: 'home'
    },
    {
      displayName: 'About Us',
      id: 2,
      icon: 'bolt'
    },
    {
      displayName: 'Contact Us',
      id: 3,
      icon: 'chair'
    },
    {
      displayName: 'Feedback',
      id: 4,
      icon: 'campaign'
    },
    {
      displayName: 'Logout',
      id: 5,
      icon: 'logout'
    }
  ];

  menuClick(target: MenuList){
    console.log(target)
  }

}
