import React from 'react'
import Tomate from '../assets/tomate.png'
import Img4 from '../assets/img4.jpg'
import {CgMaximizeAlt } from 'react-icons/cg'
import {TiHeart,TiHeartOutline} from 'react-icons/ti' 
import {useState} from 'react'

export default function Conteudo4(){
	  const [state,setState] = useState(true);

	  let ativo = "flex"
	  let desativo = "none"

	  if(state == true){
	  	ativo = "flex"
	  	desativo = "none"
	  }else{
	  	ativo = "none"
	  	desativo = "flex"
	  }
	return(
<>

    <section className='noticias' style={{marginLeft:0}}>
    <div className='assunto'>
    <img src={Img4} alt="" className="img_exibiçao"/>
    <p className='texto'>7 curiosidades sobre o Tomate</p>
    <div className='opçoes'>
    <CgMaximizeAlt size={20} color="white" style={{marginTop:20,marginLeft:2}}/>
        <TiHeart size={20} color="white" style={{marginTop:10,marginLeft:2,display:desativo}}
        onClick={()=> setState(!state)}/>
         <TiHeartOutline size={20} color="white" 
         style={{marginTop:10,marginLeft:2,display:ativo}}
          onClick={()=>setState(!state)}/>
    </div>
    </div>
    </section>
</>
		)
}