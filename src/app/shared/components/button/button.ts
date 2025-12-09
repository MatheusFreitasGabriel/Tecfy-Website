import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() cta: boolean = false;
  @Input() routerLink: string = '';

  constructor(private router: Router){}

  handleClick(): void {
    if (this.routerLink && !this.disabled) {
      this.router.navigate([this.routerLink]).then(() => window.scrollTo(0, 0));
    }
  }
}

