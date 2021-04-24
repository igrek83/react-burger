import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import itemsConstrustor from './itemsConstrustor.module.css';

const ItemsConstructor = ({ array }) => {
  const arr = array.filter(item => item.type != 'bun');
  const bun = array.filter(item => item.type === 'bun');
  const topBun = bun[0];
  const bottomBun = bun[1];
  return (
    <div className={itemsConstrustor.box}>
      <ul className={itemsConstrustor.container}>  
        <ConstructorElement key={topBun._id} thumbnail={topBun.image_mobile} text={topBun.name} price={topBun.price} isLocked={true} type="top"/>    
      </ul> 
      <ul className={itemsConstrustor.block}>
        {arr.map(item => ( 
          <ConstructorElement key={item._id} thumbnail={item.image_mobile} text={item.name} price={item.price} isLocked={false} type="undefined"/>    
        ))}
      </ul>
      <ul className={itemsConstrustor.container}>
        <ConstructorElement key={bottomBun._id} thumbnail={bottomBun.image_mobile} text={bottomBun.name} price={bottomBun.price} isLocked={true} type="bottom"/>    
      </ul>   
  </div>
  )
}

export default ItemsConstructor;