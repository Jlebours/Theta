import { Component, OnInit } from '@angular/core';
import { Service } from '../../service';
import { ThetaAPIService } from '../../services/theta-api.service';

@Component({
  selector: 'app-telegraf',
  templateUrl: './telegraf.component.html',
  styleUrls: ['./telegraf.component.scss']
})
export class TelegrafComponent implements OnInit {
  services: Service[] = [];
  services_actives: Service[] = [];
  services_inactives: Service[] = [];
  services_failed: Service[] = [];

  data: any;
  chartOptions: any;

  constructor(private thetaService: ThetaAPIService) { }

  ngOnInit(): void {
    this.thetaService.getServices().subscribe((data) => {
      data.forEach((e: any) => {
        var inst = new Service(e.name, e.state)
        this.services.push(inst);
        if (e.state == "active") {
          this.services_actives.push(inst);
        } else if (e.state == "inactive") {
          this.services_inactives.push(inst);
        } else if (e.state == "failed") {
          this.services_failed.push(inst);
        }
      });

      this.data = {
        labels: ['Actives','Inactives','Failed'],
        color: "rgb(34, 197, 94)",
        datasets: [
            {
                data: [this.services_actives.length, this.services_inactives.length, this.services_failed.length],
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
    });
  }
};
