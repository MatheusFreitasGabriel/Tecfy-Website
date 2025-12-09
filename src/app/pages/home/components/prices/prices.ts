import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prices',
  imports: [],
  templateUrl: './prices.html',
  styleUrl: './prices.css',
})
export class Prices {

  constructor(private router: Router){}

  plans = [
    {
      name: "Starter",
      recommended: false,
      montly: true,
      price: "2500",
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
      price: "5000",
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
      price: "12500",
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
