import { Outlet } from "react-router-dom";
// import { useRef , useEffect, useState, createContext    } from "react";
import Footer from '../../components/Footer'
import Header from '../../components/Header'

// const UserContext = createContext(App)

function App() {
  // const contentWrapperRef = useRef(null);
  // const [isScrollingEnabled, setIsScrollingEnabled] = useState(true)

  // const handleScrolling = (event) => {
  //   if (isScrollingEnabled) return;
  //   event.preventDefault();
  //   event.stopPropagation();  
  //   console.log('scrolling is disabled')  

  // }

  // useEffect(()=> {
  //   const contentWrapper = contentWrapperRef.current;
  //   contentWrapper.addEventListener('wheel', handleScrolling);
  //   return () => contentWrapper.removeEventListener('wheel', handleScrolling );

  // });

    return ( 
      // <div ref={contentWrapperRef}>
      <>
      <Header/>
      <Outlet/>  
       {/* context={{setIsScrollingEnabled} } */}
      <Footer/>
      {/* </div> */}
      </>
    );
  }
  
  export default App;
  


