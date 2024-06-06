import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let userInfo = window.sessionStorage.getItem('user');
  return userInfo == 'true' ? true : false;
};
