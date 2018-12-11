import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

class FoodItem extends React.Component{
	componentDidUpdate(){
		console.log("TEST");
		var element = document.getElementById("foodItem");
		console.log(element.classList);
		element.classList.add("fade");
	}
	render(){
		const food = this.props.food;
		return(
			<div className='foodItem' id='foodItem'>
				<div className = 'imgContainer'>
					<img src = {require("./images/"+food.image)}/>
				</div>
				<div className = 'lbl'>{food.label}</div>
				<div className = 'des'>{food.description}</div>
			</div>
			);
	}
}


class Navigation extends React.Component{
	render(){
		return(
			<li className={""+this.props.classes} onClick={this.props.onClick}>
		    </li>
		)
	}
}

class Comparison extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      navPos: 0,
	    };
	}

    handleNavClick(i){
	    this.setState({
	      navPos: i,
	  	});
	  	// var element = document.getElementsByClassName("foodItem");
  		// element.classList.remove("fade");
	  }
	renderNavDot(i) {
		const classes = (i == this.state.navPos) ? "dot name-active" : "dot";
	    return (<Navigation 
		    onClick={()=>this.handleNavClick(i)}
		    classes = {classes}
	    />
    );
  }

	render() {
		const navPos = this.state.navPos;
		if(navPos > 0){
			const usRows = <FoodItem
							food = {this.props.foods[(navPos-1)*2]}
						/>;
			const chinaRows = <FoodItem
								food = {this.props.foods[(navPos-1)*2+1]}
							   />;
			return(
				<div className='body'>
					<div className="sidebar">
			            <nav>
			                <ul>
			                    {this.renderNavDot(0)}
			                    {this.renderNavDot(1)}
			                    {this.renderNavDot(2)}
			                    {this.renderNavDot(3)}
			                    {this.renderNavDot(4)}
			                    {this.renderNavDot(5)}
			                    {this.renderNavDot(6)}
			                    {this.renderNavDot(7)}
			                </ul>
			            </nav>
			        </div>
					<span className = 'US'>
						{usRows}
					</span>
					<span className = 'China'>
						{chinaRows}
					</span>
				</div>
			);
		}else{
			return(
				<div className='body'>
					<div className="sidebar">
			            <nav>
			                <ul>
			                    {this.renderNavDot(0)}
			                    {this.renderNavDot(1)}
			                    {this.renderNavDot(2)}
			                    {this.renderNavDot(3)}
			                    {this.renderNavDot(4)}
			                    {this.renderNavDot(5)}
			                    {this.renderNavDot(6)}
			                    {this.renderNavDot(7)}
			                </ul>
			            </nav>
			        </div>
					<div className = 'titlePage'>
						<div className='rightDecal'>
							<img id='right' src = {require("./images/right.png")}/>
						</div>
						<div className='title'>
							<img id='title' src = {require("./images/text.png")}/>
						</div>
						<div className='leftDecal'>
							<img id='left' src = {require("./images/left.png")}/>
						</div>
					</div>
				</div>
			);
		}
	}
}

const FOODS = [
	{fromUS: true, image: "coffee.png", label: 'Coffee', description: 'Surveys from 2018 show that 64% of Americans drink coffee, but it only gained popularity among British colonists as a result of the Boston Tea Party in 1773.'},
	{fromUS: false, image: "tea.png", label: 'Tea', description: 'Tea originated in Southwest China, where it was used for medicinal purposes. It became popular as a recreational drink during the Chinese Tang Dynasty.'},
	{fromUS: true, image: "waffle.png", label: 'Waffles', description: 'Dutch colonists brought Waffle making to America in the early 1600s but the word "waffle" did not appear until the 18th century.'},
	{fromUS: false, image: "crepe.png", label: 'Jianbing', description: 'Jianbing is native to Northeast China and is one of the most popular street breakfasts in China. It is similar to crepes and literally translates to "fried pancake".'},
	{fromUS: true, image: "burger.png", label: 'Hamburger', description: 'The word "hamburger" was derived from German Hamburg steaks and has since become a well-known symbol of American cuisine. Americans consume about 13 billion hamburgers each year.'},
	{fromUS: false, image: "dumpling.png", label: 'Dumplings', description: 'Legend has it that Chinese stuffed dumplings were first invented by Zhang Zhongjian, during the Han Dynasty. He cooked them with healing herbs in an effort to relieve the people of his village from frostbite.'},
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
