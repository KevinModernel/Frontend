import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { SortingTable } from './components/SortingTable';

function App() {
	const [inputs, setInputs] = useState({});
	const [cars, setCars] = useState( [] )
	const [value, setValue] = useState( {} ); // integer state

	const handleChange = (event) => {
		const value = event.target.value;
    	setInputs( values => ({...values, [event.target.name]: value}) )
    	console.log(inputs);
    	console.log(inputs.marca);
    	console.log(inputs.modelo);
	};

	 async function useGetData() {
		try {

			const response = await axios.get(`/API/listado/${inputs.marca}/${inputs.modelo}`)
			const data = await response.data;
			await setCars(data);
			return
		} catch (e) {
			console.log(e)
		};
	};

 	return (
		<div className="App">
			<header className="App-header">
				<h1>ML app - Análisis de precios</h1>
			</header>

			<body>
				<div>
					<label>Ingresar Marca: 
					<input type="text" name='marca' value={inputs.marca} onChange={handleChange} />
					</label>
					<label> Ingresar Modelo: 
                	<input type="text" name='modelo' value={inputs.modelo} onChange={handleChange} />
                	</label>
				</div>
				<button onClick={useGetData}> Consultar </button>
				<div>
					<SortingTable data={cars} />		
				</div>
			</body>

		</div>
	);
}


export default App;
