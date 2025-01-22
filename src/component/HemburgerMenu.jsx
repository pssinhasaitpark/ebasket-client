import React from 'react'
import './HemburgerMenu.css'
import Logo from '../asset/images/logo_web.png'
const HemburgerMenu = () => {
    return (
        <>
            <section class="p-menu1">
                <nav id="navbar" class="navigation" role="navigation">
                    <input id="toggle1" type="checkbox" />
                    <label class="hamburger1" for="toggle1">
                        <div class="top"></div>
                        <div class="meat"></div>
                        <div class="bottom"></div>
                    </label>

                    <nav class="menu1">
                        <div className='fw-bold float-start fs-1 '>
                            <img src={Logo} alt="" />
                        </div>
                        <a class="link1" href="">Our Models</a>
                        <a class="link1" href="">Specialties</a>
                        <a class="link1" href="">About</a>
                        <a class="link1" href="">Blog</a>
                        <a class="lin1 kbutton-nav" href="">Contact</a>
                    </nav>
                </nav>
            </section>

        </>
    )
}

export default HemburgerMenu
