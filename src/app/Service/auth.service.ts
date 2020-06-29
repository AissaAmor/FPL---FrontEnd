import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  addUser(object) {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    return this.http.post("http://localhost:9000/user/add", object, {
      headers: header,
    });
  }
  login(object) {
    console.log(object);
    return this.http.post("http://localhost:9000/user/authenticate", object);
  }

  affichageSondage() {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    return this.http.get("http://localhost:9000/sondage/all", {
      headers: header,
    });
  }

  addsondage(object) {
    return this.http.post("http://localhost:9000/sondage/add", object);
  }
}
