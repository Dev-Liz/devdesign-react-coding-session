/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard.jsx"


function ProductList(){
    
    const ProductData = [
        {
            title : "Gucci Bag",
            description : "Top leather bag, aliggator skin",
            price : 13
        },
        {
            title : "Gucci Bag",
            description : "Top leather bag, aliggator skin",
            price : 13
        },
        {
            title : "Gucci Bag",
            description : "Top leather bag, aliggator skin",
            price : 13
        },
        {
            title : "Gucci Bag",
            description : "Top leather bag, aliggator skin",
            price : 13
        },

    ]

    return(
        <div>
            
               <ProductCard 
                ProductData = {ProductData}
               />
            
            {/* {ProductData.map((product, index)=>(
               <ProductCard 
               productTitle = {product.title}
               productDesc = {product.description}
               productPrice = {product.price}
               key={index}
               />
            ))} */}
        </div>
    )
}

export default ProductList