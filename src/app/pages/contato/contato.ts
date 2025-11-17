import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router){}

  selectedPlan: string = "Nenhum";
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedPlan = params["plano"] || "Nenhum";
      console.log("Plano selecionado", this.selectedPlan);
    })
    
  }
  

}
