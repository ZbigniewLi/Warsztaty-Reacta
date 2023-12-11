import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import { useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage'
import ProductForm from '../ProductForm/ProductForm'

const Product = props => {
    const  [currentSize, setCurrentSize] = useState(props.sizes[0].name)
    const [currentColor, setCurrentColor] = useState(props.colors[0])

    const addToCart =(event) => { event.preventDefault()
      console.log('currentSize', currentSize);
      console.log('currentColor',currentColor);
      console.log('price', price);
      console.log('title', props.title);
    }

    const price = useMemo(() => {
      const selectedSize = props.sizes.find((size) => size.name === currentSize);
  
      if (selectedSize) {
        const additionalPrice = selectedSize.additionalPrice;
        return props.basePrice + additionalPrice;
      }
  
      return props.basePrice;
    }, [currentSize, props.basePrice, props.sizes]);

    /*const getPrice = () => {
      // Znajdź wybrany rozmiar
      const selectedSize = props.sizes.find((size) => size.name === currentSize);
      // Jeśli znaleziono wybrany rozmiar, oblicz cenę
      if (selectedSize) {
        const additionalPrice = selectedSize.additionalPrice;
        return props.basePrice + additionalPrice;
      }
      // Jeśli nie znaleziono wybranego rozmiaru, zwróć tylko basePrice
      return props.basePrice;
    };
    */

   
  return (
    <article className={styles.product}>
      <ProductImage color={currentColor} name={props.name}>
        
      </ProductImage>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm addToCart={addToCart} sizes={props.sizes} colors={props.colors} currentColor={currentColor} currentSize={currentSize} setCurrentSize={setCurrentSize} setCurrentColor={setCurrentColor}></ProductForm>
      </div>
    </article>
  )
};

export default Product;