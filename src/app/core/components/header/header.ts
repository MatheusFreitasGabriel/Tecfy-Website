import { Component } from '@angular/core';
import { Button } from '../../../shared/components/button/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [Button, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
