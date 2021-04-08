import styled from 'styled-components/macro'
import { ReactComponent as BookLoverSVG } from '../../material/book-lover.svg'
import Button from '../../components/Button/Button'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <HomePageLayout>
      <WelcomeTextWrapper>
        <TextWrapper>
          <Title>Willkommen bei ReadSocial</Title>
          <p>
            Finde zusammen mit deinen Freund:innen eure nächste gemeinsame
            Lektüre!
          </p>
        </TextWrapper>
        <ButtonWrapper>
          <NavButton as={NavLink} to="/inspiration">
            Inspirier mich
          </NavButton>
          <NavButton as={NavLink} to="/voting">
            Zur Abstimmung
          </NavButton>
        </ButtonWrapper>
      </WelcomeTextWrapper>
      <SVGWrapper>
        <BookLoverSVG />
      </SVGWrapper>
    </HomePageLayout>
  )
}

const HomePageLayout = styled.main`
  position: relative;
  padding: 5px;
  display: grid;
`
const WelcomeTextWrapper = styled.section`
  height: 330px;
  width: 80%;
  background: var(--grey);
  z-index: 7;
  position: absolute;
  top: 25px;
  left: 10%;
  border-radius: 10px;
  box-shadow: 0 2px 5px var(--darkgrey);
  display: grid;
  font-size: 90%;
  align-content: start;
`
const TextWrapper = styled.section`
  text-align: center;
  padding: 0 20px;
`
const Title = styled.h1`
  font-size: 150%;
`
const SVGWrapper = styled.section`
  display: grid;
  justify-content: center;
  justify-self: center;
  align-content: center;
  align-self: end;
  z-index: 10;
  position: absolute;
  bottom: -25px;
`
const ButtonWrapper = styled.section`
  align-self: start;
  align-content: center;
  display: grid;
`
const NavButton = styled(Button)`
  width: 70%;
  padding: 10px;
  margin: 10px;
  justify-self: center;
  align-self: start;
  text-decoration: none;
  text-align: center;
  font-size: 70%;
`
