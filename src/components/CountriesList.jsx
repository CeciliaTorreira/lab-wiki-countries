import { Link } from "react-router-dom"

function CountriesList({countries}) {  
  return (
    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
    <div className="list-group">

        {countries.map((eachCountry, index) => {
            //console.log(eachCountry) //Funciona
            return (
            
                <Link className="list-group-item list-group-item-action d-flex flex-column align-items-center" key={eachCountry.name} to={`/${eachCountry.alpha3Code}`}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="Country flag" width={50}/>
                {`${eachCountry.alpha2Code} - ${eachCountry.name.common}`}

                </Link>
                //La consola no para de darme error respecto a las keys diciendo que hay alguna key repetida
                // Intento arreglarlo pero no lo consigo, esperare a terminar el lab 
            )
        }) }
    </div>
</div>

  )
}

export default CountriesList