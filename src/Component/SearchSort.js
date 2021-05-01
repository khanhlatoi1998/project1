import {useState ,useEffect } from 'react' ;
import {DataShop} from './DataShop.js' ;

const SearchSort = (props) => {
	
	const [opencloseSort , setopencloseSort] = useState(false) ; 
	
	const openSort = () => {
		setopencloseSort(true) ; 
	}
	
	const closeSort = () => {
		setopencloseSort(false) ; 
	}
	
	const [check , setcheck] = useState(0) ; 
	
	const hightolow = () => {
		var cout = 0 ; 
		for(var i = 0 ; i < DataShop.length - 1  ; i++) {
			for(var j = i + 1 ; j < DataShop.length ; j++) {
				if(DataShop[i].price < DataShop[j].price ) {
					cout = DataShop[i] ; 
					DataShop[i] = DataShop[j] ; 
					DataShop[j] = cout ; 
				}
			}
		} 
		setcheck(1) ;
		props.Sort(DataShop) ; 
	}
	const lowtohigh = () => {
		var cout = 0 ; 
		for(var i = 0 ; i < DataShop.length - 1  ; i++) {
			for(var j = i + 1 ; j < DataShop.length ; j++) {
				if(DataShop[i].price > DataShop[j].price ) {
					cout = DataShop[i] ; 
					DataShop[i] = DataShop[j] ; 
					DataShop[j] = cout ; 
				}
			}
		} 
		setcheck(2) ;
		props.Sort(DataShop) ; 
	}
	
	const onChangeInputSearch = (event) => {
		var target = event.target ; 
		var value = target.value ; 
		var search = [] ; 
		for( var i = 0 ; i < DataShop.length ; i++ )
			{	
					if(value === DataShop[i].name.slice(0 , value.length)) 
						{
							search.push(DataShop[i]) ; 
							props.Search(search) ; 	
						}
			}
		 
	}
	
	return (
		<div className="SearchSort">
			<div className="block_SearchSort" >
				<div className="container_SearchSort" >
					<div className="search" >
						<input 
							placeholder="Tim kiem..."
							name="onChangeInputSearch"
							onChange={(event) => onChangeInputSearch(event)}
						/>
						<span className="fas fa-search"></span>
					</div>
					<div className="sort"  > 
						<p onClick={openSort} >Sort<span className="fas fa-angle-down" ></span></p>
						<div className="block_sort" style={opencloseSort === true ? {height : "90px" , transition : "0.5s"} : {display : "none"}}>
							<span onClick={closeSort} className="fa fa-times-circle text-center" ></span>
							<p onClick={hightolow} > 
								<i className="far fa-check-circle" style={check === 1 ? {color: "#002bff" } : {color : "white"}}></i> Price high to low
							</p>
							<p onClick={lowtohigh}> 
								<i className="far fa-check-circle" style={check === 2 ? {color: "#002bff" } : {color : "white"}}></i> Price low to high 
							</p>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	) ; 
}

export default SearchSort ; 