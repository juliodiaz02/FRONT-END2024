const persona = {
  nombre: 'Julio Galan Diaz',
  edad: 21,
  nacimiento: '09-01-2002',
  lugar_de_nacimiento: 'Tuxtepec, Oaxaca',
  profesion: 'Estudiante',
  pasatiempos: [
    'Dormir :(',
    'Leer',
    'Ver series',
    'ver peliculas',
    'Hacer investigaciones sobre programación',
    'Jugar Futbol'
    ]
}


function App() {
  return (
    <>
    <div>
      <h1>Información Personal</h1>
      <hr />
      <ul>
      <li>Nombre: {persona.nombre}</li>
      <li>Edad: {persona.edad}</li>
      <li>Fecha de nacimiento: {persona.nacimiento}</li>
      <li>Lugar de nacimiento: {persona.lugar_de_nacimiento}</li>
      <li>Profesión: {persona.profesion}</li>
      <li>Pasatiempos:
        <ul>
          {
          persona.pasatiempos.map((pasatiempos) => {
          return <li key= {pasatiempos}>
          {pasatiempos}
          </li>    
          })
          }

          {/*
        <li>{persona.pasatiempos[0]}</li>
        <li>{persona.pasatiempos[1]}</li>
        <li>{persona.pasatiempos[2]}</li>
        <li>{persona.pasatiempos[3]}</li> */}
        </ul>
      </li>
      </ul>
    </div>
        
    </>
  )
}

export default App