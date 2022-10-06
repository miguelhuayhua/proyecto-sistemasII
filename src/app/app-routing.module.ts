import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard-module/dashboard/dashboard.component";
import { LoginComponent } from "./login-module/login/login.component";
import { MatriculateComponent } from "./login-module/matriculate/matriculate.component";

const routes: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'register', component: MatriculateComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {

}