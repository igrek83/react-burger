import { useState, useEffect } from 'react';
import burgerIngredients from './burger-ingredients.module.css';
import Menu from '../menu/menu';
import PropTypes from 'prop-types';
import IngredientsElement from '../ingredients-element/ingredients-element';
import Modal from '../modal/modal';

const BurgerIngredients = ({array}) => {

  const [visible, setVisible] = useState(false);
  const [text, setText] = useState();
  const [type, setType] = useState();
  const [isClicked, setIsClicked] = useState([]);

  useEffect(() => {
    document.addEventListener("keydown", closeKeyDown, false);

    return () => {
      document.removeEventListener("keydown", closeKeyDown, false);
    };
  }, []);

  useEffect(() => {
    addTitle()
  }, []);

  useEffect(() => {
    addType()
  }, []);

  const addTitle = () => {
    setText('Детали ингридиента');
  }

  const addType = () => {
    setType('ingredient');
  }


  const openModal = (id) => {
    setIsClicked(array.find(item => item._id === id));
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);  
  }
  
  const closeKeyDown = (event) => {
    if(event.keyCode === 27) {
      setVisible(false);    
    }
  }

  const { name, image, description, calories, proteins, fat, carbohydrates } = isClicked;
  const modal = ( 
    <Modal type={type} onClose={closeModal} onKeyDown={closeKeyDown} text={text}  image={image} name={name} description={description} calories={calories} proteins={proteins} fat={fat} carbohydrates={carbohydrates}/>
  );

  const bun = array.filter((item) => item.type === 'bun');
  const sauce = array.filter((item) => item.type === 'sauce');
  const main = array.filter((item) => item.type === 'main');

  return (
    <div className={burgerIngredients.container}>
      <Menu />
      <div className={burgerIngredients.box}>
        <h3 className='text text_type_main-medium pb-3'>Булки</h3>
        <ul className={burgerIngredients.block}>
          {bun.map((item, index) => (
            <IngredientsElement
              data={item}
              key={`${index}+100`}
              openModal={openModal}
            />
          ))}
        </ul>
        <h3 className='text text_type_main-medium pb-3'>Соусы</h3>
        <ul className={burgerIngredients.block}>
          {sauce.map((item, index) => (
            <IngredientsElement
              data={item}
              key={`${index}+200`}
              openModal={openModal}
            />
          ))}
        </ul>
        <h3 className='text text_type_main-medium pb-3'>Начинки</h3>
        <ul className={burgerIngredients.block}>
          {main.map((item, index) => (
            <IngredientsElement
              data={item}
              key={`${index}+300`}
              openModal={openModal}
            />
          ))}
        </ul>
        {visible && modal}
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  array: PropTypes.array,
};

export default BurgerIngredients;