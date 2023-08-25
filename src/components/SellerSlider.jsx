import React, { useState } from 'react';
import "./css/SellerSlider.css"
import { TextField, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

export const SellerSlider = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [savedProducts, setSavedProducts] = useState([]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
    };

    const handleSave = () => {
        const newProduct = {
            productImage: selectedImage,
        };

        setSavedProducts([...savedProducts, newProduct]);
        setSelectedImage(null);
    };

    return (
        <div className="_3cmk">
         
            <div className='table-container-iort'>
                <h1>Upload Image</h1>
 
                <div className="image-container">
                    <div className="display-image">
                        {selectedImage ? (
                            <img src={selectedImage} alt="Uploaded" />
                        ) : (
                            <p>No image uploaded</p>
                        )}
                    </div>
                    <div className="custom-file-input">
                        <label htmlFor="fileInput" className="custom-button-2">
                            Choose Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            id="fileInput"
                            onChange={handleImageUpload}
                        />
                    </div>
                </div>
                <div className='_3cmk-save'>
                <button onClick={handleSave}>Save</button>
                </div>
            </div>
            <div className="table-container">
                <Table>
                    <TableHead>
                        <TableRow>
                         
                            <TableCell>Product Image</TableCell>
                          
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {savedProducts.map((product, index) => (
                            <TableRow key={index}>
                                
                                <TableCell className="uploadedimage-img">
                                    {product.productImage && (
                                        <img src={product.productImage} alt="Uploaded" />
                                    )}
                                </TableCell>
                            
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default SellerSlider;
