import React from 'react';
import { useState } from 'react';
import './App.css';
import { SortingTable } from './components/SortingTable';
//import { index } from './components/index';

function App() {
	const [inputs, setInputs] = useState({});


	const handleChange = (event) => {
    	const marca = event.target.marca;
    	const modelo = event.target.modelo;
    	setInputs(values => ({...values, [marca]: modelo}))
	}

 	return (
		<div className="App">
			<header className="App-header">
				<h1>ML app - Análisis de precios</h1>
			</header>

			<body>
				<form action="/listado" method="post" className="form">
					<div>
						<label>Ingresar Marca:
						<input type="text" name='marca' value={inputs.username} onChange={handleChange} />
						</label>
						<label>Ingresar Modelo:
                		<input type="text" name='modelo' value={inputs.username} onChange={handleChange} />
                		</label>
					</div>
					<button type="submit"> Consultar </button>
				</form>	
					<SortingTable />		
			</body>

		</div>
	);
}


export default App;

// Learn LINK.
// 




/*        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/




/*
const [data setData] = React.useState(null);

React.useEffect(() => {
	fetch("/api")
 		.then((res) => res.json())
 		.then((data) => setData(data.message));
	} []
);



function App() {
	return (
		<div className="App">
			<SortingTable />
		</div>
	);
}
*/