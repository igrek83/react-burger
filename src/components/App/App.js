import app from './app.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import data from '../../utils/data';

const App =() => {
  
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

export default App;