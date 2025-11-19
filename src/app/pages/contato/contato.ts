import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato implements OnInit{
  contatoForm!: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private fb: FormBuilder
  ){}

  selectedPlan: string = "Nenhum";
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedPlan = params["plano"] || "Nenhum";
      console.log("Plano selecionado", this.selectedPlan);
    })
    
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['']
    });
  }

  onSubmit(): void {
    if (this.contatoForm.valid) {
      console.log('Formulário enviado:', this.contatoForm.value);
      // Aqui você pode adicionar a lógica para enviar os dados
    } else {
      console.log('Formulário inválido');
    }
  }

}
