import React from "react";
import hemominasSobre from "../assets/about/Hemominas-sobre.png";
import hemolinkSobre from "../assets/about/hemolinkSobre.png";

type Props = {};

export const About = (props: Props) => {
  return (
    <div>
      <h2 className="text-xl my-2 text-center text-primary-900">HemoLink</h2>
      <p className="text-lg">
        HemoLink é um sistema utilizado para gerenciar e fornecer soluções de
        doação de sangue para o Hemominas. Conectamos pessoas doadoras aos
        bancos de sangue de todo estado de Minas Gerais. Nossa aplicação conta
        com diversas funcionalidades como alertar doadores para evitar que os
        bancos de sangue cheguem em níveis críticos, otimização para agendamento
        de doações, acompanhemento dos níveis de sangue e mais. Possibilita
        também, um melhor controle de agendamentos e dessa maneira, menores
        filas de espera garantindo assim ao doador, uma melhor experiência para
        que mais pessoas possam ser alcançadas através de nossa aplicação,
        estimulando o doador a se comprometer e se tornar um doador recorrente,
        quanto mais doações forem feitas melhor será a estabilidade dos bancos
        sanguíneos.
      </p>
      <p>
        <img className="" src={hemolinkSobre} alt="porque Doar" />
      </p>
      <h2 className="text-xl my-2 text-center text-primary-900">Hemominas</h2>
      <p className="text-lg">
        Instituída em 26 de dezembro de 1989, através da Lei n° 10.057, a
        Fundação Centro de Hematologia e Hemoterapia do Estado de Minas Gerais -
        Hemominas, com personalidade jurídica própria, de direito público,
        vincula-se à Secretaria de Estado de Saúde de Minas Gerais (SES-MG) e
        tem por finalidade assegurar unidade de comando e direção às políticas
        estaduais relativas à hematologia e hemoterapia, garantindo à população
        a oferta de sangue e hemoderivados de qualidade. Com origens que
        remontam a 10 de janeiro de 1985, com a criação do Centro de Hematologia
        e Hemoterapia de Minas Gerais, unidade então subordinada à Fundação
        Hospitalar do Estado de Minas Gerais (Fhemig), a Fundação Hemominas
        segue as diretrizes técnicas e legais do Ministério da Saúde e da
        Agência Nacional de Vigilância Sanitária (Anvisa).
      </p>
      <p className="flex justify-center">
        <img src={hemominasSobre} alt="porque Doar" />
      </p>
    </div>
  );
};
