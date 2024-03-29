import {FaChevronRight,FaHome} from 'react-icons/fa'


const TITLE = 'Tabs'

const Breadcrumbs = () => {
  return (
    <div className='bc'>

        <a href="https://my-work-expression.netlify.app/">
            <FaHome className='home-icon'/>
        </a>

        <FaChevronRight className='bc-chevron'/>
        
        <a href="https://my-work-expression.netlify.app/react#project">React Projects</a>

        <FaChevronRight className='bc-chevron'/>

        <span>{TITLE}</span>

    </div>
  )
}
export default Breadcrumbs