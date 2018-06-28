import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/internal/Observable';
import { Subscriber } from 'rxjs/internal/Subscriber';
@Injectable({
  providedIn: 'root'
})
export class DieukhienService {
  realTimeData: Array<any> = [
    [],
    [],
    [],
    []
  ];
  AverageNhietDo;
  AverageDoAm;
  AverageMatDo;
  AverageTangSo;
  private socket: any;
  constructor() {
    this.socket = io.connect('https://socket.mysmarthome.vn');

    this.socket.on('connect', function (err) {
      console.log('Connected to server');
    });

    this.socket.on('please_login', (res) => {
      // bạn phải gửi thông tin đăng nhập như thế này
      this.socket.emit('register_node', {
        'node_id': 'r1HPTnlxX',
        'uuid': 'quYEFJLqSobM39RjxldYWXRHW7E3',
        'token': '991431b3e48c2191e264b4f979e6f5a5803374711243'
      });

      // this.socket.emit('register_node', {
      //   'node_id': 'B13ARgrlX',
      //   'uuid': 'PsxUPldlbBNEuEUTi7Ci5yls77R2',
      //   'token': '821691b01dd50eb8ebf9c7d5344effb3006971483451'
      // });

    });

    this.socket.on('accept', function (res) {
      const node_id = res.node_id;
      const uuid = res.uuid;
      console.log('Accept', node_id, 'from', uuid);
    });

  }

  public send(eventName: string, payload: any) {
    this.socket.emit(eventName, payload);
  }

  public receive<T>(eventName: string): Observable<T> {
    return new Observable((sub: Subscriber<T>) => {
      const eventHander = (payload: any) => {
        sub.next(payload);
      };
      this.socket.on(eventName, eventHander);

      return () => {
        this.socket.removeEventListener(eventName, eventHander);
      };
    });
  }
  // real time data

  Average(array) {
    let sum: any = 0.0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    sum = sum / array.length;
    const n = parseFloat(sum);
    sum = Math.round(n * 100) / 100;
    return sum;
  }

  receiveData(): Observable<any> {
    // xu ly API data
    return new Observable(data => {
      this.receive<any>('data')
        .subscribe(result => {
          this.realTimeData[0].push(parseFloat(result.data[0].state));
          this.realTimeData[1].push(parseFloat(result.data[1].state));
          this.realTimeData[2].push(parseFloat(result.data[2].state));
          this.realTimeData[3].push(parseFloat(result.data[5].state));

          this.AverageNhietDo = this.Average(this.realTimeData[0]);
          this.AverageDoAm = this.Average(this.realTimeData[1]);
          this.AverageMatDo = this.Average(this.realTimeData[2]);
          this.AverageTangSo = this.Average(this.realTimeData[3]);
          // Nháp nhiệt độ
          this.AverageNhietDo = this.AverageNhietDo / 1000;
          this.AverageNhietDo = Math.round(this.AverageNhietDo * 100) / 100;
          const dataJson = {
            AverageDoAm: this.AverageDoAm,
            AverageNhietDo: this.AverageNhietDo,
            AverageMatDo: this.AverageMatDo,
            AverageTangSo: this.AverageTangSo
          };
          data.next(dataJson);
        });
    });

  }


}
