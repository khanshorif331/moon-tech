import React, { useEffect } from 'react'

const PRODUCT__CONTEXT = createContext()

const ProductProvider = ({ children }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('https://moontech-server.vercel.app/')
			.then(res => res.json())
			.then(data => setData(data.data))
	}, [])

	const value = {
		data,
	}
	return <PRODUCT__CONTEXT provider={value}>{children}</PRODUCT__CONTEXT>
}

export default ProductProvider
