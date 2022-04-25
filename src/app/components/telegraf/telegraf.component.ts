import { R3TargetBinder } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-telegraf',
  templateUrl: './telegraf.component.html',
  styleUrls: ['./telegraf.component.scss']
})
export class TelegrafComponent implements OnInit {
  items: MenuItem[] = [];
  data: any;
  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-download' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' },
    ];

    this.data = {
      labels: ['Actives','Inactives','Failed'],
      color: "rgb(34, 197, 94)",
      datasets: [
          {
              data: [6, 1, 1],
              color: "rgb:(34,34,4)",
              backgroundColor: [
                  "rgb(34, 197, 94)",
                  "rgb(236, 72, 153)",
                  "rgb(234, 179, 8)"
              ],
              borderColor: [
                "rgb(7, 20, 38)",
                "rgb(7, 20, 38)",
                "rgb(7, 20, 38)"
              ],
              hoverBackgroundColor: [
                  "rgb(34, 197, 94)",
                  "rgb(236, 72, 153)",
                  "rgb(234, 179, 8)"
              ]
          }
      ],
    }

    this.chartOptions = {
      plugins: {
        legend: {
            labels: {
                color: '#ebedef'
            }
        }
      }
    }

  }
};
