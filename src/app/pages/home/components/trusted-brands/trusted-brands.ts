import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-trusted-brands',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './trusted-brands.html',
  styleUrl: './trusted-brands.css',
})
export class TrustedBrands {

  trustedLogoMarkList: string[] = [
    "assets/logotypes/Rankee_logo.svg",
    "assets/logotypes/NewPower_logo.svg",
    "assets/logotypes/Gtown_logo.svg",
    "assets/logotypes/Braziflon.svg",
  ]

}
