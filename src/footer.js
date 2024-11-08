import React from 'react'
import { footer } from './footerdata'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='companiesinfos'>
        {
            footer.map(items => (
                <div className='companies'>
                    <h6>{items.company}</h6>
                    {items.links.map(text => (
                        <p>
                            {text}
                        </p>
                    ))}
                </div>
            ))
        }
      </div>
      <div className='storelocator'>
        <h6>STORE LOCATOR</h6>
        <div class="form__group field">
            <input type="input" class="form__field" placeholder="Name" required=""></input>
            <label for="name" class="form__label">Country/Region, City</label>
        </div>
        <h6>SIGN UP FOR GUCCI UPDATES</h6>
        <p>By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. More details on this are provided in our 
        Privacy Policy</p>
        <div class="form__group field">
            <input type="input" class="form__field" placeholder="Name" required=""></input>
            <label for="name" class="form__label">Email</label>
        </div>
      </div>
    </div>
  )
}

export default Footer
