import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';

class Car {
	constructor(id, price) {
		this.id = id;
		this.price = price;
	}
}

class Interval {
	constructor(minMax, quantity) {
		this.minMax = minMax;
		this.quantity = quantity;
	}
}

export const HistogramChart = (props) => {

	let data = [];
	let sum = 0;
	let avg;
	let intervals = [];
	let increment = -0.95;
	let histogramData = [];
	try {
		for (let i=0; i < props.data.length; i++) {
			data[i] = new Car(props.data[i].index, props.data[i].price)
		};
	} catch (e) {
		console.log(e);
	}
	// Calculate average.
	try {
		for (let i=0; i < data.length; i++) {
			sum = sum + data[i].price;
		};
		console.log(sum);
		console.log(data.length);
		avg = Math.floor(sum / data.length);
		console.log(avg);
	} catch (e) {
		console.log(e);
	}
	// Calculates min/max of each interval (+-5%)
	try {
		for (let i=0; i < 19; i++) {
			intervals[i] = [Math.floor(avg+increment*avg), Math.floor(avg+(increment+0.1)*avg)];
			increment = increment + 0.1;
		}
		console.log(intervals);
	} catch (e) {
		console.log(e)
	}
	// Get how many cars fits in each interval
	try {
		for (let j=0; j < 19; j++) {
			let quantity = 0;
			let minMax = intervals[j][0].toString() + '/' + intervals[j][1].toString();
				for (let i=0; i < data.length; i++) {
					if ( (intervals[j][0] < data[i].price) && (data[i].price < intervals[j][1]) ) {
						quantity = quantity + 1;
					}
				}
			histogramData[j] = new Interval(minMax, quantity);
		}
	} catch (e){
		console.log(e)
	}

	if (sum) {
		return (
			<>
				<BarChart data={histogramData} width={500} height={300} margin={ {top:5, right:30, left:20, bottom:5} } >
				<CartesianGrid strokeDasharray="4 1 2" />
				<XAxis />
				<YAxis dataKey="quantity"/>
				<Tooltip />
				<Bar dataKey="quantity"/>
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
