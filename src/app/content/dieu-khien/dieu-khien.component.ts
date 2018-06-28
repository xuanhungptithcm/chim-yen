import { Component, OnInit } from '@angular/core';
import { DieukhienService } from '../../shared/dieukhien.service';

@Component({
  selector: 'app-dieu-khien',
  templateUrl: './dieu-khien.component.html',
  styleUrls: ['./dieu-khien.component.css']
})
export class DieuKhienComponent implements OnInit {
  nhietDo = true;
  doAm = true;
  matDo = true;
  AverageNhietDo;
  AverageDoAm;
  AverageMatDo;
  AverageTangSo;
  constructor(private dieuKhienService: DieukhienService) { }

  ngOnInit() {
    this.dieuKhienService.receiveData().subscribe(dataJson => {
      this.AverageDoAm = dataJson.AverageDoAm;
      this.AverageNhietDo = dataJson.AverageNhietDo;
      this.AverageMatDo = dataJson.AverageMatDo;
      this.AverageTangSo = dataJson.AverageTangSo;
    });
  }
  onChangeNhietDo(value) {

  }
  onChangeDoAm(value) {

  }
  onChangeMatDo(value) {

  }
}
