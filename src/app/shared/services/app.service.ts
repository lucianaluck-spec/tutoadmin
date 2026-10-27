import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user: any = null;

    constructor(private router: Router, private toastr: ToastrService) {}

    async loginByAuth({email, password}) {
        try {
            const token = "access token";
            localStorage.setItem('token', token);
            await this.getProfile();
            this.router.navigate(['/']);
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async getProfile() {
        try {
            const userMock =  {
              ID: "7d0942e6-a274-4b5d-9ef6-568f9d39cba8",
              createdAt: "2021-05-14T12:12:00.976Z",
              email: "administrador@tuto.com.br",
              isVerified: false,
              metadata: {},
              provider: "AUTH",
              updatedAt: "2021-05-14T12:12:00.976Z",
              username: "admin"
            };
            this.user = userMock; // await Gatekeeper.getProfile();
        } catch (error) {
            this.logout();
            throw error;
        }
    }

    logout() {
        localStorage.removeItem('token');
        this.user = null;
        this.router.navigate(['/login']);
    }
}
