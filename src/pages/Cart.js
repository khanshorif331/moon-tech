import React from 'react'
import ProductCard from '../components/ProductCard'
import { useProducts } from '../context/ProductProvider'

const Cart = () => {
	const {
		state: { loading, error, cart },
	} = useProducts()

	let content

	if (loading) {
		content = <div>Loading...</div>
	}

	if (error) {
		content = <div>Something went wrong</div>
	}

	if (!loading && !error && cart.length === 0) {
		content = <p>Nothing to show.Product list is empty.</p>
	}

	if (!loading && !error && cart.length) {
		content = cart.map(product => {
			return <ProductCard product={product} key={product._id}></ProductCard>
		})
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
			{content}
		</div>
	)
}

export default Cart
