import Gender from "./gender"

export default function Home() {
    let name = [{"name": "Kamilo"}]

    return (
        <div>
            <Gender data = {name}/>
            <p>Este grafico muestra el uso de la bicicleta por genero</p>
        </div>

    )
  }