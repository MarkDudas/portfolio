import { Link } from "react-router-dom"

const NotAvailable = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">

    <h1 className="mr-0.5 text-blue-950 text-2xl">This page is not NotAvailable go back to </h1>  <Link to='/' className="text-red-700 text-2xl"> Home</Link>
    </div>
  )
}

export default NotAvailable
