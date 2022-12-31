import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCartFill } from 'react-icons/bs'
import { IoIosListBox } from 'react-icons/io'
import { useProducts } from '../context/ProductProvider'

const Navbar = () => {
	const {
		state: { cart },
	} = useProducts()
	return (
		<nav className="h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5">
			<ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900">
				<h1 className="flex-1">Moon Tech</h1>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/top-rated">Top Rated</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li title="Wishlist" className="bg-indigo-500 p-2 rounded-full">
					<Link to="/">
						<IoIosListBox className="text-white" />
					</Link>
				</li>
				<li title="cart" className="bg-indigo-500 p-2 rounded-full">
					{/* border border-red-400  */}
					<p className="grid place-items-center absolute top-3 ml-3 bg-red-600 text-white rounded-full p-1 text-xs w-6 h-6">
						{cart.length}
					</p>
					<Link to="/cart">
						<BsFillCartFill className="text-white " />
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
