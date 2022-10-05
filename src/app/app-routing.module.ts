import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login-module/login/login.component";

const routes: Routes = [
    { path: '', component: AppComponent ,pathMatch:'full'},
    { path: 'login', component: LoginComponent, pathMatch:'full'}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {

}