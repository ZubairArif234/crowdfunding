
import popsong from './images/popsong.png'
import { Card , Progress} from 'antd';
const { Meta } = Card;
function Popularcard({ img, heading, price1, price2, detail1, detail2, below1, below2 }) {
    console.log(img);
    return (
      <Card
        hoverable
        style={{
          width: 290,
          borderRadius: "0",
          marginTop:'10px'
        }}
        cover={<img alt="example"style={{borderRadius:'0px'}} src={img} />}
      >
        <p className="popcardheading">{heading}</p>
        <div className="popprogressprice">
          <Progress
            strokeColor="#1B70F0"
            percent={70}
            showInfo={false}
            style={{ height: "2px" }}
          />
          <div className="poppriceanddetail">
            <div>
              <p className="popcardprice">
                {price1} <br />
                <span className="popcardpricedetail">Pledged</span>
              </p>
            </div>
            <div>
              <p className="popcardprice">
                {price2} <br />
                <span className="popcardpricedetail">Target</span>
              </p>
            </div>
          </div>
          <div>
            <div className="poppriceanddetailbelow">
              <p className="popcardpricebelow">by romada D. </p>
              <p className="popcardpricebelow">at london </p>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  
export default Popularcard;