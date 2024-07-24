
import { useContext, useEffect } from 'react'
import './App.css'
import Routing from './Routing'
// import CarouselEffect from './components/Carousel/Carousel'
// import Category from './components/Catagory/Category'
// import Header from './components/Header/Header'
// import Product from './components/Product/Product'
 import { Type } from './Utility/action.type'
 import { auth } from './Utility/firebase'
 import { DataContext } from './components/DataProvider/DataProvider'


function App() {
  const [{user}, dispatch] = useContext(DataContext);

  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // console.log(authUser)
        dispatch({
          type:Type.SET_USER,
          user: authUser
        })
      }
      else{
          dispatch({
            type:Type.SET_USER,
            user:null
          });
        }
  //     
    });
  }, [])

  return <Routing />;
    {/* <Header />
    <CarouselEffec t />
    <Category />
    <Product /> */}
  
  
}
 
export default App
