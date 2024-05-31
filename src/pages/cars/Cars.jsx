import { Link} from "react-router-dom";

const Cars = () => {
  return (
 
    <div className="bg-white h-screen flex items-center justify-center flex-col">
        <div className="">
              <h1>This is cars</h1>
              <div>
              <Link to='/cars/1'>
                View Car 1
              </Link>
              </div>
              <div>
              <Link to='/cars/2'>
                View Car 2
              </Link>
              </div>
             <div>
             <Link to='/cars/3'>
                View Car 3
              </Link>
             </div>

              <Link to='/cars/addcars'>
                Addcars
           </Link>
        </div>
    </div>
  );
}

export default Cars;
