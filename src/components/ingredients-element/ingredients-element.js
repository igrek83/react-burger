import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsElement from './ingredients-element.module.css';
import PropTypes from 'prop-types';

const IngredientsElement = (props) => {
  const { data, openModal } = props;

  return (
    <li
      className={ingredientsElement.item}
      onClick={() => openModal(data._id)}
      image={data.image}
    >
      <Counter count={1} size='default' />
      <img src={data.image} alt='img' className={ingredientsElement.image} />
      <div className={ingredientsElement.price}>
        <span className='text text_type_main-medium mr-1'>{data.price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <span className='text text_type_main-small'>{data.name}</span>
    </li>
  );
};

IngredientsElement.propTypes = {
  data: PropTypes.object,
  openModal: PropTypes.func,
};

export default IngredientsElement;
