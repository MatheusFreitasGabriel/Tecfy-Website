import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FlowSection} from './flow-section/flow-section';
import {ChoicesSection} from './choices-section/choices-section';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    FlowSection,
    ChoicesSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {



}
