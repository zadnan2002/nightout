import { Grid, Card, CardContent, Typography, Divider } from '@mui/material';
import { React, useState, useEffect } from 'react';
import AgeSlider from './AgeSlider';
import CityBox from './CityBox';
import CountryBox from './CountryBox';
import FilterButton from './FilterButton';
import GenderBox from './GenderBox';
import GenreBox from './GenreBox';
import PerformerBox from './PerformerBox';
import PriceRangeBoxes from './PriceRangeBoxes';
import SearchBar from './SearchBar';
import VenueBox from './VenueBox';
import OutlinedCard from './OutlinedCard';

import Axios from 'axios';
import ResetFilter from './ResetFilter';

export default function FilterBox() {

    const [countries, setCountries] = useState([])
    const getCountries = () => {
        Axios.get('http://localhost:3002/country')
            .then(res => {
                let arr = res.data;
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].country;
                }
                setCountries(arr);
                // console.log(arr);
            }).catch(err => {
                console.log(err);
            })
    }
    const [cities, setCities] = useState([])
    const getCities = () => {
        Axios.get('http://localhost:3002/city')
            .then(res => {
                let arr = res.data;
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].city;
                }
                setCities(arr);
                // console.log(arr);
            }).catch(err => {
                console.log(err);
            })
    }
    const [venues, setVenues] = useState([])
    const getVenues = () => {
        Axios.get('http://localhost:3002/venue')
            .then(res => {
                let arr = res.data;
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].name;
                }
                setVenues(arr);
                // console.log(arr);
            }).catch(err => {
                console.log(err);
            })
    }

    const [genres, setGenres] = useState([])
    const getGenres = () => {
        Axios.get('http://localhost:3002/genre')
            .then(res => {
                let arr = res.data;
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].eventRequestType;
                }
                setGenres(arr);
                // console.log(arr);
            }).catch(err => {
                console.log(err);
            })
    }

    const [performers, setPerformers] = useState([])
    const getPerformers = () => {
        Axios.get('http://localhost:3002/performer')
            .then(res => {
                let arr = res.data;
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].performer;
                }
                setPerformers(arr);
                // console.log(arr);
            }).catch(err => {
                console.log(err);
            })
    }

    const [cards, setCards] = useState([]);

    const getCardsInitial = () => {
        Axios.get('http://localhost:3002/cardsAll')
            .then(res => {
                let arr = res.data;
                setCards(arr);
                // console.log(arr);
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getCountries();
        getCities();
        getVenues();
        getGenres();
        getPerformers();
        getCardsInitial();
    }, []);

    const [country, setCountry] = useState('Lebanon');
    const [city, setCity] = useState('');
    const [venue, setVenue] = useState('');
    const [genre, setGenre] = useState('');
    const [performer, setPerformer] = useState('');
    const [age, setAge] = useState(18);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');


    const handleFilter = (e) => {
        e.preventDefault();

        var filterResult = "SELECT name, eventRequestName, descriptionRequest, ticketPrice, city, ageRestrictionRequest FROM venue V, event_request E WHERE V.username=E.venueUsername AND statusRequest = 1 AND country = '" + country + "' "
        if (city.length !== 0) {
            filterResult += "AND city = '" + city + "' ";
        }
        if (venue.length !== 0) {
            filterResult += "AND name = '" + venue + "' ";
        }
        if (genre.length !== 0) {
            filterResult += "AND eventRequestType = '" + genre + "' ";
        }
        if (performer.length !== 0) {
            filterResult += "AND performer = '" + performer + "' ";
        }
        if (age.length !== 0) {
            filterResult += "AND ageRestrictionRequest <= " + age + " ";
        }
        if (minPrice.length !== 0) {
            filterResult += "AND ticketPrice >= " + minPrice + " ";
        }
        if (maxPrice.length !== 0) {
            filterResult += "AND ticketPrice <= " + maxPrice + " ";
        }
        filterResult += ";"

        Axios.post('http://localhost:3002/cards', {

            filterResult: filterResult

        }).then(res => {
            let arr = res.data;
            setCards(arr);
            // console.log(arr);
        }).catch(err => {
            console.log(err);
        })
        // console.log(filterResult);
    }

    const resetFilter = () => {
        setCountry("Lebanon");
        setCity("");
        setAge(18);
        setGenre("");
        setPerformer("");
        setVenue("");
        setMinPrice("");
        setMaxPrice("");
        getCardsInitial();
    }

    return (
        <div style={{ background: "black" }}>
            <div style={{ background: "black" }} ><Grid container spacing={0}>-</Grid></div>
            <Divider style={{ background: "black" }} />
                <CardContent>
                <Card container alignItems="center"
                    justifyContent="center" sx={{ maxHeight: 500, borderRadius: '50px' }} style={{ background: "radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)", border: "30px solid black" }}>
                    <CardContent >
                    <Typography fontSize={40} variant="body1" textAlign="center">
                            NightOut Event Filter
                        </Typography>
                        <br />
                        <Grid container spacing={1} alignItems="center"
                            justifyContent="center">
                        <Grid item>
                            <CountryBox countries={countries} value={country} changeCountry={(e) => setCountry(e.target.value)} />
                       
                        </Grid>
                        <Grid item>
                            <CityBox cities={cities} value={city} changeCity={(e) => setCity(e.target.value)} />
                          
                        </Grid>
                        <Grid item>
                            <VenueBox venues={venues} value={venue} changeVenue={(e) => setVenue(e.target.value)} />
                            
                        </Grid>
                        <Grid item>
                            <GenreBox genres={genres} value={genre} changeGenre={(e) => setGenre(e.target.value)} />
                           
                        </Grid>
                        <Grid item>
                            <PerformerBox performers={performers} value={performer} changePerformer={(e) => setPerformer(e.target.value)} />
                            
                        </Grid>
                        <Grid item>
                            <AgeSlider value={age}
                                handleBlur={() => {
                                    if (age < 0) {
                                        setAge(0);
                                    } else if (age > 100) {
                                        setAge(100);
                                    }
                                }}
                                handleInputChange={(e) => {
                                    setAge(e.target.value === '' ? '' : Number(e.target.value));
                                }}
                                handleSliderChange={(e, newValue) => {
                                    setAge(newValue);
                                }} />
                        </Grid>
                        <Grid item>
                            <PriceRangeBoxes />
                        </Grid>
                        <Grid item>
                            <FilterButton handleFilter={handleFilter} />
                        </Grid>
                        <Grid item>
                            <ResetFilter resetFilter={resetFilter} />
                        </Grid>
                    </Grid>
                    </CardContent>
                    </Card>
                </CardContent>
            <br />
            <br />
            <div style={{ background: "black" }} >
                <Grid container spacing={0} alignItems="center"
                    justifyContent="center" textAlign="left" style={{ gap: 0 }} >
                    {
                       
                        cards.map((card, i) => {
                            // console.log(card.name)
                       
                            return <OutlinedCard key={i} timeRequest={card.timeRequest} dateRequest={card.dateRequest} ticketRequestCount={card.ticketRequestCount} requestID={card.requestID}  venueUsername={card.venueUsername} name={card.name} eventRequestName={card.eventRequestName} descriptionRequest={card.descriptionRequest} ticketPrice={card.ticketPrice} ageRestrictionRequest = {card.ageRestrictionRequest} city={card.city}/>;
                        })
                    }
                </Grid>
            </div>
            <div style={{ background: "black" }} ><Grid container spacing={0}>-</Grid></div>
            <div style={{ background: "black" }} ><Grid container spacing={0}>-</Grid></div>
            <div style={{ background: "black" }} ><Grid container spacing={0}>-</Grid></div>
        </div>
    )
}