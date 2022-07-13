import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Template } from 'src/app/models/device';
import { ThetaAPITmplService } from 'src/app/services/theta-api-tmpl.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedVendor: any;
  selectedPlatform: any;
  selectedFunction: any;

  vendors: any[] = [];
  platforms: any[] = [];
  functions: any[] = [];

  templates: Template[] = [];
  search = false

  constructor(private thetaTmplService: ThetaAPITmplService, private router: Router) {}

  ngOnInit(): void {}

  filterVendors(event: { query: any; }) {
    let filteredVendors : any[] = [];
    let query = event.query;

    this.thetaTmplService.getVendors().subscribe((vendors) => {
      for(const vendor of vendors) {
        if (vendor.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filteredVendors.push(vendor);
        }
      }
      this.vendors = filteredVendors;
    })
  }

  filterPlatforms(event: { query: any; }) {
    let filteredPlatforms : any[] = [];
    let query = event.query;

    this.thetaTmplService.getPlatforms().subscribe((platforms) => {
      for(const platform of platforms) {
        if (platform.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filteredPlatforms.push(platform);
        }
      }
      this.platforms = filteredPlatforms;
    })
  }

  filterFunctions(event: { query: any; }) {
    let filteredFunctions : any[] = [];
    let query = event.query;

    this.thetaTmplService.getFunctions().subscribe((functions) => {
      for(const funct of functions) {
        if (funct.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filteredFunctions.push(funct);
        }
      }
      this.functions = filteredFunctions;
    })
  }

  getTemplates(): void {
    this.thetaTmplService.getTemplates(this.selectedVendor, this.selectedPlatform, this.selectedFunction).subscribe((templates) => {
      this.templates = templates
      this.search = true
    })
  }

}
