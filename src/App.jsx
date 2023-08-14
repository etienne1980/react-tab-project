import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Breadcrumbs from "./components/Breadcrumbs";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = 'https://course-api.com/react-tabs-project';



const App = () => {
  
  // states
 let [job, setJob] = useState([]);

 let [isLoading, setIsLoading] = useState(true);
 let [isError, setIsError] = useState(false);

  //  state identify the current item (in this case the company I work for)
 let [currentItem, setCurrentItem] = useState(0);


  //  function responsible for fetching the data

 let getData = async () =>{

  try {

    let res = await fetch(url)

    if(!res.ok){
      setIsError(true)
      setIsLoading(false)
      return
    }

    let data = await res.json();
    // console.log(data);
    setJob(data);
    setIsLoading(false)
    
  } catch (error) {
    setIsError(true);
    console.log(error);
  }
 }

 useEffect(()=>{
    getData();
 },[])



 if(isLoading){
  return (
      <section className="jobs-center">
        <Loading/>
      </section>
  )
 };

 if(isError){
  return (
    <p>Network error, Please try again later</p>
  )
 }

// console.log(job);


 return (
  
  <main>
     <Breadcrumbs/>

    <section className="jobs-center">

        {/* passing down as a prop job array, current item state var and state function */}
      <BtnContainer job={job} currentItem={currentItem} setCurrentItem={setCurrentItem}/>

      <JobInfo job={job} currentItem={currentItem}/>

    </section>
  </main>
  

  
 )  




};
export default App;

    