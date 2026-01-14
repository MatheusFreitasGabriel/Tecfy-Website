import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-prices',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './prices.html',
  styleUrl: './prices.css',
})
export class Prices {

  constructor(private router: Router){}

  plans = [
    {
      name: "Landing",
      recommended: false,
      montly: true,
      price: "647",
      projectTypes: [
        "Landing Page"
      ],
      titleInclude: "Incluso:",
      include: [
        "Página única de alta conversão.",
        "Design focado em Copywriting.",
        "Otimização de SEO e Velocidade.",
        "Integração com WhatsApp/CRM.",
        "Manutenção e suporte técnico."
      ],
      textCta: "Assinar Landing"
    },
    {
      name: "Starter",
      recommended: false,
      montly: true,
      price: "2.709",
      projectTypes: [
        "Website",
        "Software"
      ],
      titleInclude: "Incluso:",
      include: [
        "Projeto de até 7 páginas/telas.",
        "Design personalizado (UX UI).",
        "Painel de Gerenciamento (CMS).",
        "Manutenção e suporte técnico.",
        "Franquia de recursos (R$250/mês)."
      ],
      textCta: "Assinar Starter"
    },

    {
      name: "Pro",
      recommended: true,
      montly: true,
      price: "5.417",
      projectTypes: [
        "Website ou Software",
        "Aplicativo (Android, IOS)"
      ],
      titleInclude: "Tudo do Starter, mais:",
      include: [
        "Projeto de até 14 páginas/telas.",
        "Relatórios mensais personalizados.",
        "Suporte técnico prioritário.",
        "Franquia de recursos (R$500/mês)."
      ],
      textCta: "Assinar Pro"
    },

    {
      name: "Ultimate",
      recommended: false,
      montly: true,
      price: "14.542",
      projectTypes: [
        "Todas as plataformas.",
        "Inteligência Artificial."
      ],
      titleInclude: "Tudo do Pro, mais:",
      include: [
        "Projeto com páginas/telas ilimitadas.",
        "Integração com Inteligência Artificial.",
        "Suporte com gestor dedicado.",
        "Franquia de recursos (R$1250/mês)."
      ],
      textCta: "Assinar Ultimate"
    },
    {
      name: "Startup",
      recommended: false,
      montly: false,
      price: "Sob Consulta",
      projectTypes: [
        "MVP Ágil",
        "SaaS Escalável"
      ],
      titleInclude: "Diferenciais:",
      include: [
        "Desenvolvimento focado em Time-to-Market.",
        "3 meses de Hyper-care (suporte pós-lançamento).", // O benefício que o Equity não tem
        "Mentoria técnica para Pitch e Fundraising.",
        "Propriedade total do código-fonte."
      ],
      textCta: "Validar minha Ideia"
    },
    {
      name: "Equity",
      recommended: false,
      montly: false,
      price: "Customizado",
      projectTypes: [
        "Todas as plataformas.",
      ],
      titleInclude: "Como funciona:",
      include: [
        "Pagamento único pelo desenvolvimento.",
        "Propriedade total do códico-fonte.",
        "Sem taxas mensais.",
        "Manutenção e atualização sob demanda."
      ],
      textCta: "Fale com um Especialista"
    },
  ];

  goToContato(plano: string){
    this.router.navigate(['/contato'], {queryParams: {plano}})
  }

}
