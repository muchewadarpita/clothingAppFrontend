/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import zeviLogo from "../Assets/zeviLogo.svg";
import { Box, Grid, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ProductDetails from './ProductDetails';
// import p1img from '../Assets/Rectangle 10.svg';
import p1 from "../Assets/Round_neck_cotton_Tee.svg"
import p2 from "../Assets/High_waist_trousers.svg"
import p3 from "../Assets/High_neck_pullover.svg"
import p4 from "../Assets/satin_jumpsuit.svg"
import p5 from "../Assets/Shirt_with_puffed_sleeves.svg"
import p6 from "../Assets/Linen_jumpsuit.svg"
import p7 from "../Assets/White_formal_suit.svg"
import p8 from "../Assets/Pattern_dresses.svg"
import p9 from "../Assets/Leather_shirt_dress.svg"
import p10 from "../Assets/white_top.svg"
import p11 from "../Assets/T_shirt_and_Shorts.svg"
import p12 from "../Assets/White_Curti.svg"


import img1 from "../Assets/img1.svg";
import img2 from "../Assets/img2.svg";
import img3 from "../Assets/img3.svg";
import img4 from "../Assets/img4.svg";
import img5 from "../Assets/img5.svg";
var imageArray = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
interface Brand {
  id: number;
  label: string;
  checked: boolean;
}

interface PriceRange {
  id: number;
  label: string;
  checked: boolean;
}

interface Rating {
  id: number;
  img: string;
  checked: boolean;
}

const ProductList: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([
    { id: 1, label: 'Mango', checked: false },
    { id: 2, label: 'H&M', checked: false },
  ]);

  const [priceRanges, setPriceRanges] = useState<PriceRange[]>([
    { id: 4, label: 'under 500', checked: false },
    { id: 5, label: '1000 to 3000', checked: false },
  ]);

  const [ratings, setRatings] = useState<Rating[]>([
    { id: 7, img: img5, checked: false },
    { id: 8, img: img4, checked: false },
    { id: 9, img: img3, checked: false },
    { id: 10, img: img2, checked: false },
    { id: 11, img: img1, checked: false },
  ]);
  var data = [
    {
      id: 1,
      imageUrl: p1,
      name: 'Round neck cotton Tee',
      original_price: '599',
      discount_price: '549',
      ratings: img5,
      brand:"Mango",
    },
    {
      id: 2,
      imageUrl: p2,
      name: 'High waist trousers',
      original_price: '699',
      discount_price: '599',
      ratings: img4,
      brand:"Mango",
    },
    {
      id: 3,
      imageUrl: p3,
      name: 'High neck pullover',
      original_price: '499',
      discount_price: '449',
      ratings: img3,
      brand:"Mango",
    },

    {
      id: 4,
      imageUrl: p4,
      name: 'satin jumpsuit',
      original_price: '499',
      discount_price: '449',
      ratings: img3,
      brand:"Mango",
    },
    {
      id: 5,
      imageUrl: p5,
      name: 'Shirt with puffed sleeves',
      original_price: '499',
      discount_price: '449',
      ratings: img3,
      brand:"Mango",
    },
    {
      id: 6,
      imageUrl: p6,
      name: 'Linen jumpsuit',
      original_price: '499',
      discount_price: '449',
      ratings: img3,
      brand:"Mango",
    },
    {
      id: 7,
      imageUrl: p7,
      name: 'White formal suit',
      original_price: '499',
      discount_price: '449',
      ratings: img3,
      brand:"Mango",
    },
    {
      id: 8,
      imageUrl: p8,
      name: 'Pattern dresses',
      original_price: '499',
      discount_price: '449',
      ratings: img3,
      brand:"H&M",
    },
    {
      id: 9,
      imageUrl: p9,
      name: 'Leather shirt dress',
      original_price: '499',
      discount_price: '449',
      ratings: img3,
      brand:"H&M",
    },
    {
      id: 10,
      imageUrl: p10,
      name: 'White Top',
      original_price: '499',
      discount_price: '449',
      ratings: img3,
      brand:"H&M",
    },
    {
      id: 11,
      imageUrl: p11,
      name: 'T-shirt and Shorts',
      original_price: '499',
      discount_price: '449',
      ratings: img3,
      brand:"H&M",
    },
    {
      id: 12,
      imageUrl: p12,
      name: 'White Curti',
      original_price: '499',
      discount_price: '449',
      ratings: img3,
      brand:"H&M",
    },

    // Add more products as needed
  ];
  var ratingArray = [img5, img4, img3, img2, img1];
  const [accordionState, setAccordionState] = useState(true);
  const [accordionState1, setAccordionState1] = useState(true);
  const [accordionState2, setAccordionState2] = useState(true);
  const [productListData, setProductListData] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [originalData, setOriginalData] = useState<any[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    setProductListData(originalData);
    filterProducts();

  }, [brands, priceRanges, ratings, searchValue]);

  const filterProducts = () => {
    let filteredProducts = data;

    if (searchValue) {
      const searchValueWithoutSpaces = searchValue.replace(/\s/g, ""); // Remove spaces from the search value
      filteredProducts = filteredProducts.filter(product => {
        const productNameWithoutSpaces = product.name.replace(/\s/g, ""); // Remove spaces from the product name
        return productNameWithoutSpaces.toLowerCase().includes(searchValueWithoutSpaces.toLowerCase());
      });
    }
    

    if (brands.some(brand => brand.checked)) {
      filteredProducts = filteredProducts.filter(product => {
        return brands.find(brand => brand.checked && brand.label === product.brand);
      });
    }

    // if (priceRanges.some(range => range.checked)) {
    //   filteredProducts = filteredProducts.filter(product => {
    //     return priceRanges.find(
    //       range => range.checked && range.label === 'under 500'
    //         ? parseFloat(product.discount_price) < 500
    //         : parseFloat(product.discount_price) >= 1000 && parseFloat(product.discount_price) <= 3000
    //     );
    //   });
    // }

    // if (ratings.some(rating => rating.checked)) {
    //   filteredProducts = filteredProducts.filter(product => {
    //     return ratings.find(rating => rating.checked && rating.id === product.ratings);
    //   });
    // }

    setProductListData(filteredProducts);
  };

  const handleSearch = () => {
    searchAPI();
    // console.log('Search Value:', searchValue);
  };

  useEffect(() => {
    listAPIcall();
  }, []);

  const listAPIcall = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/products');
      setProductListData(res?.data);
      setOriginalData(res?.data);
      console.log(res?.data);
    } catch (error) {
      console.log('error', error);
    }
  }
  const searchAPI = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/products/filterByName/${searchValue}`);
      setProductListData(res?.data);
      console.log(res?.data);
    } catch (error) {
      console.log('error', error);
    }
  }
  useEffect(() => {

  }, [productListData])
  const handleAccordionToggle = () => {
    setAccordionState(!accordionState);
  };

  const handleAccordionToggle1 = () => {
    setAccordionState1(!accordionState1);
  };

  const handleAccordionToggle2 = () => {
    setAccordionState2(!accordionState2);
  };

  const handleCheckboxChange = (itemId: number, type: string) => {
    switch (type) {
      case 'brands':
        const updatedBrands = brands.map(brand =>
          brand.id === itemId ? { ...brand, checked: !brand.checked } : brand
        );
        setBrands(updatedBrands);
        break;

      case 'priceRanges':
        const updatedPriceRanges = priceRanges.map(range =>
          range.id === itemId ? { ...range, checked: !range.checked } : range
        );
        setPriceRanges(updatedPriceRanges);
        break;

      case 'ratings':
        const updatedRatings = ratings.map(rating =>
          rating.id === itemId ? { ...rating, checked: !rating.checked } : rating
        );
        setRatings(updatedRatings);
        break;

      default:
        break;
    }
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
            margin: '10px',
            width: '100px',
            height: 'auto',
          }}
          alt="Zevi Logo"
        />
        <TextField
          placeholder="Search..."
          size="small"
          value={searchValue}
          onChange={handleInputChange}
          style={{
            backgroundColor: '#FFF',
            width: '628.37px',
            height: '57px',
            borderRadius: '20px',
            border: 'none',
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
                  backgroundColor: 'transparent',
                  color: '#000',
                }}
              >
                <SearchIcon />
              </IconButton>
            ),
            inputProps: {
              style: {
                height: '57px',
                border: 'none',
                borderRadius: '20px',
                fontSize: '20px',
              },
            },
          }}
        />
      </Box>
      <Grid container spacing={0}>
        <Grid item xs={3} sx={{ padding: '20px' }}>
          <div style={{ width: '281px', fontWeight: '400', lineHeight: '48.41px', fontSize: '40px', marginBottom: '30px' }}>Search Results</div>
          <div onClick={handleAccordionToggle} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px' }}>
            <div style={{ fontSize: '20px', fontWeight: '500' }}>Brand {"     "} </div>
            <div>{accordionState ? <ExpandLessIcon /> : <ExpandMoreIcon />}</div>
          </div>
          {accordionState && (
            <div>
              {brands.map(brand => (
                <div key={brand.id}>
                  <input
                    type="checkbox"
                    checked={brand.checked}
                    onChange={() => handleCheckboxChange(brand.id, 'brands')}
                  />
                  {brand.label}
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
              {priceRanges.map(range => (
                <div key={range.id}>
                  <input
                    type="checkbox"
                    checked={range.checked}
                    onChange={() => handleCheckboxChange(range.id, 'priceRanges')}
                  />
                  {range.label}
                </div>
              ))}
            </div>
          )}
          <div onClick={handleAccordionToggle2} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px' }}>
            <div style={{ fontSize: '20px', fontWeight: '500' }}>Ratings {"     "} </div>
            <div>{accordionState2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}</div>
          </div>
          {accordionState2 && (
            <div>
              {ratings.map(rating => (
                <div key={rating.id}>
                  <input
                    type="checkbox"
                    checked={rating.checked}
                    onChange={() => handleCheckboxChange(rating.id, 'ratings')}
                  />
                  <img src={rating.img} alt={`Rating ${rating.id}`} />
                </div>
              ))}
            </div>
          )}
        </Grid>
        <Grid item xs={9} sx={{ marginTop: '60px', display: 'flex', flexDirection: 'row' }}>
          <Grid container spacing={2}>
            {productListData.length > 1 ? (
              productListData.map((product, index) => (
                <Grid item xs={3} key={index}>
                  <ProductDetails
                    imageUrl={imageArray[product.id - 1]}
                    name={product.name}
                    originalPrice={product.original_price}
                    discountedPrice={product.discount_price}
                    ratings={ratingArray[product.id % 5]}
                  />
                </Grid>
              ))
            ) : (
              data.map((product, index) => (
                <Grid item xs={3} key={index}>
                  <ProductDetails
                    imageUrl={imageArray[product.id - 1]}
                    name={product.name}
                    originalPrice={product.original_price}
                    discountedPrice={product.discount_price}
                    ratings={ratingArray[product.id % 5]}
                  />
                </Grid>
              ))
            )}

          </Grid>
        </Grid>

      </Grid>
    </>
  );
}

export default ProductList;
