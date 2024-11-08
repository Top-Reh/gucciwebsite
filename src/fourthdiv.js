import React,{useState} from 'react'
import { gucciservicesdata } from './gucciservices';

const Fourthdiv = () => {
  const [isHover,setHover] = useState(false);
  const [linkhover,setLinkHover] = useState()

    function hoverfun() {
        if (isHover === false) {
            setHover(true)
        } else {
            setHover(false)
        }
    }

  return (
    <div className='fourthdiv'>
      <h4>FEATURED THIS SEASON</h4>
      <div className='videosndstories'>
        <img src='https://media.gucci.com/content/DiaryArticleSingle_Standard_1536x2150/1730108779/DiaryArticleSingle_Gucci-GiftGiving-Oct24-ASE-240720-0010-1702_001_Default.jpg'></img>
        <div className='storiesfacts'>
          <h1>Chapter 1: Stories from The Savoy</h1>
          <p>Introducing the first installment from the new holiday campaign envisioned by
          <br></br>Creative Director Sabato De Sarno.</p>
          <a href='https://www.gucci.com/us/en/st/stories/article/gucci-gift-stories-from-the-savoy' className='lineover storiesline' onMouseEnter={hoverfun} onMouseLeave={hoverfun}>READ MORE
            <span className='line' style={{width:isHover ? '100%' : '0',right:isHover ? '0' : '50%',left:isHover ? '0' : '50%',backgroundColor:'black',height:'0.5px'}}></span>
          </a>
        </div>
      </div>
      <div className='maywehelpu'>
        <h2>May we help you?</h2>
        <p>Explore the collection with our Client Advisors and find perfect gifts for your loved ones.</p>
        <button>+ Contact Us</button>
      </div>
      <div className='gucciservices'>
        <h1>GUCCI SERVICES</h1>
        <div className='videoloop'>
          {
            gucciservicesdata.map((items,index) => (
              <div className='videooneloop' key={index}>
                <video autoPlay loop muted preload="auto"><source src={items.video}></source></video>
                <h2>{items.title}</h2>
                <p>{items.description}</p>
                <a href='https://www.gucci.com/us/en/nst/collect-in-store' id={index} className='lineover storiesline' onMouseEnter={() => setLinkHover(index)} onMouseLeave={() => setLinkHover()}>{items.buttontxt}
                  <span className='line' style={{width:linkhover === index ? '100%' : '0',right:linkhover === index ? '0' : '50%',left:linkhover === index ? '0' : '50%',backgroundColor:'black',height:'0.5px'}}></span>
                </a>
              </div>
            ))
          }
        </div>
      </div>
      <div className='signupgucci'>
        <h3>Sign up for Gucci updates</h3>
        <p>Join us for the holiday season to find unique gifts and<br></br> discover the House's latest news.</p>
        <button>+ Subscribe</button>
      </div>
    </div>
  )
}

export default Fourthdiv
