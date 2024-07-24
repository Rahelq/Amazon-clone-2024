import React, { useContext } from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import {auth} from "../../Utility/firebase"


function Header() {
	const [{user,basket},dispatch]= useContext(DataContext)
	// console.log(basket)
	const totalItem = basket?.reduce((amount,item)=>{
		return item.amount + amount
	},0)
	return (
        <section className={classes.fixed}>
		<section>
			<div className={classes.header_container}>
				{/* logo section */}
				<div   className={classes.logo_container}>
					<Link to="/">
						<img
							src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
							alt="Amazon logo"
						/>
					</Link>
                    {/* delivery */}
					 <div className={classes.delivery}>
						<span>
							{/* icon */}
							<SlLocationPin />
						</span>    
						<div>
							<p>Deliver to</p>
							<span>Ethiopia</span>
						</div>
					</div>
				</div>
				{/* search */}
				<div className={classes.search}>
					<select name="" id="">
						<option value="">All</option>
					</select>
					<input type="text" placeholder="search Amazon" />
					{/* icon */}
					<BsSearch size={38} />
				</div>
                {/* other section */}
				<div className={classes.order_container}>
					<Link to="" className={classes.language}>
						<img
							src="https://image.shutterstock.com/image-vector/vector-image-american-flag-260nw-157626554.jpg"
							alt=""
						/>
						<select name="" id="">
							<option value="">EN</option>
						</select>
					
                        </Link>
					
					<Link to={!user && "/auth"}>
						<div>{user ? (
							<>
							<p>Hello, {user?.email?.split("@")[0]}</p>
							<span onClick={()=>auth.signOut()}>Sign Out</span>
							</>
						):(
							<>
							<p>Hello, Sign In</p>
							<span>Accounts & Lists</span>
							</>
							
						)}							
						</div>
						
					</Link>
					{/* orders */}
					<Link to="/orders">
						<p>Returns</p>
						<span>& Orders</span>
					</Link>
					{/* cart */}
					<Link to={"/cart"}   className={classes.cart}>
						{/* icon */}
						<BiCart size={35}/>
						<span>{totalItem}</span>
					</Link>
				</div>
			</div>
		</section>
        <LowerHeader />
        </section>
	);
};

export default Header;
