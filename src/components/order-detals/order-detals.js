import orderDetals from './order-detals.module.css';

const OrderDetals = () => {
  return (
    <>
      <span className={orderDetals.number}>034536</span>
      <span className={orderDetals.name}>идентификатор заказа</span>
      <div className={orderDetals.animate}>
        <div className={orderDetals.imageOne}></div>
        <div className={orderDetals.imageTwo}></div>
        <div className={orderDetals.imageThree}></div>
        <span className={orderDetals.check}></span>
      </div>
      <span className={orderDetals.span}>Ваш заказ начали готовить</span>
      <span className={orderDetals.text}>
        Дождитесь готовности на орбитальной станции
      </span>
    </>
  );
};

export default OrderDetals;
