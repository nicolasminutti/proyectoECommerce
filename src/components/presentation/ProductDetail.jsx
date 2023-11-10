import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const ProductDetail = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.category}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Valoración: {product.rating.rate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Available Quantity: {product.rating.count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;