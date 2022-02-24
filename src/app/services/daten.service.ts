import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DatenService {

  private zimmer = [];

  constructor(
    private http: HttpService
  ) { }

  public getAll() {
    this.http.get("getAll").subscribe(res => {
      console.log(res);
      this.zimmer = res;
    }, error => { });
  }

  public getAlleZimmer() {
    return this.zimmer;
  }

  public getZimmer(name) {
    for (let i = 0; i < this.zimmer.length; i++) {
      if (name == this.zimmer[i].name) return this.zimmer[i];
    }
  }

  public nextZimmer(id) {
    if (id < 5) return this.zimmer[id + 1].name;
    else return this.zimmer[0].name;
  }

  public getTemperaturArray(typ) {
    this.http.get("getTemperatur/" + typ).subscribe(res => {
      this.zimmer = res;
      return res;
    }, error => { });
  }

  public setLicht(zimmer, licht, value, hell) {
    this.http.post("setLicht", { zimmer: zimmer, licht: licht, value: value, hell: hell }).subscribe(res => {
      console.log(res);
    }, error => { });
  }

  public setRollade(zimmer, value, hoehe) {
    this.http.post("setRollade", { zimmer: zimmer, value: value, hoehe: hoehe }).subscribe(res => {
      console.log(res);
    }, error => { });
  }

  public setPflanze(zimmer, pflanze, grenze, meldung) {
    this.http.post("setPflanze", { zimmer: zimmer, pflanze: pflanze, grenze: grenze, meldung: meldung }).subscribe(res => {
      console.log(res);
    }, error => { });
  }

  public setAllLicht(value) {
    for (let i = 0; i < this.zimmer.length; i++) {
      for (let u = 0; u < this.zimmer[i].lichtArray.length; u++) {
        this.zimmer[i].lichtArray[u].value = value;
      }
    }
    this.http.post("setAllLicht", { value: value }).subscribe(res => {
      this.zimmer = res;
    }, error => { });
  }

  public setAllRollade(value) {
    console.log(value);
    console.log(this.zimmer);
    for (let i = 0; i < this.zimmer.length; i++) {
      this.zimmer[i].rollade.value = value;
    }
    this.http.post("setAllRollade", { value: value }).subscribe(res => {
      console.log(res);
    }, error => { });
  }
}
