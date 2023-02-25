import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Image from "../../components/ui/Image";

import { Gi3DGlasses, GiAirplaneDeparture, GiHand } from "react-icons/gi";



function App() {
    return (
      <div className="app">
       <h1> i am App</h1>
       <section className="section">
        <h2> i am testing buttons:</h2>
          <Button className={''}>click</Button>
          <Button disabled ></Button>
        

       </section>
       <section className="section">
          <h2> i am testing input:</h2>
         <Input id={'name'}/>
         <Input id={'sore name'} className="br-5 border"/>
       </section>
       
       <section className="section">
       <h2> i am testing images:</h2>
         <Image width={1750} 

                className="w-100"
                src={require('../../img/boiga-snake-ready-to-attack-boiga-dendrophila-animal-closeup.jpg')} 
                />
         <Image width={100} 
                circle 
                />
         <Image width={300} 
                heigth={300} 
                />
       </section>
       <section className="section">
       <h2> i am testing icon:</h2>
          <Gi3DGlasses size="40px" onClick={()=>{console.log('!!!')}}/>
          <Button disabled ><Gi3DGlasses size="28px"  /> text  </Button><br/>
          <span><GiAirplaneDeparture/> airplane</span><br/>
          <span><GiHand/> Hand</span><br/>
          
       </section>
       </div>
    );
  }
  
  export default App;
  


