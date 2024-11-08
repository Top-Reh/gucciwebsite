import React,{useState,useEffect} from 'react'

const Firstads = () => {
    const [scrollscreen, setScrollScreen] = useState(false);
    const [isHover,setHover] = useState(false);

    function hoverfun() {
        if (isHover === false) {
            setHover(true)
        } else {
            setHover(false)
        }
    }
  function handleScroll() {

    const viewheight = window.innerHeight
    if (window.scrollY > viewheight) {
      setScrollScreen(true);
    } else {
      setScrollScreen(false);
    }
  }

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
    <div className='firstads' style={{position: scrollscreen ? 'relative' : 'sticky'}}>
      <div className='firsttext'>
        <h3>Gucci Gift</h3>
        <p>Chapter 1:Stories from The Savoy</p>
      </div>
      <div className='secondtext'>
        <p>
        Kendall Jenner and Jessica Chastain star in the first chapter of a four-part campaign to celebrate the holidays. Reaching deep into the House’s history and travel-infused origins, the first act mirrors The Savoy hotel in London where Guccio Gucci became inspired to establish his namesake atelier.
        </p>
        <a href='https://www.gucci.com/us/en/ca/gifts/gifts-for-women-c-gifts-for-her' className='lineover' onMouseEnter={hoverfun} onMouseLeave={hoverfun}>DISCOVER CUCCI GIFT
            <span className='line' style={{width:isHover ? '100%' : '0',right:isHover ? '0' : '50%',left:isHover ? '0' : '50%'}}></span>
        </a>
      </div>
        <img style={{position:'fixed'}} src='https://americanaatbrand.com/wp-content/uploads/2023/08/AAB_Gucci-Blog_1920x1080_1_Header.jpg'></img>
    </div>
  )
}

export default Firstads
