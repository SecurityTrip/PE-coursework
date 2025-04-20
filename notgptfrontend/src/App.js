//import logo from './logo.svg';
import './App.css';
import logolabelimg from './лого_надпись.png';
import logoimgimg from './лого_корабль.png';
function App() {
    function handleClick(e) {
        alert('Была нажата ссылка.');
    }
    return (
        <div className="App">
            <div class="bckgr" ></div>
            <img class="logolabel" src={logolabelimg}></img>
            <img class="logoimg" src={logoimgimg}></img>
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<p>*/}
                {/*  Edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*  className="App-link"*/}
                {/*  href="https://reactjs.org"*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  Learn React*/}
                {/*</a>*/}
                <div class="logintab">
                    <div style={{ fontSize: '170%', fontWeight: 'bold', color: 'rgb(0,0,0)', marginLeft: '30px', marginRight: '30px' }}>Авторизация</div>
                    <div class="logintabdark">
                        <input type="text" placeholder="Логин"/><br/>
                        <input type="text" placeholder="Пароль"/><br/>
                        <button>Войти</button>
                    </div>
                </div>
                {/*<button onClick={handleClick}>*/}
                {/*    fasdf*/}
                {/*</button>*/}
            </header>
        </div>
    );
}

export default App;
