import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container component="footer" maxWidth="xl" style={{ marginTop: 'auto' }}>
            <Typography variant="body2" color="textSecondary" align="center">
                © 2023 Nicolás Minutti - MyApp. TP3 - UTN Argentina Programa 4.0.
            </Typography>
        </Container>
    );
};

export default Footer;