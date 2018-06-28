import { Component, OnInit } from '@angular/core';
import { DieukhienService } from '../../shared/dieukhien.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dieuKhienService: DieukhienService) { }
  AverageNhietDo;
  AverageDoAm;
  AverageMatDo;
  AverageTangSo;
  ngOnInit() {
    this.dieuKhienService.receiveData().subscribe(dataJson => {
      this.AverageDoAm = dataJson.AverageDoAm;
      this.AverageNhietDo = dataJson.AverageNhietDo;
      this.AverageMatDo = dataJson.AverageMatDo;
      this.AverageTangSo = dataJson.AverageTangSo;
    });

  }

  // Doughnut
  // tslint:disable-next-line:member-ordering
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // tslint:disable-next-line:member-ordering
  public doughnutChartData: number[] = [350, 450, 100];
  // tslint:disable-next-line:member-ordering
  public doughnutChartType: String = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // lineChart
  // tslint:disable-next-line:member-ordering
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  // tslint:disable-next-line:member-ordering
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // tslint:disable-next-line:member-ordering
  public lineChartType: String = 'line';
  // tslint:disable-next-line:member-ordering
  public pieChartType: String = 'pie';
}
