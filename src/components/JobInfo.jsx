import JobDuties from "./JobDuties"



const JobInfo = ({job, currentItem}) => {

    let {title, company, dates, duties} = job[currentItem];
    
    // console.log(duties);

  return (

   <article className="job-info">

      <h3>{title}</h3>

      <span className="job-company">{company}</span>

      <p className="job-date">{dates}</p>
      
      <JobDuties duties={duties} />

   </article>

  )
}
export default JobInfo