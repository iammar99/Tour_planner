import Index from 'Pages/Routes';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.scss';
import ScreenLoader from 'Components/Screen Loader/ScreenLoader';
import { useState } from 'react';

function App() {

  const [isApploading , setIsAppLoading] = useState(true)

  setTimeout(()=>{
    setIsAppLoading(false)
  },1000)


  
  if (isApploading) return <ScreenLoader />
  else return <Index />
  return (
    <>


    </>
  );
}

export default App;
