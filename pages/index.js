/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={function (e) {
                  setName(e.target.value);
                }}
                placeholder="Insira seu nome"
              />
              <button
                type="submit"
                disabled={name === ''}
              >
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <h1>Quizes da galera</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nemo laudantium iure aut officiis laborum dolore nulla ducimus labore maiores distinctio, animi eum nisi eius maxime debitis cupiditate consequuntur accusantium?</p>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marianaolvr" />
    </QuizBackground>
  );
}

// criar com styled components os estilos para o input e o button
// como pegar as infos do query params e mostrar na tela do quiz com o useRouter ou browser JS qindow
