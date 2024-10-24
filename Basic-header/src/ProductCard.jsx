import PropTypes from 'prop-types'

function ProductCard({ProductData}){
    return(
        <div>
            {ProductData.map((product, index)=>(

                <div key={index}>
                    <image />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <h2>${product.price}</h2>
                </div>
            )
            
        </div>
    )
}

{/* function ProductCard({productTitle, productDesc, productPrice }){
    return(
        <div>
            <image / >
            <h2>{productTitle}</h2>
            <p>{productDesc}</p>
            <h2>${productPrice}</h2>
        </div>
    )
} */}


{/* ProductCard.propTypes = {
  productTitle : PropTypes.string.isRequired,
  productDesc : PropTypes.string.isRequired,
  productPrice : PropTypes.number.isRequired
} */}


export default ProductCard