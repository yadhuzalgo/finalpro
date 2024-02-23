import { CircularProgress, Container, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Buffer } from 'buffer';

const Moviedetails = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3005/view")
            .then(response => {
                setMovies(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching movie data:', err);
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography variant="h6" color="error">Error: {error.message}</Typography>
            </div>
        );
    }

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom style={{ margin: '20px 0' }}>CHILLFLIX</Typography>
            <Grid container spacing={3}>
                {movies.map((movie, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', height: '100%' }}>
                        {movie.image1 && (
                                <img src={`data:image/jpeg;base64,${Buffer.from(movie.image1.data).toString('base64')}`} style={{ marginTop: '20px', maxWidth: '100%' }} alt="Movie" />
                            )}
                            <Typography variant="subtitle1" gutterBottom><strong>{movie.MovieName}</strong></Typography>
                            <Typography variant="body2" gutterBottom><strong>Language:</strong> {movie.Language}</Typography>
                            <Typography variant="body2" gutterBottom><strong>Genre:</strong> {movie.Genre}</Typography>
                            <Typography variant="body2" gutterBottom><strong>Description:</strong>{movie.Description}</Typography>

                            
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Moviedetails;
