import { useState, useEffect } from 'react';
import app from './app.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import URL from '../../constans/constants';
import arr from '../../utils/data.json';

const App = () => {
  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    const getIngredients = async () => {
      setState({ ...state });
      await fetch(URL)
        .then((res) => {
          if (!res.ok) {
            throw Error(`ошибка подключения: ` + res.status);
          }
          return res.json();
        })
        .then((data) => setState({ ...state, ...data }))
        .catch((err) => {
          setState({ ...state, ...arr });
        });
    };
    getIngredients();
  }, []);

  const { data } = state;

  return (
    <div className={app.page}>
      <AppHeader />
      <section className={app.main}>
        <div className={app.container}>
          <h1 className='text text_type_main-large pb-3'>Соберите бургер</h1>
          <div className={app.box}>
            <BurgerIngredients array={data} />
            <BurgerConstructor array={data} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;