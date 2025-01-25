import { useState, useEffect } from 'react'
import axios from 'axios'

// API = Application Programming Interface(Interface de Programação de Aplicativos)

function App() {
  const [data, setData] = useState("");

  const getData = async () => {
    const resp = await axios.get('https://api.sampleapis.com/rickandmorty/characters');
    setData(resp.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <h1>Introdução a API</h1>

      <div className='intro'>
        <p>API significa Application Programming Interface (Interface de Programação de Aplicações). É um conjunto de regras e definições que permite que diferentes sistemas se comuniquem entre si. </p>
        <p>Na prática, uma API funciona como uma ponte que conecta seu aplicativo ou site a outros sistemas ou serviços, permitindo que você use funcionalidades ou dados de terceiros sem precisar criar tudo do zero. Por exemplo, ao usar o Google Maps em um app de delivery ou acessar dados de um filme em uma plataforma, você provavelmente está interagindo com APIs.</p>
        <p>Elas podem ser usadas para diversas finalidades, como acessar dados de bancos, integrar redes sociais, serviços de pagamento ou até para controlar dispositivos de IoT (Internet das Coisas).</p>
        <p>APIs modernas geralmente usam o padrão REST ou GraphQL, que facilitam a comunicação entre sistemas através de requisições <span>HTTP</span>, como <span>GET</span>, <span>POST</span>, <span>PUT</span> e <span>DELETE</span>.</p>
      </div>

      <h2 className='title-desenho'>Rick and Morty</h2>
      <section className="api">
        {data && data.length > 0 ? (
          <ul className="characters">
            {data.map((character) => (
              <li key={character.id} className='character'>
                <img src={character.image} alt="" />
                <h2> {character.name}</h2>
                <h4>{character.species}</h4>
                <p>{character.origin}</p>
                <span>{character.gender}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </main>
  )
}

export default App
