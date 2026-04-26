import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../app/models/product";
import { Grid2 } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { TableContainer } from "@mui/material";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";

export default function ProductDetails() {

  const {id} = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://localhost:5001/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <Typography variant="h3">Loading...</Typography>;

  const productDetails = [
    { label: 'Name', value: product.name },
    { label: 'Description', value: product.description },
    { label: 'Type', value: product.type },
    { label: 'Brand', value: product.brand },
    { label: 'Quantity in Stock', value: product.quantityInStock }
  ];

  return (
    <Grid2 container spacing={6} maxWidth="lg" sx={{ mx: 'auto' }}>
      <Grid2 item size={6}>
        <img src={product?.pictureUrl} alt={product?.name} style={{ width: '100%' }} />
      </Grid2>
      <Grid2 item size={6}>
        <Typography variant="h3">{product?.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">${(product?.price / 100).toFixed(2)}</Typography>
        <TableContainer>
          <Table sx={{
            '& td': { fontSize: '1rem' }
          }}>
            <TableBody>
                {productDetails.map(( detail, index ) => (
              <TableRow key={index}>
                <TableCell sx={{fontWeight: 'bold'}}>{detail.label}</TableCell>
                <TableCell>{detail.value}</TableCell>
              </TableRow>  
                ))}
            </TableBody>
          </Table>
        </TableContainer>  
        <Grid2 container spacing={2} marginTop={3}>
          <Grid2 item size={6}>
            <TextField variant="outlined" type="number" label="Quantity" defaultValue="1" fullWidth />
          </Grid2>
          <Grid2 item size={6}>
            <Button sx={{ height: '55px'}} color="primary" size="large" variant="contained" fullWidth>
              Add to Cart
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}