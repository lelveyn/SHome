import { Component } from '@angular/core';
import { DatenService } from './services/daten.service';
import { HttpService } from './services/http.service';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  constructor(
    private daten: DatenService,
    private http: HttpService,
    private toast: ToastService
  ) {
    this.http.get("").subscribe(res => toast.presentToast(res.message));
    this.daten.getAll();
  }

}