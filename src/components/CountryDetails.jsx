import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  //! Pensé en adquirir la información directamente del JSON pero ya la tenemos en App.js y pensé en pasarla como props aquí
  //Estoy intentando coger la costumbre de destructurar para asi poder reducir código aunque a veces sigo liándome un poco

  const { alpha3Code } = useParams(); // No sé si será correcto así pero estamos obteniendo el enlace en base a su alpha3Code
  // En el lab ponía como ejemplo del path =":id" pero lo cambié por alpha3Code
  console.log(alpha3Code); // Muestra el alpha3Code: funciona

  const [countryCode, setCountryCode] = useState(null);

  const getCountryCode = async () => {
    try {
      const chosenCountry = await countries.find((foundCountry) => {
        return foundCountry.alpha3Code === alpha3Code;
      });

      // Miré el JSON y al principio no conseguía sacar la informacion que quería así que comparé el alpha3code de cada país del JSON
      // con el alpha3Code del país del que estoy obtebiendo los parametros de la URL o así lo he entendido yo al menos
      console.log(chosenCountry); // Funciona
      setCountryCode(chosenCountry);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountryCode(); // Invocamos funcion asíncrona de arriba para recibir el código del país
  }, [alpha3Code]);

  if (countryCode === null) {
    return (
      <div>
        <h4>Loading data</h4>
      </div>
    );
  }
  return (
    <div className="col-7">
      <h1>{countryCode.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            {/* REMINDER: ADAPTAR ESTILOS A JSX AL COPIARLOS DE EXAMPLE.HTML */}
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryCode.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryCode.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryCode.borders.map(() => {
                  return (
                    <li>
                      <Link to={`/${alpha3Code}`}></Link>
                      {/* Se renderiza a lista con cada frontera de cada país y se muestran con cada <li> pero no conseguí sacar el nombre de cada uno */}
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
