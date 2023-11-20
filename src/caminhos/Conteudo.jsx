import React from 'react'
import Tomate from '../assets/tomate.png'
import Img1 from '../assets/img1.jpg'
import {CgMaximizeAlt } from 'react-icons/cg'
import {TiHeart,TiHeartOutline,TiDelete} from 'react-icons/ti' 
import {useState} from 'react'

export default function Conteudo(){
	  const [state,setState] = useState(true);
	  const [state2,setState2] = useState(true)

	  let ativo = "flex"
	  let desativo = "none"

	  let visivel = "flex"
	  let invisivel = "none"

	  if(state == true){
	  	ativo = "flex"
	  	desativo = "none"
	  }else{
	  	ativo = "none"
	  	desativo = "flex"
	  }

	  if(state2 == true){
	  	visivel = "flex"
	  	invisivel = "none"
	  }else{
	  	visivel = "none"
	  	invisivel = "block"
	  }
	return(
<>

    <section className='noticias'>
    <div className='assunto'>
    <img src={Img1} alt="" className="img_exibiçao"/>
    <p className='texto'>7 curiosidades sobre o Tomate</p>
    <div className='opçoes'>
    <CgMaximizeAlt size={20} color="white" style={{marginTop:20,marginLeft:2}}
    onClick={()=>setState2(!state2)}/>
        <TiHeart size={20} color="white" style={{marginTop:10,marginLeft:2,display:desativo}}
        onClick={()=> setState(!state)}/>
         <TiHeartOutline size={20} color="white" 
         style={{marginTop:10,marginLeft:2,display:ativo}}
          onClick={()=>setState(!state)}/>
    </div>
    </div>
    </section>

    <section className="conteudo" style={{display:invisivel,left:"2%",top:"5%"}}>
    <TiDelete size={30} color="black" style={{position:"absolute",right:1}}
    onClick={()=>setState2(!state2)}/>
<h1>1 – O tomate é uma fruta</h1>
<p>É isso mesmo que você leu (e provavelmente já sabia). O tomate é chamado de legume, mas na verdade, é classificado como uma fruta, por ser o fruto da planta Tomateiro.
Mas e quem disse que fruta não combina com salada, não é mesmo?</p>
   
 <h1>2 – Rico em licopeno</h1>
<p>Uma das principais curiosidades sobre o tomate é que ele é um alimento muito pesquisado e valorizado por especialistas em saúde. O motivo de tanto interesse em torno desse fruto é a sua grande concentração de licopeno, um antioxidante natural.
</p> 
    </section>

    <section className="conteudo" style={{display:invisivel,left:"35%",top:"5%"}}>
    <h1>3 – Fonte de vários outros nutrientes</h1>
 <p>Comer tomate é uma ótima maneira de aumentar a ingestão de vitaminas e minerais essenciais para a saúde. Ele é rico em vitamina C, vitamina A, algumas vitaminas do complexo B, potássio e cálcio.</p> 

 <h1>4 – Não é um alimento de origem europeia</h1>
 <p>O tomate é um dos alimentos mais consumidos em alguns países da Europa, como Itália, Espanha e Grécia. Mas você sabia que ele não é um produto europeu? O tomate é originário das Américas e foi levado para a Europa por colonizadores.</p>
    
    </section>

    <section className="conteudo" style={{display:invisivel,right:"2%",top:"5%"}}>
    <h1>5 – Cultivamos quase todos os tipos de tomate no Brasil</h1>
<p>O Brasil é um país com clima e terreno muito fértil para o cultivo de vários tipos de alimentos. Por isso, uma das curiosidades sobre o tomate, é que cultivamos praticamente todos os tipos do alimento por aqui, facilitando o acesso a esse tipo de ingrediente.</p>

<h1>6 – Existem tomates perfeitos para saladas e outros para molhos</h1>
<p>Você pode escolher qualquer tipo de tomate para colocar nos seus pratos, saladas ou preparar molhos. Mas existem variedades mais indicadas para cada tipo de receita, por conta de suas características.</p>

<h1>7 – Atenção com os agrotóxicos</h1>
<p>O tomate é um dos frutos que mais absorve agrotóxicos que entram em contato com sua pele durante o cultivo (assim como o morango, alface ou beterraba). Por isso, é sempre interessante conhecer a origem do fruto que você está levando para a casa.</p>  
   

    </section>
</>
		)
}