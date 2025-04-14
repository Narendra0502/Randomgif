import React, { useEffect, useState } from 'react'
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState('');
  const [loading,setload]=useState('false');
  /*async function fetchData(){
   setload(true);
    const url;
    const output=await axios.get(url);
    console.log(output);
    setload(false);
  }
  useEffect( ()=>{
    fetchData();
},[])*/
  function clickHandler(){
      /*fetchData();*/
  }
  return (
    <div className='w-1/2  bg-green-500 rounded-md
     flex flex-col items-center gap-y-5 mt-[15px] border border-black'>
      <h1 className="text-3xl mt-[15px] underline uppercase font-bold">Random Gif</h1>
     
   {/*   loading?(<spinner/>):(<img src={gif} widht="450"/>) */}
       
      
      <button onClick={clickHandler} className="w-10/12 mb-[15px] bg-yellow-500 text-lg py-2 px-8 rounded-lg">
        Generate 
      </button>
    </div>
  )
}

export default Random
