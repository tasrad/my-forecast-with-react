


export default function Search(){
    return(
        <div className="Search">
            <form >
          <input
            type="text"
            placeholder="Enter your city..."
            autoFocus="off"
          />

          <button type="submit" >
            Search
          </button>
          <button type="submit" >
            Current
          </button>
        </form>
        </div>
    )
}