import React from "react";
import { Container } from "./styles";
import { Card } from "antd";
import { CircleUser } from "@styled-icons/fa-solid/CircleUser";

const BannerContent: React.FC = () => {
  return (
    <Container>
      <Card className="uk-margin-top">
        <div className="uk-flex">
          <div className="uk-margin-right">
            <img
              className="content-banner"
              src={"/images/content-home-banner.webp"}
              alt="banner"
            />
          </div>
          <div>
            <h3>
              Testes de acessibilidade: o padrão de qualidade no Annecy Design
              System
            </h3>
            <span>
              Testes de acessibilidade: o padrão de qualidade no Annecy Design
              System Aqui no Banco Carrefour a acessibilidade é um dos pilares
              do time de Design Ops. No processo de criação do nosso Design
              System para iOS e…
            </span>
            <div className="uk-flex uk-margin-top">
              <CircleUser size={35} style={{ verticalAlign: "middle" }} />
              <div className="uk-flex uk-flex-column uk-margin-small-left">
                <p className="uk-margin-remove">André Bigaran</p>
                <span className="uk-text-muted">23 de Março, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="uk-margin-top uk-flex">
        <Card className="uk-margin-right card-content">
          <div className="uk-flex uk-flex-column">
            <img
              className="content-banner-column"
              src={"/images/content-banner-1.webp"}
              alt="banner"
            />
            <div>
              <h3>A jornada da Guilda de Acessibilidade</h3>
              <span>
                A acessibilidade digital está se tornando um tema cada vez mais
                importante em nosso mundo altamente conectado. O que antes era
                um assunto…
              </span>
              <div className="uk-flex uk-margin-top">
                <CircleUser color="blue" size={35} style={{ verticalAlign: "middle" }} />
                <div className="uk-flex uk-flex-column uk-margin-small-left">
                  <p className="uk-margin-remove">Gustavo Ramos</p>
                  <span className="uk-text-muted">25 de Março, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="uk-margin-right card-content">
          <div className="uk-flex uk-flex-column">
            <img
              className="content-banner-column"
              src={"/images/content-banner-2.webp"}
              alt="banner"
            />
            <div>
              <h3>Como evoluímos a nossa especificação de acessibilidade</h3>
              <span>
                Imagino que vocês devem estar pensando: “de novo esse assunto?”
                E a resposta é simples: claro! Como tivemos muitas mudanças em
                nossa…
              </span>
              <div className="uk-flex uk-margin-top">
                <CircleUser color="green" size={35} style={{ verticalAlign: "middle" }} />
                <div className="uk-flex uk-flex-column uk-margin-small-left">
                  <p className="uk-margin-remove">Lucas Henrique</p>
                  <span className="uk-text-muted">21 de Março, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="card-content">
          <div className="uk-flex uk-flex-column">
            <img
              className="content-banner-column"
              src={"/images/content-banner-3.webp"}
              alt="banner"
            />
            <div>
              <h3>Iniciativas de Acessibilidade do Banco 🏆</h3>
              <span>
                Algumas iniciativas e processos de Acessibilidade que temos
                implementado no Banco
              </span>
              <div className="uk-flex uk-margin-top">
                <CircleUser  color="pink" size={35} style={{ verticalAlign: "middle" }} />
                <div className="uk-flex uk-flex-column uk-margin-small-left">
                  <p className="uk-margin-remove">Lorena M.</p>
                  <span className="uk-text-muted">22 de Março, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default BannerContent;
