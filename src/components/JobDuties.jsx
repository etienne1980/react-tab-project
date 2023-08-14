import {FaAngleDoubleRight} from 'react-icons/fa'

// using uuid library (alias) for the id
import { v4 as uuidv4 } from 'uuid';

const JobDuties = ({duties}) => {


  return (
    <div>
        {duties.map((duty)=>{

            // using the uuid id and assigning it to a variable
            let id = uuidv4();
            // console.log(id);

            return (
              // using the id variable which has been built with the uuid (so that I avoided using the index)
              
                <div className='job-desc' key={id}> 
                    <FaAngleDoubleRight className='job-icon'/>
                    <p>{duty}</p>
                </div>
            )
        })}
    </div>
  )
}
export default JobDuties