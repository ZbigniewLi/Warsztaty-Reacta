import clsx from 'clsx';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor'
import OptionSize from '../OptionSize/OptionSize'

const ProductForm = props => {

   
 return (

<form onSubmit={props.addToCart}>
        <OptionSize currentSize={props.currentSize} sizes={props.sizes} setCurrentSize={props.setCurrentSize}>
        </OptionSize>
        <OptionColor currentColor={props.currentColor} colors={props.colors} setCurrentColor={props.setCurrentColor}>
        </OptionColor>
        <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
        </Button>
        </form>
 )};

 export default ProductForm;