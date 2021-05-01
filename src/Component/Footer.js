const Footer = () => {
	return (
		<div className="footer">
			<div className="top_footer" > 
				<div className="column_footer" >
					<h2 >u<span  style={{color : "#ee5057"}} >Stora</span> </h2>
					<p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at? </p>
					<div className="icon_column_footer" > 
						<a href="#" ><i className="fab fa-facebook-f"></i></a>
						<a href="#" ><i className="fab fa-twitter"></i></a>
						<a href="#" ><i className="fab fa-youtube"></i></a>
						<a href="#" ><i className="fab fa-linkedin"></i></a>
					</div>
				</div> 
				<div className="column_footer" >
					<h2> <span className="title_column_footer" > User Navigation </span> </h2>
					<div className="contentt_colomn_footer" >
						<a href="#" className="link_footer" > My account </a>
						<p>-----------------------</p>
						<a href="#" className="link_footer" > Oder history  </a>
						<p>-----------------------</p>
						<a href="#" className="link_footer" > Wishlist </a>
						<p>-----------------------</p>
						<a href="#" className="link_footer" > Vendor contact</a>
						<p>-----------------------</p>
						<a href="#" className="link_footer" > Front page </a>
						<p>-----------------------</p>
					</div>
				</div>
				<div className="column_footer" >
					<h2><span className="title_column_footer" >User Navigation</span> </h2>
					<div className="contentt_colomn_footer" >
						<a href="#" className="link_footer" > My account </a>
						<p>-----------------------</p>
						<a href="#" className="link_footer" > Oder history  </a>
						<p>-----------------------</p>
						<a href="#" className="link_footer" > Wishlist </a>
						<p>-----------------------</p>
						<a href="#" className="link_footer" > Vendor contact</a>
						<p>-----------------------</p>
						<a href="#" className="link_footer" > Front page </a>
						<p>-----------------------</p>
					</div>
				</div>
				<div className="column_footer" >
					<h2><span className="title_column_footer" >Newsletter</span></h2>
					<p > Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox! </p>
					<input className="input_footer"placeholder="Type your email" /> 
					<div className="div_subscribe">	<a href="#" className="subcribe">SUBSCRIBE</a> </div>
				</div>
			</div>
			<div className="bottom_footer" > 
				<div className="container_bottom_footer" >
					<p >© 2015 uCommerce. All Rights Reserved.</p>
					<div className="icon_bottom_footer" > 
						<i className="fab fa-cc-discover"></i>
						<i className="fab fa-cc-mastercard"></i>
						<i className="fab fa-cc-paypal"></i>
						<i className="fab fa-cc-visa"></i>
					</div>
				</div>
			</div>
		</div>

	) ; 
} ; 

export default Footer ; 