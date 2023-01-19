import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

class Car {
	constructor(id, price) {
		this.id = id;
		this.price = price;
	}
}

export const SimpleBarCharts = (props) => {

	let data = [];

	try {
		for (let i=0; i < props.data.length; i++) {
			data[i] = new Car(props.data[i].index, props.data[i].price)
		};
	} catch (e) {
		console.log(e);
	}

	if (data[0]) {
		return (
			<>
				<BarChart data={data} width={500} height={300} margin={ {top:5, right:30, left:20, bottom:5} } >
				<CartesianGrid strokeDasharray="4 1 2" />
				<XAxis dataKey="id"/>
				<YAxis dataKey="price"/>
				<Tooltip />
				<Bar dataKey="price"/>
				</BarChart>
			</>
		)
	} else {
		return (
			<>
			</>
		)		
	}
};
