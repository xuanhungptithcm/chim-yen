import { Component, OnInit } from '@angular/core';
import { DieukhienService } from '../../shared/dieukhien.service';
import { parse } from 'querystring';

@Component({
  selector: 'app-doc-cam-bien',
  templateUrl: './doc-cam-bien.component.html',
  styleUrls: ['./doc-cam-bien.component.css']
})
export class DocCamBienComponent implements OnInit {

  public _lineChartData: Array<any> = [
    { data: [], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 0], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];

  constructor(private dieukhienService: DieukhienService) {
  }

  ngOnInit() {
    this.dieukhienService.receive<any>('data')
      .subscribe(result => {
        console.log(result);

        this.chuyenMang(result);
        // console.log(this.lineChartData);
      });

  }

  chuyenMang(result) {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 19; j > 0; j--) {
        this.lineChartData[i].data[j] = this.lineChartData[i].data[j - 1];
      }
      this.lineChartData[i].data[0] = parseFloat(result.data[i].state);
    }
    this.converData();
  }
  converData() {
    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(20), label: this.lineChartData[i].label };
      for (let j = 0; j < 20; j++) {
        _lineChartData[i].data[j] = this.lineChartData[i].data[j];
      }
    }
    this.lineChartData = _lineChartData;
  }
  // tslint:disable-next-line:member-ordering
  public lineChartData: Array<any> = [
    { data: [], label: 'Series A' },
    { data: [], label: 'Series B' },
    { data: [], label: 'Series C' }
  ];

  // tslint:disable-next-line:member-ordering
  public lineChartLabels: Array<any> = ['0', '3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48'
    , '51', '60'];
  // tslint:disable-next-line:member-ordering
  public lineChartOptions: any = {
    responsive: true
  };
  // tslint:disable-next-line:member-ordering
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgb(0, 128, 0, 0.4)',
      borderColor: 'rgb(0, 128, 0, 1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgb(255, 165, 0, 0.4)',
      borderColor: 'rgb(255, 165, 0,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgb(128, 0, 128, 0.6)',
      borderColor: 'rgb(128, 0, 128, 1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  // tslint:disable-next-line:member-ordering
  public lineChartLegend: Boolean = true;
  // tslint:disable-next-line:member-ordering
  public lineChartType: String = 'line';

  chartHovered(value) {

  }
  chartClicked(value) {

  }
}
