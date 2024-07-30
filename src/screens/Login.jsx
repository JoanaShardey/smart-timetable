import React from 'react'

function Login() {
  return (
    <div className="flex items-center justify-center bg-[url('/src/assets/Background.jpg')] p-0 w-[100%] h-[100vh] flex-col">
       <img className='absolute top-0'  src='/src/assets/knust.png'/>
        <p className="text-green-800 text-[60px] font-semibold m-0">User Login</p>

        <form className="flex flex-col ">
            <label>Email:</label>
            <input type='email' className='border-2 w-[250px] h-[40px] border-black rounded-md mb-4' />
            <label>Password:</label>
            <input type='password' className='border-2 w-[250px] h-[40px] border-black rounded-md' />
            <button className="h-10 rounded -md mt-4 text-white text-[20px] bg-green-800 cursor-pointer" type="submit">Login</button>
        </form>

    </div>
  )
}

export default Login