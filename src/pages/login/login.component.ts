import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/services/auth.service';
import { AppState } from 'src/shared/app.state';
import { AuthResponse } from 'src/types/response/auth';

interface payload {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  payload: payload = {
    email: '',
    password: '',
  };
  token: string = '';
  constructor(private httpService: AuthService, public router: Router) {}
  ngOnInit(): void {}
  handleSubmit() {
    this.httpService.login(this.payload).subscribe((res: AuthResponse) => {
      this.token = res.access_token;
      if (this.token) {
        localStorage.setItem('shopid', JSON.stringify(res.response.shopid));
        this.httpService.saveToken(this.token);
        this.router.navigateByUrl('/');
      }
    });
  }
}
