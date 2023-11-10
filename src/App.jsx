import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import Navbar from './components/containers/Navbar';
import Footer from './components/containers/Footer';
import ProductDetail from './components/presentation/ProductDetail';

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('https://fakestoreapi.com/products');
				// https://api.escuelajs.co/api/v1/products otro API para realizar pruebas, cambiar Product en ProductDetails.jsx
				const data = await response.json();
				if (data && data.length > 0) {
					setProducts(data);
				}
			} catch (error) {
				console.error('Error al recibir los productos:', error);
			}
		};
		fetchProducts();
	}, []);

	return (
		<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
			<Navbar />
			<Container>
				<Grid container sx={{ m: 2 }} spacing={3}>
					{products.map((product) => (
						<Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
							<ProductDetail product={product} />
						</Grid>
					))}
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}

export default App;