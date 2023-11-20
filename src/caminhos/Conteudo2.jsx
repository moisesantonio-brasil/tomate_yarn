import React from 'react'
import Tomate from '../assets/tomate.png'
import Img2 from '../assets/img2.jpg'
import {CgMaximizeAlt } from 'react-icons/cg'
import {TiHeart,TiHeartOutline,TiDelete} from 'react-icons/ti' 
import {useState} from 'react'

export default function Conteudo2(){
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

    <section className='noticias' style={{display:visivel}}>
    <div className='assunto'>
    <img src={Img2} alt="" className="img_exibiçao"/>
    <p className='texto'>Top 7 tipos de Tomate</p>
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
<section className="conteudo" style={{display:invisivel,top:"5%"}}>
    <TiDelete size={30} color="black" style={{position:"absolute",right:6}}
    onClick={()=>setState2(!state2)}/>
<h1>1. Tomate Carmem</h1>
<p>Também é conhecido como tomate ‘Longa vida’, porque dura bastante. É bom para fazer salada, mas por ser muito aguado e pouco saboroso, não é o ideal para molhos. É o mais comercializado no país.</p>
   
<h1>2. Tomate Caqui</h1>
<p>Não é bom para fazer molho, porém é excelente para fazer o vinagrete do churrasco.

Não é muito adocicado, mas tem uma boa acidez e é fresco, tem frescor no sabor.
</p>
    </section>

<section className="conteudo" style={{display:invisivel,top:"5%",left:"35%"}}>
<h1>3. Tomate Holândes</h1>
 <p>Não é um tomate muito ácido e é bem adocicado, excelente para salada. </p> 
 
 <h1>4. Tomate Débora</h1>
 <p>É um bom tomate para o dia a dia. Serve para salada e molho. Menos ácido do que o Tomate Carmem, porém tem mais sementes do que o Tomate Italiano.

Serve para fazer molho, mas não é tão bom quanto o Tomate Italiano. Ele é ideal para salada. </p>
<h1>5. Tomate Italiano</h1>
<p>De formato alongado, é o melhor tomate para fazer molho, porque tem menos sementes e é mais carnudo.

A desvantagem é que ele é o mais sensível de todos, então ele não dura muito tempo. </p>

</section>

<section className="conteudo" style={{display:invisivel,top:"5%",left:"69%"}}>
<h1>6 – Existem tomates perfeitos para saladas e outros para molhos</h1>
<p>Você pode escolher qualquer tipo de tomate para colocar nos seus pratos, saladas ou preparar molhos. Mas existem variedades mais indicadas para cada tipo de receita, por conta de suas características.</p>

<h1>7 – Atenção com os agrotóxicos</h1>
<p>O tomate é um dos frutos que mais absorve agrotóxicos que entram em contato com sua pele durante o cultivo (assim como o morango, alface ou beterraba). Por isso, é sempre interessante conhecer a origem do fruto que você está levando para a casa.</p>  
   
<a href="https://content.paodeacucar.com/prazer-de-comer-e-beber/7-curiosidades-sobre-o-tomate"
target="_blank">créditos</a>
</section>
</>
		)
}