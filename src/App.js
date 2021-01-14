import './App.css'

import MainTemplate from './Templates/MainTemplate'
import ContactPage from './views/ContactPage'

const App = () => {
  return (
    <div className="App">
        <MainTemplate>
          <ContactPage/>
        </MainTemplate>
    </div>
  );
}

export default App;
