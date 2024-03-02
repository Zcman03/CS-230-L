import logo from './logo.svg';
import './App.css';
import NavbarComponent from './Navbar';
import CardComponent from './Card';

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className="App">
        <h1>CS 230L</h1>
        <h2>Section - 01</h2>
        <p>WVU ID: 800387906</p>
        <p>Hi, I am Zachary</p>
      </div>
      <CardComponent />
    </div>
  );
}

export default App;
