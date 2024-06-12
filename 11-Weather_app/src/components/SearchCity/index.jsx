import { useForm } from "../../Hooks/useForm"

const SearchCity = ({cities, setCities}) => {
    const [values, handleInputChange, reset] = useForm ({
        city: ''
    })

    const handleSearchCity = () => {
        const newCities = [...cities, values.city]
        setCities(newCities)
        console.log(values.city)
        reset()
    }
    return (
        <div className="input-group">
            <span className="input-group-text">City</span>
            <input 
            type="text" 
            className="form-control" 
            id="city"
            name="city"
            onChange={handleInputChange}
            value={values.city}/>
            <button className="btn btn-primary"
            onClick={handleSearchCity}
             type="button">Search</button>
            
        </div>
    )
}

export default SearchCity