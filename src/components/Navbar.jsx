import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import '../assets/css/layout.css';
import logo from '../assets/img/logo.svg';
import home from '../assets/img/offcanvas/home.png';
import all from '../assets/img/offcanvas/all.png';
import card from '../assets/img/offcanvas/card.png';
import casino from '../assets/img/offcanvas/casino.png';
import chicken from '../assets/img/offcanvas/chicken.png';
import esport from '../assets/img/offcanvas/esport.png';
import fish from '../assets/img/offcanvas/fish.png';
import hot from '../assets/img/offcanvas/hot.png';
import lottery from '../assets/img/offcanvas/lottery.png';
import sport from '../assets/img/offcanvas/sport.png';
import slot from '../assets/img/offcanvas/slot.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='navbar py-3 px-2 sm:px-5 '>
      <NavLink to={'/'}>
      <img src={logo} className='logo' />
      </NavLink>
      <div className='d-flex align-items-center'>
          <NavLink to={'/register'} className="me-2 registerBtn">
            Register
          </NavLink>
        <NavLink to={'/login'} className="loginBtn">
          Login
        </NavLink>
        <span className='ms-4' onClick={handleShow}>
        <HiOutlineMenuAlt2 size={40} style={{color:'#214061'}}  />
      </span>
       <SideMenu show={show} handleClose={handleClose} />
      </div>
      
    </div>
  )
}

export default Navbar

export const SideMenu=({show,handleClose})=>{
  const sideMenus=[
    {id:1,img:home,link:'/',title:'ရှေ့စာမျက်နှာ'},
    {id:2,img:all,link:'/',title:'အားလုံး'},
    {id:3,img:hot,link:'/',title:'ဟော့ဂိမ်းများ'},
    {id:4,img:slot,link:'/',title:'စလော့'},
    {id:5,img:casino,link:'/',title:'LIVE Casino'},
    {id:6,img:sport,link:'/',title:'SPORT'},
    {id:7,img:card,link:'/',title:'ကဒ်ဂိမ်း'},
    {id:8,img:esport,link:'/',title:'Esports'},
    {id:9,img:lottery,link:'/',title:'ထီ'},

  ]
  return <Offcanvas className='offcanvas' placement='end' show={show} onHide={handleClose}>
  <Offcanvas.Header closeButton>
    
  </Offcanvas.Header>
  <Offcanvas.Body>
    {sideMenus.map((item)=>{
      return <div className='sideMenuItem' key={item.id}>
        <img src={item.img} />
        <p className='mt-3'>{item.title}</p>
      </div>
    })}
  </Offcanvas.Body>
</Offcanvas>
}
