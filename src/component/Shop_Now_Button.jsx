import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function ShopNow() {
    return (
        <Link to={'/productlist'}>
            <Button className='shopnow-button' variant="primary" >Shop Now</Button>
        </Link>
    )
}

export default ShopNow;