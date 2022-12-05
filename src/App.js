
import './App.css';
import Cabecalho from './componentes/cabecalho';
import Exemplo from './componentes/conta/contas';
import Foot from './componentes/footer/footer';




function App() {
  const head = {

    titulo: "Primeiro projeto",
    corPrimaria: '#E8F8FF',
    corSecundaria: '#82CFFA'
  }
  return (
    <div className="App">
      <Cabecalho titulo={head.titulo} corPrimaria={head.corPrimaria} corSecundaria={head.corSecundaria}/>
      <Exemplo/>
      <Foot  corPrimaria={head.corPrimaria} corSecundaria={head.corSecundaria}/>
   
     
    </div>
  );
}

export default App;
