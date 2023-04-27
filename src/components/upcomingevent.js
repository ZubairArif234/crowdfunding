

import mike from './images/mike.png'
import meet from './images/meet.png'
import pages from './images/pages.png'
import food from './images/food.png'
import launch from './images/lunch.png'
import baaja from './images/baaja.png'
import gift from './images/gift.png'
import cap from './images/cap.png'
import candy from './images/candy.png'

function Upcoming() {
    return (
        <div className="eventmaindiv">
            <img src={candy} className='eventcandy'/>
            <img src={cap} className='eventcap'/>
            <img src={gift} className='eventgift'/>
            <img src={baaja} className='eventbaaja'/>
            <div className="makemaindiv eventtopdiv">
                <p className='ourfeaturetext'><span className='featuredash'></span>Events</p>
                <div><button className='investmentbtn eventbtn'>more events</button></div>
                <p className='investmentheading eventheading'>Upcoming Events</p>
                <center style={{marginBottom:'30px'}}>

                    <button className="day01">day 01</button>
                    <button className="day02">day 02</button>
                    <button className="day03">day 03</button>
                </center>

                <div >
                    <div className='eventsdivone'>
                        <div className='divoneevent'>
                            <img src={mike} className="enevtsimg" />
                            <p className='eventsheading'>10.30 - 10.30 AM</p>
                            <p className='eventtext'>Start program</p>
                        </div>
                        <div className='divoneeventtwo'>

                            <div className='divoneeventtext'>
                                <p className='headingofeventonr'>Fundrising Base Communation</p>
                                <p className=' enevtonetext'>Speaker: Legend D. Jank, Vanue: New York, USA</p>
                                <p className=' enevtonetext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <div style={{marginTop:'30px'}}>

                            <button className="eventbtn2">join today</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className='eventsdivone'>
                        <div className='divoneevent'>
                            <img src={meet} className="enevtsimg" />
                            <p className='eventsheading'>10.30 - 10.30 AM</p>
                            <p className='eventtext'>Start program</p>
                        </div>
                        <div className='divoneeventtwo'>

                            <div className='divoneeventtext'>
                                <p className='headingofeventonr'>Fundrising Base Communation</p>
                                <p className=' enevtonetext'>Speaker: Legend D. Jank, Vanue: New York, USA</p>
                                <p className=' enevtonetext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <div style={{marginTop:'30px'}}>

                            <button className="eventbtn2">join today</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className='eventsdivone'>
                        <div className='divoneevent'>
                            <img src={pages} className="enevtsimg" />
                            <p className='eventsheading'>10.30 - 10.30 AM</p>
                            <p className='eventtext'>Start program</p>
                        </div>
                        <div className='divoneeventtwo'>

                            <div className='divoneeventtext'>
                                <p className='headingofeventonr'>Fundrising Base Communation</p>
                                <p className=' enevtonetext'>Speaker: Legend D. Jank, Vanue: New York, USA</p>
                                <p className=' enevtonetext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <div style={{marginTop:'30px'}}>

                            <button className="eventbtn2">join today</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className='eventsdivone'>
                        <div className='divoneevent'>
                            <img src={food} className="enevtsimg" />
                            <p className='eventsheading'>10.30 - 10.30 AM</p>
                            <p className='eventtext'>Start program</p>
                        </div>
                        <div className='divoneeventtwo'>

                            <div className='divoneeventtext'>
                                <p className='headingofeventonr'>Fundrising Base Communation</p>
                                <p className=' enevtonetext'>Speaker: Legend D. Jank, Vanue: New York, USA</p>
                                <p className=' enevtonetext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <div style={{marginTop:'30px'}}>

                            <img src={launch} className="enevtsimgbtn" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming