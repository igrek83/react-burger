import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsElement from './ingredients-element.module.css';

const IngredientsElement = ({ id, image, price, name }) => (
  <li className={ingredientsElement.item} key={id}>
    <Counter count={1} size="default" />
    <img src={image} alt="img" className={ingredientsElement.image} />
    <div className={ingredientsElement.price}>
      <span className="text text_type_main-medium mr-1">{price}</span>
      <CurrencyIcon type="primary" />
    </div>
    <span className="text text_type_main-small">{name}</span>
  </li>
)

export default IngredientsElement;