import React from 'react'
import PlateLogo from '../imgs/logoMe.png'

const Header = () => {
  return (
    <header>
        <a href='/Portfolio'><img src={PlateLogo} alt="" width="150px" /></a>
        <ul>
            <li><a href='#about-me'><i class="fa-solid fa-info"></i><span> About Me</span></a></li>
            <li><a href='#project'><i class="fa-solid fa-list-check"></i><span> Project</span></a></li>
            <li><a href="mailto:nouarioualid1@gmail.com"><button><i class="fa-solid fa-envelope" style={{marginRight: '10px'}}></i><span>Contact Us</span></button></a></li>
        </ul>
    </header>
  )
}

export default Header