import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'

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
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nemo laudantium iure aut officiis laborum dolore nulla ducimus labore maiores distinctio, animi eum nisi eius maxime debitis cupiditate consequuntur accusantium?</p>
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
