import burgerConstructor from './burger-constructor.module.css';
import ItemsConstructor from '../items-constructor/items-constructor';
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