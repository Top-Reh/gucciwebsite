import logo from './logo.svg';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Menu from './menu';
import Firstads from './firstads';
import Seconddiv from './seconddiv';
import Thirddiv from './thirddiv';
import Fourthdiv from './fourthdiv';
import Footer from './footer';
import Guccifooterlogo from './guccifooterlogo';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Firstads/>
      <Seconddiv/>
      <Thirddiv/>
      <Fourthdiv/>
      <Footer/>
      <Guccifooterlogo/>
    </div>
  );
}

export default App;
