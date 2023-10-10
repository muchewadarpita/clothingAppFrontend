import React, { useState } from 'react'

import IconButton from '@mui/material/IconButton';

import zeviLogo from "../Assets/zeviLogo.svg"
import { Box, Grid, Paper, TextField } from '@mui/material';
import img1 from "../Assets/img1.svg";

import img2 from "../Assets/img2.svg";
import img3 from "../Assets/img3.svg";
import img4 from "../Assets/img4.svg";
import img5 from "../Assets/img5.svg";
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ProductDetails from './ProductDetails';
import p1img from '../Assets/Rectangle 10.svg'
const ProductList = () => {
  const handleSearch = () => {

  }

  const [accordionState, setAccordionState] = useState(false);
  const [accordionState1, setAccordionState1] = useState(false);
  const [accordionState2, setAccordionState2] = useState(false);
  const [items, setItems] = useState([
    { id: 1, label: 'Mango', checked: false },
    { id: 2, label: 'H&M', checked: false },
    { id: 3, label: 'Item 3', checked: false },
  ]);

  const [items1, setItems1] = useState([
    { id: 4, label: 'under 500', checked: false },
    { id: 5, label: '1000 to 3000', checked: false },
    { id: 6, label: 'Item 3', checked: false },
  ]);
  const [items2, setItems2] = useState([
    { id: 7, img: img5, checked: false },
    { id: 8, img: img4, checked: false },
    { id: 9, img: img3, checked: false },
    { id: 10, img: img2, checked: false },
    { id: 11, img: img1, checked: false },
  ]);
  var data = [
    {
      imageUrl: p1img,
      name: 'Product 1',
      originalPrice: '599',
      discountedPrice: '549',
      ratings: img5,
    },
    {
      imageUrl: p1img,
      name: 'Product 2',
      originalPrice: '699',
      discountedPrice: '599',
      ratings: img4,
    },
    {
      imageUrl: p1img,
      name: 'Product 3',
      originalPrice: '499',
      discountedPrice: '449',
      ratings: img3,
    },

    {
      imageUrl: p1img,
      name: 'Product 4',
      originalPrice: '499',
      discountedPrice: '449',
      ratings: img3,
    },
    {
      imageUrl: p1img,
      name: 'Product 5',
      originalPrice: '499',
      discountedPrice: '449',
      ratings: img3,
    },
    {
      imageUrl: p1img,
      name: 'Product 6',
      originalPrice: '499',
      discountedPrice: '449',
      ratings: img3,
    },
    // Add more products as needed
  ];
  

  
  const handleAccordionToggle = () => {
    setAccordionState(!accordionState);
  };
  const handleAccordionToggle1 = () => {
    setAccordionState1(!accordionState1);
  };
  const handleAccordionToggle2 = () => {
    setAccordionState2(!accordionState2);
  };

  const handleCheckboxChange = (itemId: number) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  return (
    <>
      <Box>
        <img
          src={zeviLogo}

          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            margin: '10px', // You can adjust the margin as needed
            width: '100px', // You can adjust the width as needed
            height: 'auto', // This ensures the aspect ratio is maintained
          }}
          alt="Zevi Logo"
        />

        <TextField
          placeholder="Search..."

          size="small"
          style={{
            backgroundColor: '#FFF',
            width: '628.37px',
            height: '57px',
            borderRadius: '20px',
            border: 'none ',
            marginTop: '20px',
            marginLeft: '30%',
            marginBottom: '20px'
          }}

          InputProps={{
            endAdornment: (
              <IconButton
                onClick={handleSearch}
                edge="end"
                style={{
                  border: 'none',
                  backgroundColor: 'transparent', // Set the background color to transparent
                  color: '#000', // Set the icon color
                  //   fontSize: '24px', // Adjust the icon size as needed
                }}
              >
                <SearchIcon />
              </IconButton>
            ),
            inputProps: {
              style: {
                //     backgroundColor: '#FFF',
                height: '57px',
                border: 'none',
                borderRadius: '20px',
                fontSize: '20px', // Adjust the input text size as needed
                // paddingLeft: '20px', // Adjust the left padding of the input text as needed
              },
            },
          }}
        />

      </Box>
      <Grid container spacing={0}>
        {/* 20% column */}
        <Grid item xs={3} sx={{ padding: '20px' }}>
          <div style={{ width: '281px', fontWeight: '400', lineHeight: '48.41px', fontSize: '40px', marginBottom: '30px' }}>Search Results</div>
          <div onClick={handleAccordionToggle} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px' }}>

            <div style={{ fontSize: '20px', fontWeight: '500' }}>Brand {"     "} </div>
            <div>{accordionState ? <ExpandLessIcon /> : <ExpandMoreIcon />}</div>
          </div>

          {accordionState && (
            <div>
              {items.map((item) => (
                <div key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  {item.label}
                </div>
              ))}
            </div>
          )}
          <div onClick={handleAccordionToggle1} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px' }}>

            <div style={{ fontSize: '20px', fontWeight: '500' }}>Price range {"     "} </div>
            <div>{accordionState1 ? <ExpandLessIcon /> : <ExpandMoreIcon />}</div>
          </div>
          {accordionState1 && (
            <div>
              {items1.map((item) => (
                <div key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  {item.label}
                </div>
              ))}
            </div>
          )}
          <div onClick={handleAccordionToggle2} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px' }}>

            <div style={{ fontSize: '20px', fontWeight: '500' }}>Ratings
              {"     "} </div>
            <div>{accordionState2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}</div>
          </div>

          {accordionState2 && (
            <div>
              {items2.map((item) => (
                <div key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <img src={item.img} />
                  {/* {item.label} */}
                </div>
              ))}
            </div>
          )}



        </Grid>
        {/* 80% column */}
        <Grid item xs={9} sx={{ marginTop: '60px', display: 'flex', flexDirection: 'row' }}>
          <Grid container spacing={2}>
            {data.map((product, index) => (
              <Grid item xs={3} key={index}>
                <ProductDetails
                  imageUrl={product.imageUrl}
                  name={product.name}
                  originalPrice={product.originalPrice}
                  discountedPrice={product.discountedPrice}
                  ratings={product.ratings}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ProductList