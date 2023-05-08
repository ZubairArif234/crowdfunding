


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
        <p><span style={{color:'#1B70F0',fontFamily:'Rubik',fontSize:'11px',letterSpacing:'2px'}}>{uppertext1}</span> <span style={{color:'#6F7172',fontSize:'11px',fontWeight:'300' , fontFamily:'Rubik' , textTransform:'uppercase'}}>{date}</span></p>
        <p style={{color:'#062A4D' ,fontSize:'17px' , fontFamily:'Poppins' , fontWeight:'600'}} className="popcardheading">{heading}</p>
        <p style={{color:'#6F7172' ,fontFamily:'Rubik',fontWeight:'300',fontSize:'13px'}}>{message}</p>
        
      </Card>
    );
  }
  
export default Blogcard;