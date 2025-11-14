import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { TrustedBrands } from "./components/trusted-brands/trusted-brands";
import { Cases } from './components/cases/cases';
import { Depoiments } from "./components/depoiments/depoiments";

@Component({
  selector: 'app-home',
  imports: [
    Button,
    TrustedBrands,
    Cases,
    Depoiments
],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  ourProducts: string[] = [
    "IA", 
    "Apps", 
    "Websites",
    "Softwares"
  ];

  animatedWord: string = 'tecnologia';
  private words: string[] = ['tecnologia', 'velocidade', 'qualidade', 'técnica', 'equipe'];
  private currentWordIndex: number = 0;
  private isDeleting: boolean = false;
  private animationTimeout: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Espera 1 segundo antes de começar a apagar "tecnologia"
    setTimeout(() => {
      this.isDeleting = true;
      this.animate();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
  }

  private animate() {
    if (this.isDeleting) {
      // Apagando letra por letra (backspace)
      if (this.animatedWord.length > 0) {
        this.animatedWord = this.animatedWord.substring(0, this.animatedWord.length - 1);
        this.animationTimeout = setTimeout(() => this.animate(), 100);
      } else {
        // Terminou de apagar, muda para a próxima palavra e começa a escrever
        this.isDeleting = false;
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        this.animate();
      }
    } else {
      // Escrevendo letra por letra
      const targetWord = this.words[this.currentWordIndex];
      if (this.animatedWord.length < targetWord.length) {
        this.animatedWord = targetWord.substring(0, this.animatedWord.length + 1);
        this.animationTimeout = setTimeout(() => this.animate(), 100);
      } else {
        // Terminou de escrever, espera 1 segundo e depois começa a apagar
        this.animationTimeout = setTimeout(() => {
          this.isDeleting = true;
          this.animate();
        }, 1000);
      }
    }
    this.cdr.detectChanges();
  }
}
