import React from 'react'

const Inputfield = ({type,name,label,change,index,value,dis}) => {
  return (
    <div className="relative z-0 w-[90%] items-center bg-gray-900 group ">
      <input
        id={name}
        className="block py-2.5 px-2 w-full text-sm text-white bg-gray-900  border rounded-lg border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-violet-400 peer pl-2 focus:border-2"
        type={type}
        onChange={change}
        defaultValue={value}
        disabled={dis}
      />
      <label
        htmlFor="issuerEmail"
        className="peer-focus:font-medium absolute text-sm bg-gray-900 text-white font-semibold  duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-2 peer-focus:text-violet-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ml-2 pl-1 pr-3 "
        onClick={() => document.getElementById('issuerEmail')?.focus()}>
        {label}
      </label>

</div>
  )
}

export default Inputfield
