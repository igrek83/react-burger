import { useState } from 'react';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeader from './app-header.module.css';

const AppHeader = () => {
  /*
  const [classes, setClasses] = useState(appHeader.nameInactive)
  const [type, setType] = useState('secondary')

  const constructorPage = () => {
    setClasses(appHeader.nameActive);
    setType('primary');     
  }
*/
  const [constructor, setConstructor] = useState([appHeader.nameActive, 'primary']);
  const [feed, setFeed] = useState([appHeader.nameInactive, 'secondary']);
  const [office, setOffice] = useState([appHeader.nameInactive, 'secondary']);

  const constructorPage = () => {
    setConstructor([appHeader.nameActive, 'primary']);
    setFeed([appHeader.nameInactive, 'secondary']);
    setOffice([appHeader.nameInactive, 'secondary']);  
  }
  
  const feedPage = () => {
    setFeed([appHeader.nameActive, 'primary']); 
    setConstructor([appHeader.nameInactive, 'secondary']);
    setOffice([appHeader.nameInactive, 'secondary']);   
  }

  const officePage = () => {
    setOffice([appHeader.nameActive, 'primary']);  
    setFeed([appHeader.nameInactive, 'secondary']); 
    setConstructor([appHeader.nameInactive, 'secondary']);
  }

  const [firstClasses, firstType ] = constructor;
  const [twoClasses, twoType ] = feed;
  const [threeClasses, threeType ] = office;

  return (
    <header className={appHeader.container}>
      <nav className={appHeader.nav}>
        <div className={appHeader.block}>
          <div className={appHeader.case}>
            <a className={appHeader.item} onClick={constructorPage}>
              <BurgerIcon type={firstType}/>
              <span className={firstClasses} >Конструктор</span>
            </a>
            <a className={appHeader.item} onClick={feedPage}>
              <ListIcon type={twoType} />
              <span className={twoClasses}>Лента заказов</span>
            </a>
          </div>
          <a href="#" className={appHeader.logo} />     
        </div>
        <a className={appHeader.item} onClick={officePage}>
          <ProfileIcon type={threeType} />
          <span className={threeClasses}>Личный кабинет</span>
        </a>
      </nav>
    </header>
  ) 
}

export default AppHeader;