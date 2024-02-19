import './App.css'

const numberButtonClasses = 'btn btn-info w-100'
const operatorButtonClasses = 'btn btn-warning w-100'
const specialButtonClasses = 'btn btn-danger w-100'

function App() {
    return (
      <di>
        <h1>Calculator</h1>
        <hr />
        <table className="center">
          <tbody>
            <tr>
              <td className='text-end' colSpan={4}>
                <h2>0</h2>
              </td>
            </tr>
  
            <tr>
              <td>
              <button 
                className={specialButtonClasses} type='button'
                >C</button>
              </td>
              
              <td>
              <button 
                className={specialButtonClasses} type='button'
                >{'<<'}</button>
              </td>

              <td>
              <button 
                className={operatorButtonClasses} type='button'
                >%</button>
              </td>
              
              <td>
              <button 
                className={operatorButtonClasses} type='button'
                >/</button>
              </td>
            </tr>
  
            <tr>
              <td>
              <button 
                className={numberButtonClasses} type='button'
                >7</button>
              </td>
              
              <td>
              <button 
                className={numberButtonClasses} type='button'
                >8</button>
              </td>

              <td>
              <button 
                className={numberButtonClasses}type='button'
                >9</button>
              </td>
              
              <td>
              <button 
                className={operatorButtonClasses} type='button'
                >x</button>
              </td>
            </tr>
  
            <tr>
              <td>
              <button 
                className={numberButtonClasses} type='button'
                >4</button>
              </td>
              
              <td>
              <button 
                className={numberButtonClasses} type='button'
                >5</button>
              </td>

              <td>
              <button 
                className={numberButtonClasses} type='button'
                >6</button>
              </td>
             
              <td>
              <button 
                className={operatorButtonClasses} type='button'
                >-</button>
              </td>
            </tr>
  
            <tr>
              <td>
              <button 
                className={numberButtonClasses} type='button'
                >1</button>
              </td>
              
              <td>
              <button 
                className={numberButtonClasses} type='button'
                >2</button>
              </td>
              
              <td>
              <button 
                className={numberButtonClasses} type='button'
                >3</button>
              </td>
              
              <td>
              <button 
                className={operatorButtonClasses} type='button'
                >+</button>
              </td>
            </tr>
  
            <tr>
              <td className='text-center' colSpan={2}>
                <button 
                className={numberButtonClasses} type='button'
                >0</button>
              </td>
              
              <td>
                <button 
                className={numberButtonClasses} type='button'
                >.</button>
              </td>

              <td>
              <button 
                className={specialButtonClasses} type='button'
                >=</button>
              </td>

            </tr>
          </tbody>
        </table>
            </di>
    )
}

export default App