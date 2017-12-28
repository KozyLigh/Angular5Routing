import {ActivatedRouteSnapshot, CanActivate,
        Router, RouterStateSnapshot} from '@angular/router';
import {Observer} from 'rxjs/Observer';
import {Injectable, NgModule} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
@NgModule({

})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observer<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true;
                    } else {
                      this.router.navigate(['/']);
                    }
                }
            );

    }
}
