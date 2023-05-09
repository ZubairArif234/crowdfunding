


import visacard from '../components/images/visacard.png' 
import goldencard from '../components/images/goldencard.png' 
import bluecard from '../components/images/bluecard.png' 
import arrow from '../components/images/arrow.png' 


import '../checkout.css'
import Navbarcrowd from '../components/navbar'
import Footer from '../components/footer'

const Checkoutform = () =>{
    return(
        < >
            <Navbarcrowd/>
           
        <div className='mainestdiv'>
            <div className='checkoutformmaindiv'>
                <div className='checkoutformdiv'>
                    <p className='checkoutheading'>Check out</p>
                    <p className='billingheading'>Billing Address</p>
                    <div className='checkoutform'>
                        <label className='checkoutinputlabel'>Full Name</label>
                        <br />
                        <input className='checkoutinput' type="text"/>
                        <br />

                        <label className='checkoutinputlabel'>Email</label>
                        <br />
                        <input className='checkoutinput' type="email"/>
                        <br />

                        <label className='checkoutinputlabel'>Address</label>
                        <br />
                        <input className='checkoutinput' type="text"/>
                        <br />

                        <label className='checkoutinputlabel'>City</label>
                        <br />
                        <input className='checkoutinput' type="text"/>
                        <div className='lasttwoinputsofcheckoutform'>
                        
<div className='lastinputdivone'>

                        <label className='checkoutinputlabel lastinputlabel'>State</label>
                       <br />
                        <input className='checkoutinput' type="text"/>
</div>

<div className='lastinputdivone'>


                        <label className='checkoutinputlabel'>Zip</label>
                       <br />
                        <input className='checkoutinput' type="number"/>
</div>

                        </div>
                        <div style={{marginTop:'10px'}}>

                        <input type='checkbox' />
                        <label>Shipping address same as billing</label>
                        </div>

                    </div>
                    </div>
                <div className='paymentformdiv'>
                    <p className='paymentheading'>Payment</p>
                    <div>
                    </div>
                    <div className='checkoutform'>
                    <label className='checkoutinputlabeltwo'>Accepted Cards</label>
                    <br/>
                    <div className='imagesdiv'>

                    <img className='cardimages' src={goldencard} />
                    <img className='cardimages' src={bluecard} />
                    <img className='cardimages' src={visacard} />
                    </div>
                    {/* <br/> */}
                        <label className='checkoutinputlabeltwo'>Name on card</label>
                        <br/>
                        <input className='checkoutinput'/>
                        <br/>

                        <label className='checkoutinputlabeltwo'>Credit card number</label>
                        <br/>
                        <input className='checkoutinput'/>
                        <br/>

                        <label className='checkoutinputlabeltwo'>Exp Month</label>
                        <br/>
                        <input className='checkoutinput'/>
                        <br/>
                        

                        <div className='lasttwoinputsofcheckoutform'>
                       <div className='lastinputdivone'>

                        <label className='checkoutinputlabeltwo'>Exp year</label>
                        <br/>
                        <input className='checkoutinput'/>
                       </div>
                       <div className='lastinputdivone'>


                        
                        <label className='checkoutinputlabeltwo'>CVV</label>
                        <br/>
                        <input className='checkoutinput'/>
                       </div>
                        </div>
                            <div className='checkoutbtn'>
                        <button className='checkoutpaymentbtn'>
                            <span className='paymentbtntext'>Continue to checkout </span>
                        <img className='paymentarrowimg' src={arrow}/>
                        </button>

                        {/* <input className='checkoutinput'/> */}
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Checkoutform