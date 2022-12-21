import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import "./Carousel.css";
import images from './Images.js'

export default function Carousel() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div>
            <motion.div ref={carousel} className='carousel'>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel' initial="hidden" animate="visible">
                    {images.map((image) => {
                        return (
                            <motion.div className='item' key={image} initial="hidden" animate="visible">
                                <img src={image} alt="" />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
}
