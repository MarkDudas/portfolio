import { useParams, Link } from "react-router-dom"


const CarsPage = () => {
  
const {id} = useParams();
  return (
    <div className="bg-white h-screen flex items-center justify-center flex-row">
      <h1 className="mr-1"> This is car page of {id}  </h1>  
      <Link to='/cars'>Back</Link>
    </div>
  )
}

export default CarsPage
