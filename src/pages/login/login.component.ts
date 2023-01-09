import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

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
  constructor(private httpService: LoginService, public router: Router) {}
  ngOnInit(): void {}
  handleSubmit() {
    this.httpService.login(this.payload).subscribe((res: any) => {
      this.token = res.access_token;
      if (this.token) {
        this.httpService.saveToken(this.token);
        this.router.navigateByUrl('/');
      }
    });
  }
}
