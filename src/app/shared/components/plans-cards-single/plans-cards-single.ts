import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-plans-cards-single',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './plans-cards-single.html',
  styleUrl: './plans-cards-single.css'
})
export class PlansCardsSingle {
  whatsMedida: string[] = [
    "Website",
    "Automação N8N",
    "Software",
    "App Multiplataforma",
    "Inteligência Artificial",
    "Realidade Virtual",
  ];

  whyMedida: string[] = [
    "Adaptação 100% aos processos da sua empresa.",
    "Otimização de eficiência e redução de custos operacionais.",
    "Automação de tarefas manuais e repetitivas.",
    "Escalabilidade para acompanhar o crescimento do negócio.",
    "Integração total com seus sistemas atuais.",
    "Obtenção de vantagem competitiva no mercado.",
    "Segurança de dados e protocolos personalizados.",
    "Propriedade total do software (sem taxas de licença).",
    "Custo-benefício superior a longo prazo (ROI).",
    "Suporte técnico ágil e com especialistas que construíram o sistema.",
    "Relatórios e dashboards criados para sua tomada de decisão.",
    "Experiência do usuário (UX/UI) desenhada para sua equipe."
  ];
}
