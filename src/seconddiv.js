import React,{useState} from 'react'
import { seconddivdata } from './seconddivdata';

const Seconddiv = () => {
    const [isClick,setClick] = useState(1);
  return (
    <div className='seconddiv'>
      <div className='giftsforwho'>
        <button onClick={() => setClick(1)} style={{color: isClick ===1 ? 'black' : 'rgb(83, 83, 83)'}}>Gifts for Her<span className='line' style={{width:isClick === 1 ? '100%' : '0',right:isClick === 1 ? '0' : '50%',left:isClick === 1 ? '0' : '50%'}}></span></button>
        <button onClick={() => setClick(2)} style={{color: isClick ===2 ? 'black' : 'rgb(83, 83, 83)'}}>Gifts for Him<span className='line' style={{width:isClick === 2 ? '100%' : '0',right:isClick === 2 ? '0' : '50%',left:isClick === 2 ? '0' : '50%'}}></span></button>
      </div>
      <div className='photocollection'>
        <div className='firstphotos'>
            <a href={isClick === 1 ? 'https://www.gucci.com/us/en/ca/women/handbags-c-women-handbags' : 'https://www.gucci.com/us/en/ca/gifts/gifts-for-men-c-gifts-for-him'}><img className='firstphotoskid' src={isClick ===1 ? seconddivdata[0][0][0] : seconddivdata[1][0][0]}></img></a>
            <div className='othertwophotos'>
              <a href={isClick === 1 ? 'https://www.gucci.com/us/en/ca/women/handbags-c-women-handbags' : 'https://www.gucci.com/us/en/ca/gifts/gifts-for-men-c-gifts-for-him'}><img className='twootherphotos' src={isClick ===1 ? seconddivdata[0][0][1] : seconddivdata[1][0][1]}></img></a>
             <a href={isClick === 1 ? 'https://www.gucci.com/us/en/ca/women/handbags-c-women-handbags' : 'https://www.gucci.com/us/en/ca/gifts/gifts-for-men-c-gifts-for-him'}> <img className='twootherphotos' src={isClick ===1 ? seconddivdata[0][0][2] : seconddivdata[1][0][2]}></img></a>
            </div>
        </div>
        <div className='secondphotos'>
            <div className='othertwophotos'>
              <a href={isClick === 1 ? 'https://www.gucci.com/us/en/ca/women/handbags-c-women-handbags' : 'https://www.gucci.com/us/en/ca/gifts/gifts-for-men-c-gifts-for-him'}><img className='twootherphotos' src={isClick ===1 ? seconddivdata[0][1][0] : seconddivdata[1][1][0]}></img></a>
              <a href={isClick === 1 ? 'https://www.gucci.com/us/en/ca/women/handbags-c-women-handbags' : 'https://www.gucci.com/us/en/ca/gifts/gifts-for-men-c-gifts-for-him'}><img className='twootherphotos' src={isClick ===1 ? seconddivdata[0][1][1] : seconddivdata[1][1][1]}></img></a>
            </div>
            <a href={isClick === 1 ? 'https://www.gucci.com/us/en/ca/women/handbags-c-women-handbags' : 'https://www.gucci.com/us/en/ca/gifts/gifts-for-men-c-gifts-for-him'}><img className='firstphotoskid' src={isClick ===1 ? seconddivdata[0][1][2] : seconddivdata[1][1][2]}></img></a>
        </div>
      </div>
    </div>
  )
}

export default Seconddiv
