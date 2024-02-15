import ListItem from "./Listitem.jsx"
const links = [
  {
    name: 'Google',
    url: 'https://www.google.com'
  },
  {
    name: 'Facebook',
    url: 'https://www.Facebook.com'
  },
  {
  name: 'Youtube',
    url: 'https://www.YouTube.com'
  }
]
function App() {
  
  return (
    
      <div>
        <h1>Catálogo de links</h1>
        <hr/>
        <ul>
          {
            links.map((link)=> (
              <ListItem 
              key={link.name}
              name={link.name}
              url={link.url}
              />
                   
              //<li key={link.name}>
               // <a href={link.url} >{link.name}</a>
             // </li>
            ))
            }
        </ul>
      </div>
     
    
  )
}

export default App