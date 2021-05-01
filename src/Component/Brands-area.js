import {DataBrandsarea} from './DataBrandsArea.js' ; 
import {useState} from 'react' ; 

const BrandsArea = () => {
	
	var width_move_brands = window.innerWidth ; 
	
	const [moveBrands , setmoveBrands] = useState(0) ; 

	const prev_Brands = () => {
		if(moveBrands > 0) {
			setmoveBrands(moveBrands - 16.6) ; 
		}
		else { width_move_brands <= 320 ? setmoveBrands(16.6*5) : setmoveBrands(16.6*2) ; }
	} ; 
	
	const next_Brands = () => {
		if(width_move_brands <= 320 ? moveBrands < 16.6*5 : moveBrands < 16.6*2) {
			setmoveBrands(moveBrands + 16.6) ; 
		}
		else { setmoveBrands(0) ; }
	
	} ;
	
	return ( 
		<div className="Brands-area" >
			<div className="container-brands-area" > 
				<div className="maincontent_btn" >
					<button onClick={prev_Brands} > prev </button>
					<button onClick={next_Brands} > next </button>
				</div>
				<div className="content-brands-area"  style={{transition : "0.5s" , transform : `translate(-${moveBrands}% , 0)`}}> 
					{DataBrandsarea.map((item , index) => {
						return (
							<div key={index} className="single-img">
								<img src={item.img} alt="" />
							</div>
						
						)
					})}
				</div>
			</div>
		</div>
	) ; 
} ; 

export default BrandsArea ; 