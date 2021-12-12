import { Summary } from '../summary';
import { Transactions } from '../transactions';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Transactions />
    </Container>
  );
}
