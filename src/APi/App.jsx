import React from "react";
import Produto from "./Produto";

const App = () => {

    const [dados, setDados] = React.useState(null)
   const [carregando, setCarregando] = React.useState(null)

    async function getData(){
        setCarregando(true)

        const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
    
        const json = await response.json()

        setDados(json)  
        setCarregando(false)
}

const [,] = React.useState(null)
   
async function getSmart(){

    const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/smartphone')

    const json = await response.json()

    setDados(json)  
}

const [,] = React.useState(null)
   
async function getFogo(){

    const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')

    const json = await response.json()

    setDados(json)  
}


return(
    <>
    <button onClick={getData}>Tablet</button>
    <button onClick={getSmart}>Smartphone</button>
    <button onClick={getFogo}>Notebook</button>
    {carregando && <p>carregando...</p>}

    {dados != null ? <Produto dados={dados}/> : null}
    </>
  )
}
export default App;