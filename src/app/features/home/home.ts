import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FlowSection} from './flow-section/flow-section';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    FlowSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {



}
