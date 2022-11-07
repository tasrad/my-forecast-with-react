import './Search.css';


export default function Search(){
    return(
        <div className="Search">
            <form >
          <input
            type="text"
            placeholder="Enter your city..."
            autoFocus="on"
            className="input-search"
          />

          <button type="submit" className="btn-search">
            Search
          </button>
          <button type="submit" className="btn-current">
            Current
          </button>
        </form>
        </div>
    )
}