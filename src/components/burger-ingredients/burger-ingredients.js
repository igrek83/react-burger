import burgerIngredients from './burger-ingredients.module.css';
import ItemsIngredients from '../items-ingredients/items-ingredients';
import Menu from '../menu/menu';
import PropTypes from 'prop-types';

const BurgerIngredients = ({ array }) => {
  const bun = array.filter(item => item.type === 'bun');
  const sauce = array.filter(item => item.type === 'sauce');
  const main = array.filter(item => item.type === 'main');
  return (
    <div className={burgerIngredients.container}>
      <Menu />
      <div className={burgerIngredients.box}>
        <h3 className="text text_type_main-medium pb-3">Булки</h3>
        <ItemsIngredients data={bun} />
        <h3 className="text text_type_main-medium pb-3">Соусы</h3>
        <ItemsIngredients data={sauce} />
        <h3 className="text text_type_main-medium pb-3">Начинки</h3>
        <ItemsIngredients data={main} />
      </div>
    </div>
  )
}

BurgerIngredients.propTypes = {
  image: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string
};

export default BurgerIngredients;