import { Component } from '@angular/core';

@Component({
  selector: 'app-depoiments',
  imports: [],
  templateUrl: './depoiments.html',
  styleUrl: './depoiments.css',
})
export class Depoiments {

  depoiment = [
    {
      nomeCliente: "Gustavo de Freitas",
      funcaoEmpresa: "CEO, NewPower",
      depoimento: "A Tecfy entregou uma solução de vendas impecável. O site é rápido, seguro e transformou a experiência de compra dos nossos clientes. É o parceiro técnico ideal para quem busca resultado.",
      foto: "assets/pictures/picture_3.jpg"
    },
    {
      nomeCliente: "Jansen Killinger",
      funcaoEmpresa: "Educador, Senai",
      depoimento: "Encontrar parceiros de tecnologia que cumprem o que prometem é difícil, mas a Tecfy é exceção. O Matheus lidera com seriedade, pontualidade britânica e uma comunicação direta. É um trabalho pautado na integridade e na entrega de resultados reais, sem rodeios.",
      foto: "assets/pictures/picture_2.png"
    },
    {
      nomeCliente: "André Daniel",
      funcaoEmpresa: "CEO, G Town Medical Supplies",
      depoimento: "A gente precisava de mais que um software, precisava de alguém que entendesse o nosso negócio. A Tecfy conectou nosso estoque com as vendas de um jeito que facilitou demais a nossa rotina. Foi uma parceria que trouxe paz de espírito e muita eficiência pra G Town.",
      foto: "assets/pictures/user6.png"
    },
    {
      nomeCliente: "Claudio",
      funcaoEmpresa: "CEO, Braziflon",
      depoimento: "A implementação do ERP desenvolvido pela Tecfy foi um divisor de águas na nossa gestão. O sistema foi desenhado sob medida para nossa operação e o resultado foi imediato: aumentamos a eficiência da equipe em 40%. A Tecfy entregou tecnologia que gera lucro e organização de verdade.",
      foto: "assets/pictures/user4.png"
    },
    {
      nomeCliente: "Rafael Moreira",
      funcaoEmpresa: "Ger. Adm, Amazon Brasil",
      depoimento: "Na minha posição na Amazon, a precisão e a organização dos dados são inegociáveis. A Tecfy atuou com excelência na estruturação e análise de informações complexas. É uma empresa que entrega o nível de detalhe e a inteligência analítica que grandes operações exigem.",
      foto: "assets/pictures/user5.png"
    },
    {
      nomeCliente: "Lucas Gonzales",
      funcaoEmpresa: "Educador, Senai",
      depoimento: "A Tecfy reflete a excelência do Matheus: dedicação e entrega de alto nível. A medalha nas Olimpíadas do Conhecimento garante segurança técnica, unindo expertise e atendimento parceiro.",
      foto: "assets/pictures/picture_1.png"
    },
    
  ];
  
}
