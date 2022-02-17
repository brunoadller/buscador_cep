import React, {useState} from 'react'
import { FiSearch } from 'react-icons/fi'
import Api from './Services/Api'
import './style.css'

export default function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})
  //como é algo asincrono pode demorar um pouco
  //usa-se aync

  async function handleChangeInput(){
    //01310930

    if(input === ''){
      alert('Preencha um cep')
      return
    }
    try{
      const response = await Api.get(`${input}/json`)
      setCep(response.data)
      setInput('')

    }catch{
        alert('OPS ERRO AO BUSCAR!')
        setInput('')
    }
  }
  return (
    <div className = 'container'>

      <h1 className = 'title'>Buscador Cep</h1>

      <div className = 'containerInput'>

        <input 
          type = 'text' 
          placeholder= 'Digite seu Cep...' 
          value={input}
          onChange = {(e) => setInput(e.target.value)}
        />

        <button className='buttonSearch' onClick={() => handleChangeInput()}>
          <FiSearch size = {25} color = '#fff' />
        </button>
      </div>
      {/*Acessando o que tem no objeto*/}
      {Object.keys(cep).length > 0 && (
        <main className='show'>
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento} </span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
    </div>
  );
}


