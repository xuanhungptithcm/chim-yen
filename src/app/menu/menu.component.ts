import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../shared/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  trangHienTai: Number;
  constructor(private router: Router,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.trangHienTai = parseInt(localStorage.getItem('y'), 0);
    if (!this.trangHienTai) {
      this.trangHienTai = 0;
    }
    // console.log(this.trangHienTai);
  }
  changeComponent(trangInPut) {
    this.trangHienTai = trangInPut;
    localStorage.setItem('y', trangInPut);
    if (trangInPut === 0) {
      this.router.navigate(['./home']);
    }
    if (trangInPut === 1) {
      this.router.navigate(['./home/doccambien']);
    }
    if (trangInPut === 2) {
      this.router.navigate(['./home/laplenh']);
    }
    if (trangInPut === 3) {
      this.router.navigate(['./home/dieukhien']);
    }
  }
}
