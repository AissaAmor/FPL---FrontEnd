import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "../Service/auth.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient, private authService: AuthService) {}
  sondages;
  ngOnInit(): void {
    this.getallSondage();
  }

  getallSondage(): void {
    this.authService.affichageSondage().subscribe((data) => {
      this.sondages = data;
      console.log(data);
    });
  }
}
