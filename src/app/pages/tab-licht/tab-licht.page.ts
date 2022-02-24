import { Component, OnInit } from '@angular/core';
import { DatenService } from 'src/app/services/daten.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-tab-licht',
  templateUrl: './tab-licht.page.html',
  styleUrls: ['./tab-licht.page.scss', '../../app.component.scss'],
})
export class TabLichtPage implements OnInit {

  title = "Licht Übersicht";
  zimmer;

  constructor(
    private toast: ToastService,
    private daten: DatenService
  ) {
    this.zimmer = this.daten.getAlleZimmer();
  }

  ngOnInit() {
  }

  allAn() {
    this.toast.presentToast("Alle Lichter wurden an.");
    this.daten.setAllLicht(true);
  }

  allAus() {
    this.toast.presentToast("Alle Lichter wurden aus.");
    this.daten.setAllLicht(false);
  }

  lichtToggle(indexZim, indexLicht, event) {
    this.daten.setLicht(this.zimmer[indexZim].name, indexLicht, event.target.checked, this.zimmer[indexZim].lichtArray[indexLicht].hell);
    if (event.target.checked)
      this.toast.presentToast(this.zimmer[indexZim].name + "-" + this.zimmer[indexZim].lichtArray[indexLicht].name + " wurde an.");
    else
      this.toast.presentToast(this.zimmer[indexZim].name + "-" + this.zimmer[indexZim].lichtArray[indexLicht].name + " wurde aus.");
  }

  lichtRange(indexZim, indexLicht, event) {
    this.daten.setLicht(this.zimmer[indexZim].name, indexLicht, this.zimmer[indexZim].lichtArray[indexLicht].value, event.target.value);
    this.toast.presentToast("Die Helligkeit der " + this.zimmer[indexZim].name + "-" + this.zimmer[indexZim].lichtArray[indexLicht].name + " wurde um " + event.target.value + "% geändert.");
  }

}
