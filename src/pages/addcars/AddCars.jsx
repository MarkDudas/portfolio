import { Link } from "react-router-dom"

const AddCars = () => {
  return (
    <div className=" bg-whiteh-screen flex flex-row justify-center items-center">

        <h1 className="mr-1">This is add cars</h1>
        
      <Link to='/cars'>
        Back
      </Link>
    </div>
  )
}

export default AddCars
