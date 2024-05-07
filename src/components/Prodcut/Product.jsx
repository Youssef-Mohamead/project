
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { motion } from 'framer-motion'

export default function Product() {
    const [product , setProduct] = useState();
    const params = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(json=> setProduct(json))
            .catch((err) => console.error(err));
    } , [])
    return (

        <motion.div 
        initial={{transform : "translateX(40px)" , opacity: 0}}
        animate={{transform : "translateX(0px)" , opacity: 1}}
        transition={{duration : 0.5}}
        style={{display: "flex" , justifyContent: 'center' , alignItems: 'center' , height: "100vh"}}>
            <div class="card mb-3" style={{maxWidth: "1000px" , }}>
            <div class="row g-0">
                <div class="col-md-4">
                <img src={product?.image} class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{product?.title}</h5>
                    <p class="card-text">{product?.description}</p>
                    <p class="card-text">Price: {product?.price}$</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    <button type="button" class="btn btn-warning"style={{padding: "4px 10px" , }}>Buy</button>
                </div>
                </div>
            </div>
            </div>
        </motion.div>
    )
}
