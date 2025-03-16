import React from 'react'
import Star from '../star_component/star'
import './Product.css'
import ImageOne from '../assets/apple-watch.jpg'
import ImageTwo from '../assets/headphone.jpg'
import ImageThree from '../assets/game-pad.jpg'

const products = [
    {
        id: 1,
        name: 'Smart watch',
        price: '$500',
        image: ImageOne,
        description: 'Stylish and versatile smartwatch designed to keep you connected and on track',
        bgColor: 'rgb(40, 71, 40)',
        ftColor: 'green',
        features: [
            'Product type: Intelligent bracelet',
            'Operation mode: single touch key',
            'Material: Top cover: Tempered glass',
            'Watch strap: silicone'
        ]
    },

    {
        id: 2,
        name: 'Head phones',
        price: '$300',
        image: ImageTwo,
        description: 'Premium wireless headphones delivering immersive sound and all-day comfort',
        bgColor: 'rgb(30, 113, 190)',
        ftColor: 'rgb(0, 162, 255)',
        features: [
            'Product type: Noise-canceling',
            'Operation mode: Wireless',
            'Battery life: 30 hours',
            'Material: Premium plastic & foam'
        ] 
    },

    {
        id: 3,
        name: 'Game pad',
        price: '$700',
        image: ImageThree,
        description: 'Ergonomic game pad designed for precision control and an enhanced gaming experience',
        bgColor: 'rgb(114, 6, 114)',
        ftColor: 'rgb(174, 39, 179)',
        features: [
            'Product type: Wireless controller',
            'Operation mode: Haptic feedback',
            'Battery life: 20 hours',
            'Material: Ergonomic design'
        ] 
    }
];

const Product = ({name, price, image, description, bgColor, initialRating, ftColor, features}) => {
  return (
        <div className='product'>
            <div className='product-image'>
            <img src={image} alt="" />
            </div>
            <div className='amount' style={{background: bgColor}}>
                <p>{price}</p>
            </div>
            <div className='description'>
                <div className='description-1'>
                <h1>{name}</h1>
                <p>{description}</p>
                <div className='star'>
                    <Star initialRating={initialRating} color={ftColor}/>
                </div>
                </div>
                <div className='divider' style={{borderLeft: `2px solid ${bgColor}`}}></div>
                <div className='description-2'>
                    <h1 style={{color: ftColor}}>Features</h1>
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='cart' style={{background: bgColor}}>
                <p>ADD TO CART</p>
            </div>
        </div>
  )
}

const ProductList = () => (
    <div className='container'>
        <div className='product-container'>
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    </div>
)

export default ProductList
