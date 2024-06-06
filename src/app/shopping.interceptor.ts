import { HttpInterceptorFn } from '@angular/common/http';

export const shoppingInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = 'shopping-cart';
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });
  return next(authReq);
};
