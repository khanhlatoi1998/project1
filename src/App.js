import Header from './Component/Header.js' ;
import Content from './Component/Content.js' ; 
import Footer from './Component/Footer.js' ;
import Slider from './Component/Slider.js' ;
import MainMenu from './Component/MainMenu.js' ; 
import Promo from './Component/Promo.js' ; 
import Branding from './Component/Branding.js' ; 
import MainContent from './Component/MainContent.js' ; 
import BrandsArea from './Component/Brands-area.js' ; 
import ProductWidget from './Component/ProductWidget.js' ;
import ContentShopingCart from './Component/ContentShopingCart.js' ; 
import Login from './Component/Login.js' ; 
import Logout from './Component/Logout.js' ;  
import {useState } from 'react' ;
import { BrowserRouter as Router , Route , NavLink} from 'react-router-dom' ; /*as de doi ten */
import PageCart from './Component/PageCart.js' ; 
import ContentShop from './Component/ContentShop.js' ; 


import './App.scss';

function App() { 



  return (
	<Router >
		<div className="App"> 
				
				<Route path="/"  component={Header} />
				<Route path="/"  component={Branding} />
				<Route path="/" component={MainMenu} />
				<Route path="/" exact component={Slider} />
				<Route path="/" exact component={Promo} />
				<Route path="/shop" exact component={ContentShop} />
				<Route path="/cart" exact component={ContentShopingCart} />
				<Route path="/" exact component={MainContent } />
				<Route path="/" exact component={BrandsArea} />
				<Route path="/" exact component={ProductWidget} />
				<Route path="/login" exact component={Login} />
				<Route path="/signup" exact component={Logout} />
				<Route path="/"  component={Footer} />
				<Route path="/cart" exact component={PageCart} />
				
		</div>
	</Router>
  );
}

export default App;
