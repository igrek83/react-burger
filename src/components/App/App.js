import React from 'react';
import app from './app.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import data from '../../utils/data';

export default class App extends React.Component {
  render() {
    return (
      <div className={app.page}>
        <AppHeader />
        <section className={app.main}>
          <div className={app.container}>
            <h1 className="text text_type_main-large pb-3">Соберите бургер</h1>
            <div className={app.box}>   
              <BurgerIngredients array={data}/>
              <BurgerConstructor array={data}/>
            </div>
          </div>
        </section>
      </div>
    )
  }
}