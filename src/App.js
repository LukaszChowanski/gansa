import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import styled from 'styled-components'

import MainTemplate from './Templates/MainTemplate'
import ContactPage from './components/ContactPage/ContactPage'
import FrontPage from './components/FrontPage/FrontPage'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
      <MainTemplate>
        <Router>
          <MainContainer>
            <Nav/>
            <Switch>
              <Route exact path="/">
                <FrontPage />
              </Route>
              <Route path="/kontakt">
                <ContactPage />
              </Route>
            </Switch>
            <Footer/>
          </MainContainer>
        </Router>
      </MainTemplate>
  );
}

export default App;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1140px;
`