"use client";

import React, { useEffect, useState } from "react";
import { Image, notification } from "antd";
import { Container } from "../styles";
import { sessionService } from "@/infra/services/session.service";
import { useAuth } from "@/infra/context/auth";
import { CookiesHandler } from "@/infra/cookies";
import { useRouter } from "next/navigation";
import { userService } from "@/infra/services/user.service";

const Register = React.memo(function Register() {
  const { userHandle } = useAuth();
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [nickName, setNickname] = useState("");

  const [saveAccess, setSaveAccess] = useState(false);

  useEffect(() => {
    const start = async () => {
      const getCookie = await CookiesHandler.login.get();
      if (getCookie) {
        setEmail(getCookie.identifier);
        setPassword(getCookie.password);
        setSaveAccess(true);
      }
    };
    start();
  }, []);

  const fetchSession = () => {
    if (loading) return false;
    setLoading(true);
    userService
      .create({ email: email, password, username: nickName, role: 1 })
      .then(async res => {
        await userHandle({
          token: res.data.jwt,
          ...res.data.user,
          logged: true,
        });
        route.push("/");
        notification.success({
          message: "Usuário criado com sucesso!",
        });
      })
      .catch(err => {
        if (err && err?.response?.data) {
          if (
            err?.response?.data?.error?.message ===
            "identificador é um campo obrigatório"
          ) {
            notification.error({
              message: "Email é um campo obrigatório",
            });
          } else {
            notification.error({
              message: err?.response?.data?.error?.message,
            });
          }
        } else {
          notification.error({
            message: "Alguma coisa deu errado no hora de criar usuário",
          });
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <div>
        <Image
          preview={false}
          src={"/images/plano-fundo.jpg"}
          alt="AndreBigaran"
          className="bg"
        />
      </div>

      <section className="uk-padding-small uk-position-relative">
        <div className="container-logo">
          <Image className="logo" src={"/images/logo.svg"} alt="NewFake" />
        </div>

        <div className="uk-padding-small uk-flex uk-flex-1 uk-flex-column uk-position-center">
          <h2 className="uk-text-bold">Registrar</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              fetchSession();
            }}
            autoComplete="off"
          >
            <div className="uk-margin-small-bottom">
              <label>Apelido: </label>
              <input
                className="uk-input"
                value={nickName}
                onChange={e => setNickname(e.target.value)}
                type="text"
                placeholder="Digite seu apelido"
                required
              />
            </div>
            <div className="uk-margin-small-bottom">
              <label>Email: </label>
              <input
                className="uk-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div>
              <label>Senha: </label>
              <input
                className="uk-input"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Digite sua senha"
                required
              />
            </div>

            <button
              type="submit"
              className="uk-input uk-button uk-width-1-1 uk-margin-top btnDefault button-login"
            >
              {loading ? "Processando..." : "Entrar"}
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
});

export default Register;
