import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ci: number = 0;
  password: string = '';
  constructor() { }


  //on submit event
  onSubmit(ev: SubmitEvent) {
    console.log(this.ci)
  }
  ngOnInit(): void {
  }

}
