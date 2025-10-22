import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FlowSection} from './flow-section/flow-section';
import {ChoicesSection} from './choices-section/choices-section';
import {CasesSection} from './cases-section/cases-section';
import {PlansSection} from './plans-section/plans-section';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    FlowSection,
    ChoicesSection,
    CasesSection,
    PlansSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {



}
