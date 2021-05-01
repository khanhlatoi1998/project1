import  {DataSlider} from './DataSlider' ; 
import {useState ,useEffect , useRef} from 'react' ;	
import { BrowserRouter as Router , Route , NavLink} from 'react-router-dom' ;

const Slider = (props) => {
	
	const height_slider = window.innerWidth ; 
	
	const [count , setcount] = useState(0) ;
	const length = DataSlider.length ;  
	
	const nextBtn = () => {
		setcount(count === length - 1 ? 0 : count + 1 ) ;
		console.log(count) ;  
	} ;
	const prevBtn = () => {
		setcount(count === 0 ? length - 1 : count - 1 ) ; 
	} ;
	
	let id ;
	const clear = () => {
		clearTimeout(id) ; 
	}
	
	useEffect(() => { 
		id = setTimeout(nextBtn , 3000) ; /*+2 useEffect chay nhieu lan thì ham nextBtn duoc render nhieu lan , co the khong hien thi nhung van chay ngam*/
		return clear ; /*+3 tra ve gia tri  cho useEffect de clear ham duoc render */
	} , [count]) ; /*+1 useEffect chay nhieu lan khi count thay doi , luc nay se render ra nhieu lan*/
	
	return (
		<div className="Slider"  > 
			<div className="top-slider" style={height_slider > 540 ? {height : `${height_slider/4-2}px`} : {height : `${height_slider/4+11}px`}}>
				<button  onClick={prevBtn} className="controlSider" id="btnLeft" type="button" >
					<span className="fas fa-chevron-circle-left" id="chevron-left" > </span>
				</button>
				<div className="block-slide" >	
					<ul className="block-img" >
						{DataSlider.map((item , index) => {
							return (	 
									<li key={index} className={index === count ? "slide-active" : "slide"} >
										{ index === count &&
										( <>
										<img src={item.img} atl=""/>
										<div className="caption-img">
											<h2 className="caption title">
												{item.name} <span className="content-green"> <strong> {item.title}</strong></span>
											</h2>
											<h4 className="Caption Subtitle">{item.subtitle}</h4>
											<NavLink className="Caption button-radius" to="/shop"><span className="fas fa-chevron-circle-right fa-lg" ></span><p>Shop now</p></NavLink>
										</div> </>)}
									</li> 
							)
						})} 
					</ul >
				</div>
				<button onClick={nextBtn} className="controlSider"  id={"btnRight"} type="button" >
					<span className="fas fa-chevron-circle-right" id="chevron-right"> </span>
				</button>
			</div>
			<div className="bxslider" >
				 <span onClick={() => setcount(0)} className="fas fa-circle " id={count===0 ? "green" : "gray"}></span>
				 <span onClick={() => setcount(1)}className="fas fa-circle " id={count===1 ? "green" : "gray"}></span>
				 <span onClick={() => setcount(2)}className="fas fa-circle " id={count===2 ? "green" : "gray"}></span>
				 <span onClick={() => setcount(3)}className="fas fa-circle " id={count===3 ? "green" : "gray"}></span>
			</div>
		</div>	
	) ; 
} ; 

export default Slider ; 