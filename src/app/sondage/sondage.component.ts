import { Component, OnInit } from "@angular/core";
import { AuthService } from "../Service/auth.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-sondage",
  templateUrl: "./sondage.component.html",
  styleUrls: ["./sondage.component.css"],
})
export class SondageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  sondageForm: FormGroup;

  ngOnInit(): void {
    this.sondageForm = new FormGroup({
      titre: new FormControl(""),
      description: new FormControl(""),
    });
  }
  addsondage() {
    this.authService.addsondage(this.sondageForm.value).subscribe((data) => {
      console.log(this.sondageForm.value);
    });
    this.router.navigateByUrl("dashboard");
  }
}
