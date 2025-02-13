import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Viewall(){
    const navigate = useNavigate();
    return(
<Button className='viewall-button' variant="primary" onClick={()=> navigate('/productlist') }>See All</Button>
)}
export default Viewall;