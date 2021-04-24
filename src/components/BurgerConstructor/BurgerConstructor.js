import burgerConstructor from './burgerConstructor.module.css';
import ItemsConstructor from '../ItemsConstructor/ItemsConstructor';
import PropTypes from 'prop-types';

const BurgerConstructor = ({ array }) => {
  
  return (
    <div className={burgerConstructor.container}>    
      <ItemsConstructor array={array} /> 
    </div>
  )
}

BurgerConstructor.propTypes = {
  image: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string
};

export default BurgerConstructor;