import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = environment.apiKey;

  const authReq = req.clone({
    setHeaders: {
      'x-api-key': apiKey,
    },
  });

  return next(authReq);
};
