// import logo from './logo.svg';
import '../App.css';
import { Progress } from 'antd';

function Planbox() {
  return (
    <div className="planboxmain">
        {/* <center> */}

      <div className='planboxinner'>
        <div className='planboxsmalldivs'>
            <p className='planboxtext'>Onda MX App: Mexico City art guide & living archive.</p>
            <Progress strokeColor='#1B70F0' percent={50} showInfo={false} />
        </div>
        <div className='planboxsmalldivs'>
            <p className='planboxtext'>Onda MX App: Mexico City art guide & living archive.</p>
            <Progress strokeColor='#6100B3' percent={50} showInfo={false} />
        </div>
        <div className='planboxsmalldivs'>
            <p className='planboxtext'>Onda MX App: Mexico City art guide & living archive.</p>
            <Progress strokeColor='#FF1849' percent={50} showInfo={false} />
        </div>
      </div>
        {/* </center> */}
    </div>
  );
}

export default Planbox;
