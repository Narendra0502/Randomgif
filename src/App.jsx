import Tag from './components/Tag';
import Random from './components/Random';
export default function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center  overflow-x-hidden background">
      <h1 className="bg-white w-11/12 rounded-xl text-center mt-[40px] ml-[25px] mr-[25px] 
        text-45xl px-10 mx-auto font-bold py-2"> RANDOM GIFS</h1>

       <div className="flex flex-col  w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>

       </div>
    </div>
  )
}
