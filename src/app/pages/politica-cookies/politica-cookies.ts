import {Component} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {RouterLink} from '@angular/router';

export type TipoBloco = 'paragrafo' | 'lista' | 'destaque';

// Um bloco de texto (pode ser um texto simples, uma lista de itens ou um box de aviso)
export interface ConteudoBlock {
  tipo: TipoBloco;
  texto?: string;      // Usado para parágrafos e destaques
  itens?: string[];    // Usado APENAS para listas
}

// Subseção (ex: A. Dados fornecidos...)
export interface SubSecao {
  titulo: string;
  conteudo: ConteudoBlock[];
}

// O Termo Principal (ex: 1. Dados Pessoais)
export interface Termo {
  titulo: string;
  // Alguns termos têm introdução antes das subseções (ex: Introdução principal)
  conteudoGeral?: ConteudoBlock[];
  // Alguns termos têm subseções A, B, C
  subsecoes?: SubSecao[];
}

@Component({
  selector: 'app-politica-cookies',
  imports: [
    NgTemplateOutlet,
    RouterLink
  ],
  templateUrl: './politica-cookies.html',
  styleUrl: './politica-cookies.css',
})
export class PoliticaCookies {
  titleSection: string = "Termos de Uso";
  lastUpdateDate: string = "08 de Dez, 2025";

  generateId(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/ /g, '-') // Troca espaço por traço
      .replace(/[^\w-]+/g, ''); // Remove caracteres especiais
  }

  terms: Termo[] = [
    {
      titulo: "1. O que são cookies e por que os ultilizamos",
      conteudoGeral: [
        {
          tipo: "paragrafo",
          texto: "Cookies são pequenos arquivos de texto armazenados no dispositivo do usuário (computador, celular ou tablet) quando ele acessa um site.  Esses arquivos permitem reconhecer o navegador, entender o comportamento de navegação e melhorar a experiência de uso.",
        },
        {
          tipo: "paragrafo",
          texto: "Na Tecfy, utilizamos cookies apenas para fins analíticos e estatísticos, nunca para identificação individual ou coleta de informações pessoais sem consentimento. Nosso objetivo é compreender como os visitantes interagem com o site, como quais páginas são mais acessadas, tempo médio de visita e origem do tráfego, para aprimorar continuamente o desempenho, o conteúdo e a usabilidade da plataforma.",
        }
      ]
    },
    {
      titulo: "2. Cookies do Google Analytics",
      conteudoGeral: [
        {
          tipo: "paragrafo",
          texto: "Nosso site utiliza o Google Analytics, uma ferramenta de análise fornecida pela Google LLC, que coleta dados de forma anônima e agregada.  Esses cookies nos ajudam a entender métricas de acesso, como número de visitantes, páginas visualizadas e comportamento geral no site."
        },
        {
          tipo: "paragrafo",
          texto: "A Google pode processar essas informações nos Estados Unidos, seguindo padrões internacionais de segurança e privacidade compatíveis com a Lei Geral de Proteção de Dados (LGPD).",
        },
        {
          tipo: "paragrafo",
          texto: "Nenhum dado pessoal identificável é compartilhado com a TECFY ou utilizado para fins publicitários."
        },
        {
          tipo: "paragrafo",
          texto: "Caso deseje, você pode obter mais informações sobre como o Google lida com dados de navegação em: https://policies.google.com/technologies/cookies"
        }
      ]
    },
    {
      titulo: "3. Gerenciamento e desativação de cookies",
      conteudoGeral: [
        {
          tipo: "paragrafo",
          texto: "O usuário pode, a qualquer momento, gerenciar ou desativar os cookies diretamente nas configurações de seu navegador."
        },
        {
          tipo: "paragrafo",
          texto: "A maioria dos navegadores permite bloquear cookies ou alertar quando um site tenta armazená-los. No entanto, ao desativar alguns cookies, certas partes do site podem não funcionar corretamente ou ter desempenho reduzido."
        },
        {
          tipo: "paragrafo",
          texto: "Se preferir, você também pode instalar o Google Analytics Opt-out Add-on, disponível em: https://tools.google.com/dlpage/gaoptout"
        }
      ]
    },
    {
      titulo: "4. Atualizações desta Política",
      conteudoGeral: [
        {
          tipo: "paragrafo",
          texto: "A Tecfy poderá atualizar esta Política periodicamente, para refletir mudanças legais, regulatórias, tecnológicas ou operacionais.",
        },
        {
          tipo: "paragrafo",
          texto: "Sempre que houver atualização, a nova versão será publicada nesta página, com a data de última modificação claramente indicada."
        },
        {
          tipo: "paragrafo",
          texto: "Recomendamos que você revise esta Política regularmente.  O uso contínuo dos nossos serviços após a publicação das alterações representará a sua concordância com os novos termos."
        }
      ]
    },
    {
      titulo: "5. Contato",
      conteudoGeral: [
        {
          tipo: "paragrafo",
          texto: "Se você tiver dúvidas, solicitações, reclamações ou desejar exercer seus direitos previstos na LGPD, entre em contato com o nosso Encarregado de Proteção de Dados (DPO) pelos canais abaixo:",
        },
        {
          tipo: "lista",
          itens: [
            "E-mail: contato@tecfy.com.br",
            "Site: www.tecfy.dev",
            "Razão social: Tecfy Tecnologia e Software LTDA",
            "CNPJ: 62.620.086/0001-02",
            "Endereço: Avenida Presidente Médici, 117, Sala 2, Jardim Baronesa, Osasco. SP"
          ]
        }
      ]
    },

  ]

}
