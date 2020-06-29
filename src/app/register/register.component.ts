import { Component, OnInit } from "@angular/core";
import { AuthService } from "../Service/auth.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      nom: new FormControl(""),
      prenom: new FormControl(""),
      username: new FormControl(""),
      password: new FormControl(""),
    });
  }

  addUser() {
    this.authService.addUser(this.registerForm.value).subscribe((data) => {
      console.log(this.registerForm.value);
    });
  }
}
