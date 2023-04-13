import React, { useState, useEffect } from 'react';

function Collage() {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      const importImages = async () => {
        const images = [];
        for (let i = 1; i <= 80; i++) {
          const image = await import(`./images/${i}.jpeg`);
          images.push(image.default);
        }
        setImages(images);
      };
      importImages();
    }, []);
  
    return (
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    );
  }
export default Collage