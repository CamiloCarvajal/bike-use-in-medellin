
import Ages from "./edad/ages"
import Gender from "./genero/gender"


async function getApiData() {
    const url = 'http://medata.gov.co/api/action/datastore/search.json?resource_id=6594d14e-8d0d-4961-9469-676fd18d187d&limit=100'
    const res = await fetch(url)
    return res.json()
}



export default async function Page() {
    let data = await getApiData()
    data = data.result.records

    return (
        <div>
            <h1>Camilo, Next.js</h1>
            <Ages data={data} />
            <Gender />
        </div>
    )
}