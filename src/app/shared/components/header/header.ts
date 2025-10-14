import {Component, HostListener} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLinkActive,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private router: Router) {}

  redirectToContact(){
    this.router.navigate(['/contact']);
    this.isMenuOpen = false;
  }

  redirectToHome(){
    this.router.navigate(['/']);
    if(this.isMenuOpen == true){
      this.isMenuOpen = false;
    }
  }

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Ativa a classe se o scroll for maior que 10px (um valor pequeno para o efeito começar logo)
    if (scrollPosition > 10) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
