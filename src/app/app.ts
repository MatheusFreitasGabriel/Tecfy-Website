import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router'; // Importe Router e NavigationEnd
import { ViewportScroller } from '@angular/common'; // Importe ViewportScroller
import { filter } from 'rxjs/operators'; // Importe filter
import { Header } from './core/components/header/header';
import { Footer } from './core/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Tecfy');

  // 1. Injete o Router e o Scroller no construtor
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    // 2. Escuta toda vez que a navegação termina
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {

      // 3. Verifica se a URL tem um fragmento (ex: #portfolio, #faq)
      const tree = this.router.parseUrl(this.router.url);

      if (tree.fragment) {
        // 4. O SEGREDO: Espera 100ms para o HTML carregar antes de rolar
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(tree.fragment!);
        }, 100);
      }
    });
  }
}
