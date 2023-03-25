import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { AuthResponse } from 'src/types/response/auth.response';

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

  handleSubmit() {
    this.httpService.login(this.payload).subscribe((res: AuthResponse) => {
      const token = res.access_token;
      if (token) {
        localStorage.setItem('shopid', JSON.stringify(res.response.shopid));
        this.httpService.saveToken(token);
        this.router.navigateByUrl('/');
      }
    });
  }

  ngOnInit(): void {}
  constructor(private httpService: AuthService, public router: Router) {}
}
