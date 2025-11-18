import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-examples',
  imports: [],
  templateUrl: './faq-examples.html',
  styleUrl: './faq-examples.css',
})
export class FaqExamples {

  faq = [
    {
      question: "Qual a diferença dos planos mensais para o plano Equity?", 
      response: "Nossos planos mensais oferecem suporte 24h, manutenção e hospedagem para garantir tranquilidade e segurança contínua. O plano Unique, por outro lado, é ideal para quem busca apenas uma entrega sob medida, com pagamento único e sem vínculo mensal."
    },
    {
      question: "Se eu cancelar meu plano mensal, oque acontece com meu website?", 
      response: "Se você cancelar o plano, seu sistema permanecerá ativo por mais 14 dias. Esse período extra é para que você possa fazer transições, excluir dados ou tomar qualquer decisão necessária com tranquilidade. Após esse prazo, o sistema será desativado, mas você pode reativá-lo a qualquer momento voltando para um de nossos planos."
    },
    {
      question: "Posso mudar de plano depois de contratar?", 
      response: "Sim! Você pode fazer upgrade ou downgrade a qualquer momento. Nosso suporte entrará em contato para alinhar as mudanças, seja adicionando novas funcionalidades ou ajustando módulos, garantindo que a transição seja feita sem impactar a experiência do usuário."
    },
    {
      question: "O plano mensal pode virar meu sistema definitivo sem precisar pagar todo mês?", 
      response: "Nos planos mensais o sistema continua sendo da TECFY, mas após 3 anos de contrato ele passa a ser totalmente seu, sem custo extra. A partir daí, você escolhe se continua conosco para manutenção e hospedagem ou se prefere levar o sistema para outra equipe."
    },
  ];

  openIndex: number | null = null;

  toggleAccordion(index: number): void {
    if (this.openIndex === index) {
      this.openIndex = null;
    } else {
      this.openIndex = index;
    }
  }

  isOpen(index: number): boolean {
    return this.openIndex === index;
  }

}
