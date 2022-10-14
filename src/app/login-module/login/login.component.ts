import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ci: number | undefined = undefined;
  password: string = '';
  constructor(private router: Router) { 

  }


  //on submit event
  onSubmit(ev: SubmitEvent) {
    this.router.navigateByUrl('/dashboard',{replaceUrl:true})
  }
  ngOnInit(): void {
    
  }

}

