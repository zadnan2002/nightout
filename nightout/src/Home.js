import React from 'react';
import pic4 from "./modules/assets/pic4.jpg";

import Slider from "./modules/components/Slider";
import FilterBox from './modules/components/FilterBox';
import ProductCategories from './modules/components/ProductCategories';
import ProductHero from './modules/components/ProductHero';

import "./Home.css";
import ProductValues from './modules/components/ProductValues';
import Carousel from './modules/components/Carousel';
import AppFooter from './modules/components/AppFooter';

export default function Home() {

    const handleScroll = () => {
        const element = document.getElementById("filter");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div>
            <ProductHero handleScroll={handleScroll} />
            <Carousel />
            <div className='home'>
                <ProductValues />
                <Slider
                    imageSrc="https://freight.cargo.site/w/1620/q/94/i/2fa0cb263d8d91dc7c752994191114f4c3af11a7cd6f220bfb21022e3d34ad83/047A3481.jpg"
                    title={"Be an explorer."}
                    subtitle={
                        "Our platform offers the largest pool of active and upcoming events in Lebanon!"
                    }
                />
                <Slider
                    imageSrc={pic4}
                    title={"Memories for a lifetime."}
                    subtitle={"Your dream night is only a few clicks away."}
                    flipped={true}
                />
                {/* <SearchBar /> */}
                <ProductCategories />
                <div id="filter">
                    <FilterBox />
                </div>
                <br />
                <br />
                <AppFooter  handleScroll={handleScroll}/>
            </div>
        </div>
    )
}
