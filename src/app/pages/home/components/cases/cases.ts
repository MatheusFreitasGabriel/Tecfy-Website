import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-cases',
  imports: [
  ],
  templateUrl: './cases.html',
  styleUrl: './cases.css',
})
export class Cases {

  casesList: any[] = [
    {
      name: "NewPower",
      projectType: "Ecommerce",
      exampleImage: "assets/portfolio/newpower_website.png"
    },

    {
      name: "Braziflon",
      projectType: "ERP Website",
      exampleImage: "assets/portfolio/brasiflon_website.png"
    },
    {
      name: "Rankee",
      projectType: "App",
      exampleImage: "assets/portfolio/rankee_app.png"
    },
  ]

}
