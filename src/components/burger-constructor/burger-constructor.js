import { useState, useEffect } from 'react';
import burgerConstructor from './burger-constructor.module.css';
import {
  ConstructorElement,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import currency from '../../images/currency.svg';
import PropTypes from 'prop-types';

const BurgerConstructor = ({ array }) => {


  const [visible, setVisible] = useState(false)

  const openModal = (event) => {
    setVisible(true);
    event.stopPropagation();
  }

  const closeModal = () => {
    setVisible(false);  
  }
  
  const closeKeyDown = (event) => {
    if(event.keyCode === 27) {
      setVisible(false);    
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", closeKeyDown, false);

    return () => {
      document.removeEventListener("keydown", closeKeyDown, false);
    };
  }, []);

  const modal = (
    <Modal onClose={closeModal} onKeyDown={closeKeyDown} />
  );



  const arr = array.filter((item) => item.type != 'bun');
  const bun = array.filter((item) => item.type === 'bun');
  const topBun = bun.filter((item) => item.price > 1000);
  const bottomBun = bun.filter((item) => item.price <= 1000);
  return (
    <div className={burgerConstructor.container} >
      <div className={burgerConstructor.box}>
        <ul className={burgerConstructor.brick}>
          {topBun.map((item, index) => (
            <ConstructorElement
              key={`${index}+700`}
              thumbnail={item.image_mobile}
              text={item.name}
              price={item.price}
              isLocked={true}
              type='top'
            />
          ))}
        </ul>
        <ul className={burgerConstructor.block}>
          {arr.map((item, index) => (
            <div className={burgerConstructor.item} key={`${index}+800`}>
              <div className={burgerConstructor.drop}>
              </div>
              <ConstructorElement
                thumbnail={item.image_mobile}
                text={item.name}
                price={item.price}
                isLocked={false}
              />
            </div>
          ))}
        </ul>
        <ul className={burgerConstructor.brick}>
          {bottomBun.map((item, index) => (
            <ConstructorElement
              key={`${index}+900`}
              thumbnail={item.image_mobile}
              text={item.name}
              price={item.price}
              isLocked={true}
              type='bottom'
            />
          ))}
        </ul>
        <div className={burgerConstructor.section}>
          <div className={burgerConstructor.case}>
            <span className={burgerConstructor.span}>2000</span>
            <img
              src={currency}
              alt='currency'
              className={burgerConstructor.currency}
            />
          </div>
          <Button type='primary' size='medium' onClick={openModal}>
            Оформить заказ
          </Button>
          {visible && modal}
        </div>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
  key: PropTypes.number,
  array: PropTypes.array,
};

export default BurgerConstructor;