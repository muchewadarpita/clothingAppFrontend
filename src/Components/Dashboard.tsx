import React from 'react'
import home from '../Assets/home.jpg'

import zeviLogo from "../Assets/zeviLogo.svg"
import { IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate=useNavigate();
    const handleSearch = () => {
        // Implement your search functionality here
        navigate("/productlist");
    };

    return (
        <>
            <img style={{ width: '100%' }} alt={"home"} src={home} />
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
            <div
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '915px', // Adjust the width as needed
                }}
            >
                <TextField
                    placeholder="Search..."

                    size="small"
                    style={{
                        backgroundColor: '#FFF',
                        width: '915px',
                        height: '83px',
                        borderRadius: '20px',
                        border: 'none '
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
                                height: '83px',
                                border: 'none',
                                borderRadius: '20px',
                                fontSize: '20px', // Adjust the input text size as needed
                                // paddingLeft: '20px', // Adjust the left padding of the input text as needed
                            },
                        },
                    }}
                />
            </div>

        </>

    )
}

export default Dashboard