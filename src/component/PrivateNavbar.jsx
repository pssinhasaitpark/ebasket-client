import React from 'react'
import { useEffect , useState } from 'react'
import {  Col, } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import search from '../asset/images/search.svg'
import user from '../asset/images/user.svg';
import phone from '../asset/images/phone.svg'
import home from '../asset/images/home.svg'
import offer from '../asset/images/discount.png'
import shopping from '../asset/images/shopping-cart.svg';
import glob from '../asset/images/globe.svg'
import downarrow from '../asset/images/chevron-down.svg'
// import GooglePlacesAutocomplete from 'react-google-autocomplete';
import '../layout/Header.css'
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  signOut } from '../store/slices/authSlice';
// import { addToCart, removeFromCart, updateCartQuantity } from '../store/slices/cart-slice';


const PrivateNavbar = () => {
  const dispatch = useDispatch();

    const username = useSelector((state) => state.auth.username); // Get username from Redux
    console.log("username-",username);
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
    const [totalQuantity, setTotalQuantity] = useState(0);
    // const [totalSum, settotalSum] = useState(0);
    // const { totalQuantity } = useSelector(state => state.cart);

    // console.log('Total quantitities', totalQuantity);
    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    
    const handleSignOut = () => {
      dispatch(signOut());
    };
    

const updateCartQuantity = () => {
  const totalQuantity = cart.reduce((acc, item) => {
    return acc + (item.quantity + (item.variantQuantity || 0));
  }, 0);
  setTotalQuantity(totalQuantity);

  const totalSum = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  localStorage.setItem("totalQuantity", totalQuantity);
  localStorage.setItem("totalSum", totalSum);
};

useEffect(() => {
 
  updateCartQuantity();

  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

const updateCart = (newItem) => {
  setCart(prevCart => [...prevCart, newItem]);
};

const removeItemFromCart = (itemId) => {
  setCart(prevCart => prevCart.filter(item => item.id !== itemId));
};


  return (
   <>
     <Col lg={7} className='col-2 pe-0'>
                    <div className='d-flex align-items-center  justify-content-end pt-2 pr-0'>

                      <ul className="navbar-menu navbar-nav  mb-lg-0">
                        <li className="nav-item">
                          <div className='d-flex align-items-center me-2'>
                            <div>
                              <img src={search} alt="" />
                            </div>
                            <Link to={'/search'} className="nav-link " activeClassName="active">
                              Search
                            </Link>
                          </div>
                        </li>
                        <li className="nav-item ">
                          <div className='d-flex align-items-center me-2'>

                            <div>
                              <img src={offer} alt="" />
                            </div>
                            <Link to={"/offers"} className="nav-link " activeClassName="active">
                              Offers
                            </Link>
                          </div>
                        </li>


                        <li className="nav-item">

                          <div className='dropdown-container d-flex align-items-center me-2'>
                            <a href="#">
                              <div className='item-image '>
                                <img src={user} alt="" />
                              </div>
                            </a>

                            <Link to={'/profile'} className="nav-link " activeClassName="active">
                            Hii <span>{username || 'Guest'}</span>
                            </Link>



                          </div>

                        </li>

                        <li className="nav-item ms-1">
                          <div className='main-div'>
                            <div className="dropdown-container">


                              {/* Down Arrow Icon */}
                              <div className="dropdown-icon">
                                <a href="#">
                                  <img src={downarrow} alt="" />
                                </a>
                                {/* Dropdown Menu */}
                                <div className='dropdown-menuu'>
                                  <Link href="" to={'/profile'} >My Account</Link>
                                  <Link href="" to={'/notification'} >Notification</Link>
                                  <Link href="" to={'/support'} >Delivery Support</Link>
                                  <Link href="" to={'/contactus'}  >Contact Us</Link>
                                  <Link href="" to={'/aboutus'} >About us</Link>
                                  <Link href="" to={'/help'} >Help</Link>
                                  <Link href="" to={'/terms'} >Term of use</Link>
                                  <Link href="" to={'/privacy'} >Privacy policy</Link>
                                  <Link href="" to={'/refund'} >Refund policy</Link>
                                  <Link href="" to={'/login'} onClick={handleSignOut}>Logout</Link>


                                </div>
                              </div>
                            </div>

                          </div>

                        </li>

                        <li className="nav-item">
                          <div className='d-flex align-items-center me-2'>
                            <div>
                              <img src={shopping} alt="" />
                            </div>
                            <Link to={"/checkout"} className="nav-link " activeClassName="active">
                              Cart
                              {totalQuantity > 0 && (
                              <span
                                className="badge rounded-circle count-badge"
                                style={{ top: '-10px', fontSize: '12px', padding: '5px 10px' }}
                              >
                                {totalQuantity}
                              </span>
                            )}
                                                            {/* {totalQuantity} */}

                            </Link>
                          </div>
                        </li>

                        <li className="nav-item">
                          <div class="dropdown d-flex align-items-center text-dark me-2">
                            <div>
                              <img src={glob} alt="" />
                            </div>
                            <div className='ms-2'>
                              <button className="language-btn btn dropdown-toggle ps-0 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className='text-secondary'>
                                  English
                                </span>
                              </button>
                              <ul className="language dropdown-menu m-0 p-0">
                                <li><a className="dropdown-item m-0  " href="#">English</a></li>
                                <li><a className="dropdown-item m-0" href="#">Arabic</a></li>

                              </ul>
                            </div>
                          </div>
                        </li>

                        <div>

                          <Button onClick={handleShow} className='hemburger-button bg-transparent border-0'>
                     
                            <div className={`hamburger1 ${show ? 'open' : ''}`}>
                              <div class="top"></div>
                              <div class="meat"></div>
                              <div class="bottom"></div>
                            </div>
                          </Button>
                          <Offcanvas show={show} onHide={handleClose}  >
                            <Offcanvas.Header closeButton >
                              <Offcanvas.Title className='text-white'>eBasket</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='p-0'>
                              <div>
                                <ul class="link-group p-0 ">
                                  <li class="list-group-item  border-bottom">
                                    <Link to={'/'} class="link1" onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={home} alt="" />
                                        </div>
                                        <span>

                                          Home Page
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li class="list-group-item  border-bottom" >
                                    <Link to={'/orders'} class="link1" href="" onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={home} alt="" />
                                        </div>
                                        <span>

                                          My Orders
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li class="list-group-item  border-bottom">
                                    <Link to={'/transaction'} class="link1" href="" onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={home} alt="" />
                                        </div>
                                        <span>

                                          My Transactions
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li class="list-group-item  border-bottom">
                                    <Link to={'/favorite-products'} class="link1" href="" onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={home} alt="" />
                                        </div>
                                        <span>

                                          Favorite items
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li class="list-group-item  border-bottom">
                                    <Link to={'/delivery-address'} class="link1" href="" onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={home} alt="" />
                                        </div>
                                        <span>

                                          Address Book
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li class="list-group-item  border-bottom">
                                    <Link to={'/profile'} class="link1" href="" onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={home} alt="" />
                                        </div>
                                        <span>

                                          Profile
                                        </span>
                                      </div>
                                    </Link>
                                  </li>
                                  <li class="list-group-item border-bottom">
                                    <Link to={'/contactus'} class="link1 " href="" onClick={handleClose}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={user} alt="" />
                                        </div>
                                        <span>

                                          Contact Us
                                        </span>
                                      </div>
                                    </Link>
                                  </li>

                                  <li class="list-group-item  border-bottom"onClick={handleClose}>
                                    <Link class="link1 " href=""  to={'/login'} onClick={handleSignOut}>
                                      <div className='link1-div'>
                                        <div className='image'>
                                          <img src={user} alt="" />
                                        </div>
                                        <span>

                                          Logout
                                        </span>
                                      </div>
                                    </Link>
                                  </li>




                                  <li class="list-group-item border-bottom">
                                    <div className='version py-5'>
                                      <span >
                                        <p >V:2.1</p>
                                      </span>
                                    </div>
                                  </li>
                                </ul>


                                <ul className='sidebar-bottom d-flex position-absolute bottom-0 border-top w-100  p-0 mb-0'>
                                  <li class="bottom list-group-item text-center w-50 p-2">
                                    <Link to={'/'} href="" className='text-decoration-none  text-secondary text-center' onClick={handleClose}>
                                      <div className='bottom-home position-relative'>
                                        <div className=''>
                                          <img src={home} alt="" />
                                        </div>

                                        <p >
                                          Home
                                        </p>

                                      </div>
                                    </Link>
                                  </li>

                                  <li class="bottom list-group-item text-center w-50 p-2">
                                    <Link to={'/help'} href="" class=" text-decoration-none text-secondary text-center " onClick={handleClose}>

                                      <div className='position-relative'>
                                        <div>
                                          <img src={phone} alt="" />
                                        </div>

                                        <p>
                                          Help
                                        </p>


                                      </div>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </Offcanvas.Body>
                          </Offcanvas>
                        </div>
                      </ul>
                    </div>
                  </Col>
   </>
  )
}

export default PrivateNavbar;