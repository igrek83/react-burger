import IngredientsDetails from '../ingredient-details/ingredient-details';
import OrderDetals from '../order-detals/order-detals';
import ReactDOM from 'react-dom';
import modal from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const {
    type,
    text,
    onClose,
    closeKeyDown,
    image,
    name,
    description,
    calories,
    proteins,
    fat,
    carbohydrates,
  } = props;

  const modalRoot = document.querySelector('#modals');

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} onKeyDown={closeKeyDown} />
      <div className={modal.box} type={type}>
        <div className={modal.block}>
          <h3 className={modal.title}>{text}</h3>
          <CloseIcon type='primary' onClick={onClose} />
        </div>
        {type === 'ingredient' ? (
          <IngredientsDetails
            image={image}
            name={name}
            description={description}
            calories={calories}
            proteins={proteins}
            fat={fat}
            carbohydrates={carbohydrates}
          />
        ) : (
          <OrderDetals />
        )}
      </div>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  colories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  type: PropTypes.string,
  onClose: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Modal;
