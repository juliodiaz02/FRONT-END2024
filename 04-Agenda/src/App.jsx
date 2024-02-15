import ListItem from "./ListItem"

const personas = [
  {
    nombre: 'Julio',
    direccion: 'Tuxtepec, Oaxaca',
    telefono: '2871617080',
    correo: 'julio_diaz720@gmail.com'
  },
  {
    nombre: 'Luz',
    direccion: 'Tuxtepec, Oaxaca',
    telefono: '2871751120',
    correo: 'luz_duran20@gmail.com'
  },
  {
    nombre: 'Cristiano',
    direccion: 'Madrid, España',
    telefono: '2871182523',
    correo: 'cristiano_cr7@gmail.com'
  }
]

function App() {

  return (
    <div>
      <h1>Agenda</h1>
      <hr />
      <ul>
        {
          personas.map((persona) => (
           <ListItem
           key={persona.correo}
           nombre={persona.nombre}
           direccion={persona.direccion}
           telefono={persona.telefono}
           correo={persona.correo}
           />
         
          ))
        }
      </ul>
    </div>
    
  )
}

export default App