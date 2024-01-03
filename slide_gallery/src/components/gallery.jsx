import React, { useState } from 'react';
import '../styles/gallery/gallery.css'

const images = [
    'https://via.placeholder.com/800x400?text=1',
    'https://via.placeholder.com/800x400?text=2',
    'https://via.placeholder.com/800x400?text=3',
    'https://via.placeholder.com/800x400?text=4',
    'https://via.placeholder.com/800x400?text=5',
    'https://via.placeholder.com/800x400?text=6',
    'https://via.placeholder.com/800x400?text=7',
    'https://via.placeholder.com/800x400?text=8',
    'https://via.placeholder.com/800x400?text=9',
    'https://via.placeholder.com/800x400?text=10',
];

const Gallery = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='gallery'>
            <div className="image-container">
                <button className="nav-button" onClick={prevSlide}>
                    &lt;
                </button>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                <button className="nav-button" onClick={nextSlide}>
                    &gt;
                </button>
            </div>
            
        </div>
    )
}

export default Gallery
