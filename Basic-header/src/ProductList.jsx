/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard.jsx"


function ProductList({ListofProduct}){
    
    // const ProductData = [
    //     {
    //         title : "Gucci Bag",
    //         description : "Top leather bag, aliggator skin",
    //         price : 13
    //     },
    //     {
    //         title : "Gucci Bag",
    //         description : "Top leather bag, aliggator skin",
    //         price : 13
    //     },
    //     {
    //         title : "Gucci Bag",
    //         description : "Top leather bag, aliggator skin",
    //         price : 13
    //     },
    //     {
    //         title : "Gucci Bag",
    //         description : "Top leather bag, aliggator skin",
    //         price : 13
    //     },

    // ]

    return(
        <div>
            
            {ListofProduct.map((product, index)=>(
               <ProductCard 
               productTitle = {product.title}
               productDesc = {product.description}
               productPrice = {product.price}
               key={index}
               />
            ))}
        </div>
    )
}

export default ProductList