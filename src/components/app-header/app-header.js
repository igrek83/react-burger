import { useState } from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeader from './app-header.module.css';

const AppHeader = () => {

  return (
    <header className={appHeader.container}>
      <nav className={appHeader.nav}>
        <div className={appHeader.block}>
          <div className={appHeader.case}>
            <a className={appHeader.active} >
              <BurgerIcon type="primary"/>
              <span className="text text_type_main-default m-1">Конструктор</span>
            </a>
            <a className={appHeader.inactive} >
              <ListIcon type="secondary" />
              <span className="text text_type_main-default m-1">Лента заказов</span>
            </a>
          </div>
          <a className={appHeader.active}>
            <Logo />
          </a>
        </div>
        <a className={appHeader.inactive}>
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default m-1">Личный кабинет</span>
        </a>
      </nav>
    </header>
  ) 
}

export default AppHeader;