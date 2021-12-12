import { useEffect } from 'react';

import { api } from '../../services/api';

import { Container } from './styles';

export function Transactions() {

  useEffect(() => {
    api.get('/transactions').then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>12/12/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdrawl">- R$ 1.200</td>
            <td>Cala</td>
            <td>07/12/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>12/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
