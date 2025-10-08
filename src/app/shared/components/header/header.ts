import {Component, HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  constructor(private router: Router) {}

  redirectToContact(){
    this.router.navigate(['/contact']);
  }

  redirectToHome(){
    this.router.navigate(['/']);
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
