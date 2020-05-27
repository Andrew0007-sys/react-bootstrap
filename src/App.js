import React from 'react';
import logo from './logo.svg';
import './App.sass';

function App() {
  return (
    <div className="App">
      <header className="App-header container-fluid">
        <nav className='navbar navbar-expand-lg fixed-top navbar-light bg-dark'>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-     expanded='false' aria-label='Toggle navigation'><span className='navbar-toggler-icon'></span>
            </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className= 'navbar-nav shirinaSto justify-content-around'>
                        <li className='nav-item'><a className='nav-link' href='#'>Головна</a></li>
                        <li className='nav-item'><a className='nav-link' href='#'>Про нас</a></li>
                        <li className='nav-item'><a className='nav-link' href='#'>Гранова програма</a></li>
                        <li className='nav-item'><a className='nav-link' href='#'>Програма</a></li>
                        <li className='nav-item'><a className='nav-link' href='#'>Реєстрація</a></li>
                        <li className='nav-item'><a className='nav-link' href='#'>Курси програмування</a></li>
                    </ul>
                </div>
        </nav>
        <div className='container'>    
            <div className="row align-item-start">
                <div className="col-lg-3 col-md-6 col-sm-12">
                   block number 1 
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    block number 2
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    block number 3
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    block number 4
                </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
