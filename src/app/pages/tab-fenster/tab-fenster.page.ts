import { Component, OnInit } from '@angular/core';
import { DatenService } from 'src/app/services/daten.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-tab-fenster',
  templateUrl: './tab-fenster.page.html',
  styleUrls: ['./tab-fenster.page.scss', '../../app.component.scss'],
})
export class TabFensterPage implements OnInit {

  title = "Rolladen Übersicht";
  zimmer;

  constructor(
    private toast: ToastService,
    private daten: DatenService
  ) {
    this.zimmer = this.daten.getAlleZimmer();
  }

  ngOnInit() {
  }

  allHoch() {
    this.toast.presentToast("Alle Rolladen wurden oben.");
    this.daten.setAllRollade(true);
  }

  allRunter() {
    this.toast.presentToast("Alle Rolladen wurden heruntergelassen.");
    this.daten.setAllRollade(false);
  }

  rolladeToggle(zim, event) {
    console.log(zim);
    this.daten.setRollade(zim.name, event.target.checked, zim.rollade.hoehe);
    if (event.target.checked)
      this.toast.presentToast(zim.name + "-Rollade wurde oben.");
    else
      this.toast.presentToast(zim.name + "-Rollade wurde heruntergelassen.");
  }

  rolladeRange(zim, event) {
    this.daten.setRollade(zim.name, zim.rollade.value, event.target.value);
    this.toast.presentToast("Die Höhe der " + zim.name + "-Rollade wurde um " + event.target.value + "% geändert.");
  }

}
