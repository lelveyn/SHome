import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatenService } from 'src/app/services/daten.service';

@Component({
  selector: 'app-tab-temp',
  templateUrl: './tab-temp.page.html',
  styleUrls: ['./tab-temp.page.scss', '../../app.component.scss'],
})
export class TabTempPage implements OnInit {

  title = "Temperatur Übersicht";
  zimmer;

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Temperatur' }
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: false
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';

  constructor(
    private daten: DatenService
  ) {
    this.zimmer = this.daten.getAlleZimmer();

    this.daten.getTemperaturArray("tag");
    for (let i = 0; i < 20; i++) {
      this.lineChartLabels.push(new Date().getHours() - i);
    }
  }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.daten.getTemperaturArray(ev.target.value);
    this.lineChartLabels = [];
    if (ev.target.value == "tag") {
      for (let i = 0; i < 20; i++) {
        this.lineChartLabels.push(new Date().getHours() - i);
      }
    } else if (ev.target.value == "woche") {
      for (let i = 0; i < 7; i++) {
        this.lineChartLabels.push(new Date().getDate() - i);
      }
    }
  }

}
