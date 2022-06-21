import React from "react";
import porqueDoar from "../assets/donate/doacao_sangue_banner_porqueDoar.jpg";
import porqueDoar2 from "../assets/donate/banner_doacao-porqueDoar.jpeg";

type Props = {};

export const Donate = (props: Props) => {
  return (
    <div>
      <p className="text-lg">
        A doação de sangue é um gesto solidário no qual você pode salvar a vida
        de até quatro pessoas que se submetem a tratamentos e intervenções
        médicas de grande porte e complexidade, como transfusões, transplantes,
        procedimentos oncológicos e cirurgias. <br />
        <br />
        Além de pessoas que se submetem a procedimentos e intervenções médicas,
        o sangue também é indispensável para que pacientes com doenças crônicas
        graves, como Doença Falciforme e Talassemia, possam viver por mais tempo
        e com mais qualidade de vida, além de ser de extrema importância para
        tratar feridos em situações de emergência ou calamidades.
        <br />
        <br />
        Pesquisas indicam que 1,8% da população brasileira é doadora de sangue,
        percentual que está dentro da meta da Organização Mundial da Saúde
        (OMS). Porém, esse montante poderia ser maior, o ideal seria pelo que
        menos 3% da população fosse doadora. A falta de conscientização e fake
        news são as principais dificuldades para a diminuição da doação de
        sangue. No Brasil faltam campanhas informativas, desde a infância o
        assunto é tratado como tabu, além de existirem muitas falácias acerca do
        assunto, o que gera receio em quem não tem muita informação sobre o
        procedimento. Infelizmente, o brasileiro ainda não tem a cultura de doar
        sangue, o país nunca passou por acontecimentos que exigissem uma maior
        compreensão sobre a importância da doação, como por exemplo uma guerra
        ou grandes desastres naturais, ao contrário de países como Japão ou
        Estados Unidos, onde o índice de doação é consideravelmente maior.
        <br />
      </p>
      <p>
        <img src={porqueDoar} alt="porque Doar" />
      </p>
      <p className="text-lg">
        Outro grande problema era a questão de homossexuais serem impedidos de
        doarem sangue, o preconceito acompanhava as orientações de doação desde
        o seus primórdios, onde era determinado que homens que tivessem tido
        relações sexuais com outros homens, e suas eventuais parceiras sexuais,
        fossem submetidos à uma quarentena de 12 meses para que pudessem doar
        sangue, sendo considerados inaptos para doação. Não se pode negar a
        alguém que deseja doar sangue um tratamento diferente e segregado, com
        base em critérios que ofendem a dignidade da pessoa. Ao invés de
        estimular a doação de sangue como um ato relevante de solidariedade e
        compromisso com vida, criavam um obstáculo social que estimulava um
        preconceito que já está enraizado na sociedade, a discriminação contra
        orientação sexual. Privar alguém da possibilidade de doar sangue, apenas
        pela orientação sexual, é mais uma forma perversa de exclusão e de
        violação da dignidade dos direitos LGBTQIA+.
        <br />
        <br />
        Doar sangue é, antes de qualquer coisa, um ato pela vida, não importa
        quem será o beneficiado, mas sim, que outras pessoas terão novas
        oportunidades, novas chances de recomeçar a própria vida. As restrições
        e os critérios técnicos e científicos para a doação devem ser aplicados
        igualmente a todos, sem que haja qualquer tipo de discriminação. Toda
        doação de sangue se submete ao mesmo processo de testagem minunciosa
        para assegurar a prevenção a infecções. Quanto mais pessoas doando
        melhor e maiores as chances de manter os estoques de sangue sempre em
        níveis seguros para quaisquer situações que possam ocorrer, mesmo quem
        já vacinou contra a Covid-19 pode doar sangue normalmente, basta esperar
        um período que varia de acordo com o imunizante aplicado. Aqueles que
        tomaram a Coronavac precisam esperar 48 horas antes de doar e os que
        foram vacinados com Astrazeneca, Pfizer ou Janssen podem fazer a doação
        depois de 7 dias. Uma pessoa adulta tem em média 5L de sangue e em uma
        doação são coletados no máximo 450ml. O doador passará por uma
        entrevista que tem o objetivo de dar maior segurança ao processo. <br />
        <br />
        Melhor do que fazer a doação uma vez, é tornar esse gesto um
        compromisso, tornando-se um doador recorrente. Os estoques dos bancos de
        sangue de todo o País precisam estar constantemente abastecidos para
        atender tanto quem estiver em situação de emergência, quanto para quem
        necessita de sangue com frequência e ainda para cirurgias, pois a
        demanda por sangue não para. O momento de doação é único, o fato de se
        sensibilizar sobre a necessidade do outro e querer efetivamente
        colaborar e ajudar, é quase sempre uma terapia do bem e que pode causar
        uma sensação de realização e felicidade incomparável. Essa sensação
        positiva que sentimos quando realizamos um ato de doação é uma resposta
        fisiológica que o corpo emite em forma de retribuição, é evidente que o
        ato de doar é benéfico para quem doa, proporcionando uma sensação de
        realização e bem estar.
      </p>
    </div>
  );
};
