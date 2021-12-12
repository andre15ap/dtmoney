import Modal from 'react-modal';

interface IProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function TransactionModal(props: IProps) {
  const { isOpen, onRequestClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar transação </h2>
    </Modal>
  );
}
