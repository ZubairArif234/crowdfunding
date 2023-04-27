


import blog1 from './images/blog1.png'

import { Card , Progress} from 'antd';
const { Meta } = Card;
function Blogcard({ img, heading,message ,uppertext1,date}) {
    console.log(img);
    return (
      <Card
        hoverable
        style={{
          width: 280,
          borderRadius: "0",
          marginTop:'10px',
          border:'none'
        }}
        cover={<img alt="example" style={{borderRadius:'0px'}} src={img} />}
      >
        <p><span style={{color:'#1B70F0',fontFamily:'rubik',fontSize:'10px'}}>{uppertext1}</span> <span style={{color:'#6F7172',fontSize:'10px'}}>{date}</span></p>
        <p style={{color:'#062A4D' ,fontSize:'18px'}} className="popcardheading">{heading}</p>
        <p style={{color:'#6F7172' ,fontFamily:'rubiklight',fontWeight:'bold',fontSize:'13px'}}>{message}</p>
        
      </Card>
    );
  }
  
export default Blogcard;