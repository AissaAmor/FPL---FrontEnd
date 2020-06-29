import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SondageComponent } from "./sondage/sondage.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "sign-in",
    pathMatch: "full",
  },
  { path: "register", component: RegisterComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "sondage", component: SondageComponent },
  { path: "dashboard", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
