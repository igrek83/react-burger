import IngredientsElement from '../IngredientsElement/IngredientsElement';
import itemsIngredients from './itemsIngredients.module.css';

const Items = ({ data }) => ( 
  <ul className={itemsIngredients.block}>
    {data.map(item => ( 
      <IngredientsElement key={item._id} image={item.image} price={item.price} name={item.name}/>        
    ))}
  </ul>
);

export default Items;