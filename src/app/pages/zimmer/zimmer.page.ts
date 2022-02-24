import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatenService } from 'src/app/services/daten.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-zimmer',
  templateUrl: './zimmer.page.html',
  styleUrls: ['./zimmer.page.scss', '../../app.component.scss'],
})
export class ZimmerPage implements OnInit {

  title: string;
  icon: string;
  nextZimmer: string;
  temp: number;
  feuchte: number;
  lichtArray;
  pflanzeArray;
  rollade;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private daten: DatenService,
    private toast: ToastService
  ) {
    this.ActivatedRoute.paramMap.subscribe(params => {
      //console.log(this.daten.getZimmer(params.get('name'))); 
      let zimmer = this.daten.getZimmer(params.get('name'));
      this.title = zimmer.name;
      this.icon = zimmer.img;
      this.temp = zimmer.temp;
      this.feuchte = zimmer.feuchte;
      this.lichtArray = zimmer.lichtArray;
      this.pflanzeArray = zimmer.pflanzeArray;
      this.rollade = zimmer.rollade;
      this.nextZimmer = this.daten.nextZimmer(zimmer.id);
    });
  }

  ngOnInit() { }

  lichtToggle(licht, event) {
    this.daten.setLicht(this.title, licht.id, event.target.checked, licht.hell);
    if (event.target.checked) {
      this.toast.presentToast(licht.name + " wurde an.");
    }
    else
      this.toast.presentToast(licht.name + " wurde aus.");
  }

  lichtRange(licht, event) {
    this.daten.setLicht(this.title, licht.id, licht.value, event.target.value);
    this.toast.presentToast("Die Helligkeit der " + licht.name + " wurde um " + event.target.value + "% geändert.");
  }

  rolladeToggle(event) {
    this.daten.setRollade(this.title, event.target.checked, this.rollade.hoehe);
    if (event.target.checked)
      this.toast.presentToast("Rollade wurde offen.");
    else
      this.toast.presentToast("Rollade wurde zu.");
  }

  rolladeRange(event) {
    this.daten.setRollade(this.title, this.rollade.value, event.target.value);
    this.toast.presentToast("Die Höhe des Rollade wurde um " + event.target.value + "% geändert.");
  }

}