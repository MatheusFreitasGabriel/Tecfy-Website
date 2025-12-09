import { Component, HostListener, signal } from '@angular/core';
import { Button } from '../../../shared/components/button/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [Button, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private _isScrolled = signal(false);
  
  get isScrolled(): boolean {
    return this._isScrolled();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this._isScrolled.set(scrollPosition > 50);
  }
}
