import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [scrollscreen, setScrollScreen] = useState(false);
  const [hoverMenu,setHoverMenu] = useState();
  const [closeMenuoptions,setCloseMenuOptions] = useState(false);

  // Function to handle scroll event
  function handleScroll() {
    if (window.scrollY > 10) {
      setScrollScreen(true);
    } else {
      setScrollScreen(false);
    }
  }

  // Add event listener on mount and remove on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (scrollscreen) {
    console.log('scrolling');
  }

  return (
    <div className='menu'
      style={{backgroundColor: scrollscreen ? 'white' : 'transparent'}}
    >
      <div className='contactusmenu'>
        <i className="bi bi-plus" style={{color:scrollscreen ? 'black' : 'white'}}></i>
        <h6 style={{color:scrollscreen ? 'black' : 'white'}}>Contact Us</h6>
      </div>
      <div className='guccilogo'>
        <img 
        style={{
          width: scrollscreen ? '10%' : '70%',
          top: scrollscreen ? '-20px' : '-100px',
          left: scrollscreen ? '45%' : '15%',
        }} 
        src='https://logos-world.net/wp-content/uploads/2020/04/Gucci-Logo.png' alt='Gucci Logo' />
      </div>
      
      <div className='menuicons' style={{color:scrollscreen ? 'black' : 'white'}}>
        <i className="bi bi-bag" style={{color:scrollscreen ? 'black' : 'white'}}></i>
        <i className="bi bi-person" style={{color:scrollscreen ? 'black' : 'white'}}></i>
        <i className="bi bi-search" style={{color:scrollscreen ? 'black' : 'white'}}></i>
        <i className="bi bi-list" style={{color:scrollscreen ? 'black' : 'white'}} onClick={() => setCloseMenuOptions(true)}></i>
        <span>MENU</span>
      </div>
      <div className='menuoptions' style={{width : closeMenuoptions === true ? '100%' : '0',opacity : closeMenuoptions === true? '1' : '0'}}>
        <div className='slidebar'>
          <button className='closemenubtn' onClick={() => setCloseMenuOptions(false)}><i className="bi bi-x-circle-fill"></i></button>
          <ul className='mainmennuUl'>
            <li onMouseEnter={() => setHoverMenu(1)} onMouseOut={() => setHoverMenu()}>Gifts<i class="bi bi-arrow-right-short" style={{width : hoverMenu === 1 ? '30px' : '0px',opacity : hoverMenu === 1 ? '1' : '0'}}></i></li>
            <li onMouseEnter={() => setHoverMenu(2)} onMouseOut={() => setHoverMenu()} >New In <i class="bi bi-arrow-right-short" style={{width : hoverMenu === 2 ? '30px' : '0px',opacity : hoverMenu === 2 ? '1' : '0'}}></i></li>
            <li onMouseEnter={() => setHoverMenu(3)} onMouseOut={() => setHoverMenu()} >Handbags <i class="bi bi-arrow-right-short" style={{width : hoverMenu === 3 ? '30px' : '0px',opacity : hoverMenu === 3 ? '1' : '0'}}></i></li>
            <li onMouseEnter={() => setHoverMenu(4)} onMouseOut={() => setHoverMenu()} >Travel <i class="bi bi-arrow-right-short" style={{width : hoverMenu === 4 ? '30px' : '0px',opacity : hoverMenu === 4 ? '1' : '0'}}></i></li>
            <li onMouseEnter={() => setHoverMenu(5)} onMouseOut={() => setHoverMenu()} >Women <i class="bi bi-arrow-right-short" style={{width : hoverMenu === 5 ? '30px' : '0px',opacity : hoverMenu === 5 ? '1' : '0'}}></i></li>
            <li onMouseEnter={() => setHoverMenu(6)} onMouseOut={() => setHoverMenu()} >Men <i class="bi bi-arrow-right-short" style={{width : hoverMenu === 6 ? '30px' : '0px',opacity : hoverMenu === 6 ? '1' : '0'}}></i></li>
            <li onMouseEnter={() => setHoverMenu(7)} onMouseOut={() => setHoverMenu()} >Children <i class="bi bi-arrow-right-short" style={{width : hoverMenu === 7 ? '30px' : '0px',opacity : hoverMenu === 7 ? '1' : '0'}}></i></li>
            <li onMouseEnter={() => setHoverMenu(8)} onMouseOut={() => setHoverMenu()} >Jewelry & Lifestyle <i class="bi bi-arrow-right-short" style={{width : hoverMenu === 8 ? '30px' : '0px',opacity : hoverMenu === 8 ? '1' : '0'}}></i></li>
            <li onMouseEnter={() => setHoverMenu(9)} onMouseOut={() => setHoverMenu()} >Decor & Lifestyle <i class="bi bi-arrow-right-short" style={{width : hoverMenu === 9 ? '30px' : '0px',opacity : hoverMenu === 9 ? '1' : '0'}}></i></li>
            <li onMouseEnter={() => setHoverMenu(10)} onMouseOut={() => setHoverMenu()} >Fragrances & Make-Up <i class="bi bi-arrow-right-short" style={{width : hoverMenu === 10 ? '30px' : '0px',opacity : hoverMenu === 10 ? '1' : '0'}}></i></li>
          </ul>
          <ul className='extraMenu'>
            <li onMouseEnter={() => setHoverMenu(11)} onMouseOut={() => setHoverMenu()}>Gucci Services<i class="bi bi-arrow-right-short" style={{width : hoverMenu === 11  ? '30px' : '0px',opacity : hoverMenu === 11 ? '1' : '0'}}></i></li>
            <li onMouseEnter={() => setHoverMenu(12)} onMouseOut={() => setHoverMenu()}>world of Gucci<i class="bi bi-arrow-right-short" style={{width : hoverMenu === 12 ? '30px' : '0px',opacity : hoverMenu === 12 ? '1' : '0'}}></i></li>
            <li onMouseEnter={() => setHoverMenu(13)} onMouseOut={() => setHoverMenu()}>Store Locator<i class="bi bi-arrow-right-short" style={{width : hoverMenu === 13 ? '30px' : '0px',opacity : hoverMenu === 13 ? '1' : '0'}}></i></li>
          </ul>
          <a href='#'>Sign In</a>
          <a href='#'>My Orders</a>
          <a href='#'>Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
