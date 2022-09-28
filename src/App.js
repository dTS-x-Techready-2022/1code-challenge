import './App.css';
import Container from '@mui/material/Container';
import ButtonAppBar from './ButtonAppBar';

function App() {
  return (
    <>
      {/* <nav>
        <div className='social-media'>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div className='logo'>
          <img src={require('./assets/logo.png')} alt="" />
        </div>
        <div className='contact'>
          <p>708-508-4500</p>
        </div>
      </nav> */}
      <ButtonAppBar>

      </ButtonAppBar>
      <Container maxWidth="sm">
        <div className='head'>
          <div>
            <img src={require('./assets/logo-2.png')} alt="" />
          </div>
          <div className='info'>
            <div>
              <h2>Pan Pacific Sonargaon/Dhaka, BD</h2>
            </div>
            <div className='more-info'>
              <div>
                <span>icon</span>
                <p>107 Kazi Nazrul Islam Avenue, Dhaka 1215, Bangladesh</p>
              </div>
              <div>
                <span>icon</span>
                <p>PanPacific.Com: 550-208-0088</p>
              </div>
            </div>
          </div>
          <div className='rating'>
            <p>4.5/5</p>
            <span>star</span>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
