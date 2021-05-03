import ingredientDetails from './ingredient-details.module.css';
import PropTypes from 'prop-types';

const IngredientsDetails = (data) => {

  const { image, description, calories, proteins, name, fat, carbohydrates } = data;

  return(
    <>
      <img className={ingredientDetails.image} src={image}/>
      <span className={ingredientDetails.name} >{name}</span>
      <p className={ingredientDetails.description} >{description}</p>
      <ul className={ingredientDetails.container}>
        <li className={ingredientDetails.item}>
          <span className={ingredientDetails.span}>Калории,ккал</span>
          <span className={ingredientDetails.value}>{calories}</span>
        </li>
        <li className={ingredientDetails.item}>
          <span className={ingredientDetails.span}>Белки, г</span>
          <span className={ingredientDetails.value}>{proteins}</span>
        </li>
        <li className={ingredientDetails.item}>
          <span className={ingredientDetails.span}>Жиры, г</span>
          <span className={ingredientDetails.value}>{fat}</span>
        </li>
        <li className={ingredientDetails.item}>
          <span className={ingredientDetails.span}>Углеводы, г</span>
          <span className={ingredientDetails.value}>{carbohydrates}</span>
        </li>
      </ul>
    </>
  )
}

IngredientsDetails.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  colories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
};

export default IngredientsDetails;