import './App.css';

function App() {
  return (
    <div className=" flex bg-back w-screen h-screen font-poppins">
    <div className="container mx-auto bg-surface shadow border p-8">
      <div className="container h-48 flex justify-around">
        <div className="flex gap-8">
        <button className="btn" >LEARN</button>
        <button className="btn">BLOG</button>
        <button className="btn">BOOKMARKS</button>
        <button className="btn">UI KIT</button>
        <button className="btn">LAIN NYA</button>
        </div>
        <div className="flex">
        <button className="btn" >teste</button>
        </div>
        
      </div>
      <div className="border-y-2 center border-gray-200">
        <p className="text-base font-black text-10xl text-center h-48 flex justify-center items-center">
          THE BLOG
        </p>
      </div>
    </div>
    </div>
  );
}

export default App;
