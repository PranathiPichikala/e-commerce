import React, { useState } from 'react';
import "./css/SellerHeader.css"
import { TextField, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

export const SellerHeader = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [productName, setProductName] = useState('');
 
    const [savedProducts, setSavedProducts] = useState([]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
    };

    const handleSave = () => {
        const newProduct = {
            productName: productName,
            productImage: selectedImage,
           
        };

        setSavedProducts([...savedProducts, newProduct]);
        setProductName('');
        setSelectedImage(null);
      
    };

    return (
        <div className="_1ort">
         
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
                    <input type="file" accept="image/*" onChange={handleImageUpload} />

                    <TextField
                        label="Enter product name"
                        sx={{ width: 450 }}
                        margin="normal"
                        variant="outlined"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div  className="_1ort-save">
                <button onClick={handleSave}>Save</button>
                </div>
            </div>
            <div className="table-container">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Product Image</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {savedProducts.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell>{product.productName}</TableCell>
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

export default SellerHeader;
