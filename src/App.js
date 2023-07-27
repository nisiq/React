import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {


  const portes = [
    {
      nome: 'Pequeno',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Médio',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Grande',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    }
  ]


  const [colaboradores, setColaboradores] = useState([])


  const aoNovoColaboradorAdicionado = (colaborador) => {
      console.log(colaborador)
      setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario nomeDosPortes={portes.map(porte => porte.nome)} aoColaboradorCadastrado= {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {portes.map(porte => <Time 
      key={porte.nome} 
      nome={porte.nome} 
      corPrimaria={porte.corPrimaria} 
      corSecundaria={porte.corSecundaria}
      colaboradores={colaboradores}

      />)}
      

    </div>
  );
}

export default App;
