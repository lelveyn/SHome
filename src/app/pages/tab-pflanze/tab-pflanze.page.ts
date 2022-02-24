import { Component, OnInit } from '@angular/core';
import { DatenService } from 'src/app/services/daten.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-tab-pflanze',
  templateUrl: './tab-pflanze.page.html',
  styleUrls: ['./tab-pflanze.page.scss', '../../app.component.scss'],
})
export class TabPflanzePage implements OnInit {

  title = "Pflanzen Übersicht";
  zimmer;

  constructor(
    private daten: DatenService,
    private toast: ToastService
  ) {
    this.zimmer = this.daten.getAlleZimmer();
  }

  ngOnInit() { }

  setting(event) {
    if (event.target.nextSibling.style.display == "none") {
      event.target.nextSibling.style.display = "block";
      event.target.parentElement.style.height = "175px";
    } else {
      event.target.nextSibling.style.display = "none";
      event.target.parentElement.style.height = "100px";
    }
  }

  grenzeRange(indexZim, indexPflanze, event) {
    this.daten.setPflanze(indexZim, indexPflanze, event.target.value, this.zimmer[indexZim].pflanzeArray[indexPflanze].meldung);
    this.toast.presentToast("Die Feuchtigkeitsgrenze für die " + this.zimmer[indexZim].name + "-" + this.zimmer[indexZim].pflanzeArray[indexPflanze].name + " wurde auf " + event.target.value + "% geändert.");
  }

  meldungRange(indexZim, indexPflanze, event) {
    this.daten.setPflanze(indexZim, indexPflanze, this.zimmer[indexZim].pflanzeArray[indexPflanze].grenze, event.target.value);
    this.toast.presentToast("Der Alarm für die " + this.zimmer[indexZim].name + "-" + this.zimmer[indexZim].pflanzeArray[indexPflanze].name + " ohne Wasser wurde auf " + event.target.value + "% geändert.");
  }

}
