import React, { useState, useEffect } from 'react';
import OutlinedCard from './OutlinedCard';

import "./SearchBar.css";

import Axios from 'axios';
import { Grid } from '@mui/material';

export default function Cards() {

    const [cards, setCards] = useState([]);
    

    const getCards = () => {
        Axios.get('http://localhost:3002/cards')
            .then(res => {
                let arr = res.data;
                setCards(arr);
                // console.log(arr);
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getCards();
        
    }, []);

    return (
        <div>
            <Grid container spacing={0} alignItems="center"
                justifyContent="center" style={{ gap: 15 }}>
                {

                    cards.map((card, i) => {
                        // console.log(card.venueName)
                        return < OutlinedCard key={i} venueName={card.venueName} eventName={card.eventName} description={card.description} />;

                    })
                }
            </Grid>
        </div>
    );
}
