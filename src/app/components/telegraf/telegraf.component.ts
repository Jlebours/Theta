import { Component, OnInit } from '@angular/core';
import { Configuration } from 'src/app/models/configuration';
import { Service } from 'src/app/models/service';
import { ThetaAPIService } from '../../services/theta-api.service';

@Component({
  selector: 'app-telegraf',
  templateUrl: './telegraf.component.html',
  styleUrls: ['./telegraf.component.scss']
})
export class TelegrafComponent implements OnInit {
  services: Service[] = []
  services_actives: Service[] = []
  services_inactives: Service[] = []
  services_failed: Service[] = []

  configurations: Configuration[] = []
  configurations_sync: Configuration[] = []
  configurations_nsync: Configuration[] = []

  data_services: any
  data_configurations: any
  chartOptions: any

  constructor(private thetaService: ThetaAPIService) { }

  ngOnInit(): void {
    this.thetaService.getServices().subscribe((data) => {
      data.forEach((e: any) => {
        var inst = new Service(e.name, e.active)
        this.services.push(inst);
        if (e.active == "active") {
          this.services_actives.push(inst);
        } else if (e.active == "inactive") {
          this.services_inactives.push(inst);
        } else if (e.active == "failed") {
          this.services_failed.push(inst);
        }
      })

      this.data_services = {
        labels: ['Actives','Inactives','Failed'],
        color: "rgb(34, 197, 94)", //
        datasets: [
          {
            data: [this.services_actives.length, this.services_inactives.length, this.services_failed.length],
            backgroundColor: [
                "rgb(34, 197, 94)", // green-500
                "rgb(236, 72, 153)", // pink-500
                "rgb(234, 179, 8)" // orange-500
            ],
            borderColor: [
              "rgb(7, 20, 38)", // blue of surfaces
              "rgb(7, 20, 38)", // blue of surfaces
              "rgb(7, 20, 38)" // blue of surfaces
            ],
            hoverBackgroundColor: [
                "rgb(34, 197, 94)", // green-500
                "rgb(236, 72, 153)", // pink-500
                "rgb(234, 179, 8)" // orange-500
            ]
          }
        ]
      }

      this.chartOptions = {
        plugins: {
          legend: {
            labels: {
                color: 'rgb(255, 255, 255)' // blanc
            }
          }
        }
      }
    })

    this.thetaService.getConfigurations().subscribe((data) => {
      data.forEach((e: any) => {
        var conf = new Configuration(e.name, e.service)
        this.configurations.push(conf);
        if (e.service === true) {
          this.configurations_sync.push(conf);
        } else {
          this.configurations_nsync.push(conf);
        }
      })

      this.data_configurations = {
        labels: ["Sync", "NSync"],
        datasets: [
          {
            data: [this.configurations_sync.length, this.configurations_nsync.length],
            backgroundColor: [
              "rgb(34, 197, 94)", // green-500
              "rgb(234, 179, 8)", // orange-500
            ],
            borderColor: [
              "rgb(7, 20, 38)", // blue of surfaces
              "rgb(7, 20, 38)", // blue of surfaces
            ],
            hoverBackgroundColor: [
              "rgb(34, 197, 94)", // green-500
              "rgb(234, 179, 8)", // orange-500
            ]
          }
        ]
      }

      this.chartOptions = {
        plugins: {
          legend: {
            labels: {
                color: 'rgb(255, 255, 255)' // blanc
            }
          }
        }
      }
    })
  }
}
