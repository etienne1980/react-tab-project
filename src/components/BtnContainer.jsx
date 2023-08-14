
/* accessing all the props which have been passed down (array, state value and state function) */

const BtnContainer = ({job, currentItem, setCurrentItem}) => {

    // console.log(job);

    return (

        // mapping over the main array in order to display the buttons identifting the companies (item.company)

        // logic added: setCurrentItem(index) => when the button is clicked the value of the current item will pass the index as an argument ... meaning that the job array is an array of 3 items (0, 1, 2 indexes) so if I click on the third button I will pass the index of 2 as an argument making the current state item as 2

        // then, in this case index which is 2 === the current item and the ternary operator will return 'job-btn active-btn' which in turn will be passed as the class name to the button (identifying which is the active button the user clicked on)

        <div className="btn-container">
            {job.map((item, index)=>{

                let result = index === currentItem ? 'job-btn active-btn' : 'job-btn';

                return <button onClick={()=>{setCurrentItem(index)}} className={result} type="button" key={item.id}>{item.company}</button>
            })}
    </div>
  )
}
export default BtnContainer