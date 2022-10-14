import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ci: number | undefined = undefined;
  password: string = '';
  constructor(private router: Router, private api : ApiService) { 

  }


  //on submit event
  onSubmit(ev: SubmitEvent) {
    this.router.navigateByUrl('/dashboard',{replaceUrl:true})
    this.api.postInfo(this.ci!)
  }
  ngOnInit(): void {
    
  }

}

