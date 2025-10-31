import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plans-cards',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './plans-cards.html',
  styleUrl: './plans-cards.css'
})
export class PlansCards {

  constructor(private router: Router) {}


  whyStarter: string[] = [
    "Sistema com até 7 páginas/módulos.",
    "Suporte 24h com resposta em até 4h e solução em até 72h.",
    "Créditos de até R$300 em custos extras.",
    "Integração com API externas gratuitas.",
    "Segurança avançada para você e seus clientes.",
    "Painel de gestão básico incluso.",
    "Integração com redes sociais.",
    "Direito à 1 funcionalidade nova a cada 6 meses."

  ];

  whatsStarter: string[] = [
    "Website",
    "Automação N8N",
    "Software"
  ];

  whyPro: string[] = [
    "<- Tudo do Starter",
    "Sistema com até 14 páginas/módulos.",
    "Suporte 24h com resposta em até 2h e solução em até 48h.",
    "Créditos de até R$600 em custos extras.",
    "Integração com API externas pagas.",
    "Relatórios semanais avançados de usos (Estatísticas, Power BI).",
    "Painel de gestão avançado incluso.",
    "Direito à 2 funcionalidade nova a cada 6 meses.",
    "Hospedagem com maior desempenho.",
    "Backups automáticos semanais.",
  ];

  whatsPro: string[] = [
    "Website +1 Escolha",
    "Automação N8N",
    "Software",
    "App Multiplataforma"
  ];

  whyUltimate: string[] = [
    "<- Tudo do Pro",
    "Sistema com páginas e módulos ilimitados.",
    "Suporte 24h com resposta imediata e solução em até 24h.",
    "Créditos de até R$2.500 em custos extras.",
    "Integração dos sistemas e apps com Inteligência Artificial.",
    "Consultoria estratégica de TI inclusa.",
    "Integrações ilimitadas com API's externas.",
    "Backups automáticos diários.",
    "Hospedagem dedicada em servidores de alto desempenho.",
    "Funcionalidades exclusivas sob demanda.",
    "Relatórios personalizados sob demanda.",
    "Suporte com gestor dedicado.",
    "Armazenamento em nuvem ilimitado"
  ];

  whatsUltimate: string[] = [
    "Website +2 Escolhas",
    "Automação N8N",
    "Software",
    "App Multiplataforma",
    "Inteligência Artificial",
    "Realidade Virtual",
  ];

  redirectToPlan(plano: string){
    this.router.navigate(['/contact'], {state: {planoEscolhido: plano}});
  }
}
