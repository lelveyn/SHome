import { Component, OnInit } from '@angular/core';
import { DatenService } from 'src/app/services/daten.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', '../../app.component.scss'],
})
export class HomePage implements OnInit {

  zimmer;

  constructor(
    private daten: DatenService
  ) {
    this.zimmer = this.daten.getAlleZimmer();
  }

  ngOnInit() { }

}