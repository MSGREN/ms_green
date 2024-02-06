function Button(props) {
  return (
    <div className="px-0">
<<<<<<< HEAD
     <button className="ring-1 bg-green-900 ring-lime-500 group-hovering:ring-1 transition duration-300 text-white px-4 py-2 m-2 md:text-sm rounded md:font-sm hover:ring-white">
=======
      <button className="ring-1 bg-green-950 ring-lime-500 group-hovering:ring-1 transition duration-300 ease-in-out hover:translate-y-1 hover:scale-110 text-white px-3 py-2 m-2 md:text-sm rounded md:font-sm hover:ring-white">
>>>>>>> origin/master
        {props.children}
      </button>
      
    </div>
   
  )
}

export default Button