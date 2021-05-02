import modalOverlay from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {

  const { onClose } = props;

  return (
    <div className={modalOverlay.container} onClick={onClose} />
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
};

export default ModalOverlay;