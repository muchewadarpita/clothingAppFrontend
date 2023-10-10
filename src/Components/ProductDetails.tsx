import React, { useState } from 'react';
import { Card, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ProductDetailsProps {
  imageUrl: string;
  name: string;
  originalPrice: string;
  discountedPrice: string;
  ratings: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  imageUrl,
  name,
  originalPrice,
  discountedPrice,
  ratings,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <Card style={{ width: '239px', height: '450px', borderRadius: '4px', position: 'relative' }}>
        {isLiked ? (
          <IconButton
            onClick={toggleLike}
            style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1, color: 'red' }}
          >
            <FavoriteIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={toggleLike}
            style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}
          >
            <FavoriteBorderIcon />
          </IconButton>
        )}
        <img src={imageUrl} style={{ width: '239px', height: '325px' }} alt="Product" />
        <div style={{marginLeft:'5px'}}>
        <div style={{ width: '219px', marginTop: '10px', fontWeight: '400', fontSize: '20px' }}>
          {name}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'row' ,marginTop:'10px'}}>
          <div style={{ width: '71px',  fontSize: '20px', fontWeight: '300' }}>
            {`Rs. ${originalPrice}`}
          </div>
          <div style={{ width: '71px', fontSize: '20px', fontWeight: '600', color: '#6D84FF' }}>
            {`Rs. ${discountedPrice}`}
          </div>
        </div>
        <div>
          <img src={ratings} alt='ratings' style={{marginTop:'10px'}}/> <span>{`(210)`}</span>
        </div>
        </div>
      </Card>
    </>
  );
};

export default ProductDetails;
