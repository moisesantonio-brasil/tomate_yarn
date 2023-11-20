import './App.css'
import Tomate from './assets/tomate.png'
import Conteudo from './caminhos/Conteudo.jsx'
import Conteudo2 from './caminhos/Conteudo2.jsx'
import Conteudo3 from './caminhos/Conteudo3.jsx'
import Conteudo4 from './caminhos/Conteudo4.jsx'
 export default function App() {
 
  return (
    <>
    <div style={{width:350,margin:'auto',marginBottom:100}}>
<img src={Tomate} alt="" style={{width:350,margin:"auto"}}/>
    </div>
    <Conteudo/>
    <Conteudo2/>
     <Conteudo/>
    <Conteudo2/>
  
    </>
  )
}


