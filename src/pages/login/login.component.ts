import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthResponse } from 'src/services/auth/index.response';
import { AuthService } from 'src/services/auth/index.service';

interface Payload {
  email: string;
  password: string;
}
interface QueryShops {
  page: number;
  limit: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  dataSources$!: Observable<any[]>;

  payload: Payload = {
    email: '',
    password: '',
  };

  query: QueryShops = {
    page: 1,
    limit: 800,
  };

  handleSubmit() {
    this.authService.login(this.payload).subscribe((res: AuthResponse) => {
      const token = res.access_token;
      if (token) {
        localStorage.setItem('shopid', JSON.stringify(res.response.shopid));
        this.authService.saveToken(token);
        this.router.navigateByUrl('/');
      }
    });
  }

  fetchDataShops() {
    this.authService.GetShops(this.query).subscribe((data: any[]) => {
      console.log(data, 'dataa');
      this.dataSources$ = of(data);
    });
  }

  ngOnInit(): void {
    this.fetchDataShops();
  }

  constructor(private authService: AuthService, public router: Router) {}
}
