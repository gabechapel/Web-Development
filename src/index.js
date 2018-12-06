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
				<div className = 'titlePage'>
					<div className='rightDecal'>
						<img src = {require("./images/right.png")}/>
					</div>
					<div className='title'>
						<img src = {require("./images/text.png")}/>
					</div>
					<div className='leftDecal'>
						<img src = {require("./images/left.png")}/>
					</div>
				</div>
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
	{fromUS: true, image: "coffee.png", label: 'Coffee', description: 'Surveys from 2018 show that 64% of Americans drink coffee, but it only gained popularity among British colonists as a result of the Boston Tea Party in 1773.'},
	{fromUS: false, image: "tea.png", label: 'Tea', description: 'Tea originated in Southwest China, where it was used for medicinal purposes. It became popular as a recreational drink during the Chinese Tang dynasty.'},
	{fromUS: true, image: "waffle.png", label: 'Waffles', description: 'Dutch colonists brought Waffle making to America in the early 1600s but the word "waffle" did not appear until the 18th century.'},
	{fromUS: false, image: "crepe.png", label: 'Jianbing', description: 'Jianbing is native to Northeast China one of the most popular street breakfasts in China. It is similar to crepes and literally translates to "fried pancake".'},
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
