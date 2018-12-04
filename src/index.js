import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

class FoodItem extends React.Component{
	render(){
		const food = this.props.food;
		return(
			<div className='foodItem'>
				<div className = 'imgContainer'>
					<img src = {require("./images/"+food.image)}/>
				</div>
				<div className = 'lbl'>{food.label}</div>
				<div className = 'des'>{food.description}</div>
			</div>
			);
	}
}

class Comparison extends React.Component{
	render() {
		const usRows = [];
		const chinaRows = [];
		this.props.foods.forEach((food) => {
			if(food.fromUS){
				usRows.push(
					<FoodItem
					food = {food}/>
					);
			} else{
				chinaRows.push(
					<FoodItem
					food = {food}/>
					);
			}
		})
		return(
			<div className='body'>
				<span className = 'US'>
					{usRows}
				</span>
				<span className = 'China'>
					{chinaRows}
				</span>
			</div>
		);
	}
}

const FOODS = [
	{fromUS: true, image: "coffee.png", label: 'Coffee', description: 'This is coffee'},
	{fromUS: false, image: "tea.png", label: 'Tea', description: 'This is tea'},
	{fromUS: true, image: "waffle.png", label: 'Waffles', description: 'These are waffles'},
	{fromUS: false, image: "crepe.png", label: 'Crepe', description: 'This is a crepe'},
	{fromUS: true, image: "burger.png", label: 'Burger', description: 'This is a burger'},
	{fromUS: false, image: "dumpling.png", label: 'Dumplings', description: 'These are dumplings'},
	{fromUS: true, image: "salad.png", label: 'Salad', description: 'This is a salad'},
	{fromUS: false, image: "noodles.png", label: 'Hot Dry Noodles', description: 'These are hot dry noodles'},
	{fromUS: true, image: "pizza.png", label: 'Pizza', description: 'This is pizza'},
	{fromUS: false, image: "duck.png", label: 'Beijing Duck', description: 'This is Beijing duck'},
	{fromUS: true, image: "steak.png", label: 'Steak', description: 'This is steak'},
	{fromUS: false, image: "hotpot.png", label: 'Hotpot', description: 'This is hotpot'},
	{fromUS: true, image: "brownie.png", label: 'Brownies', description: 'These are brownies'},
	{fromUS: false, image: "ricedumpling.png", label: 'Rice Dumpling', description: 'This is a rice dumpling'}
];

ReactDOM.render(
	<Comparison foods = {FOODS} />,
	document.getElementById('root')
	);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
