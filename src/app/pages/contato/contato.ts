import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LeadService } from '../../core/services/lead.service';
import { leadRequest } from '../../shared/models/lead.model';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato implements OnInit {
  contatoForm: FormGroup;
  selectedPlan: string = "Nenhum";

  // Variáveis de Estado para Feedback no HTML
  isLoading = false;
  feedbackMessage = '';
  feedbackType: 'success' | 'error' | '' = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private leadService: LeadService // 1. Injetamos o Serviço
  ) {
    // 2. Inicializamos o form no construtor (Prática melhor que usar '!')
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['']
    });
  }

  ngOnInit(): void {
    // Pega o plano da URL (ex: /contato?plano=Enterprise)
    this.route.queryParams.subscribe(params => {
      this.selectedPlan = params['plano'] || "Nenhum";
    });
  }

  onSubmit(): void {
    // 1. Validação rápida
    if (this.contatoForm.invalid) {
      this.contatoForm.markAllAsTouched(); // Faz os erros aparecerem na tela
      return;
    }

    this.isLoading = true;
    this.feedbackMessage = '';

    // 2. Preparar o objeto para a API (Mapeamento)
    // O form tem 'nome', mas a API quer 'lead_name'
    const requestData: leadRequest = {
      lead_name: this.contatoForm.get('nome')?.value,
      lead_email: this.contatoForm.get('email')?.value,
      lead_phone: this.contatoForm.get('telefone')?.value || null,
      interest_plan: this.selectedPlan // Envia o plano que pegamos da URL
    };

    // 3. Chamada ao Serviço
    this.leadService.create(requestData).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.feedbackType = 'success';
        this.feedbackMessage = 'Recebemos seu contato! Em breve retornaremos.';

        this.contatoForm.reset(); // Limpa o formulário
      },
      error: (err) => {
        this.isLoading = false;
        this.feedbackType = 'error';

        // Tratamento específico para duplicidade (409)
        if (err.status === 409) {
          this.feedbackMessage = 'Este e-mail já está cadastrado em nossa base.';
        } else {
          this.feedbackMessage = 'Ocorreu um erro ao enviar. Tente novamente.';
        }
      }
    });
  }
}
