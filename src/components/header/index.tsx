import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface IProps {
  onOpenNewTransactionModal: () => void;
}

export function Header(props: IProps) {
  const { onOpenNewTransactionModal } = props;

  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money img" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
