import React from 'react';
import '../styles/ClientSlider.css'; 

function ClientSlider() {
  return (
    <div className="clientSlider">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="clientSlide-track">
              <div className="clientSlide-image">
                <img src='/axis.png' alt="Client 1" />
              </div>
              <div className="clientSlide-image">
                <img src= '/hdfc.png' alt="Client 2" />
              </div>
              <div className="clientSlide-image">
                <img src='/icici.jpg' alt="Client 3" />
              </div>
              {/* <div className="clientSlide-image">
                <img src={require('../assets/images/JustDial_Logo.png')} alt="Client 4" />
              </div>
              <div className="clientSlide-image">
                <img src={require('../assets/images/tata-aig.jpg')} alt="Client 5" />
              </div>

              <div className="clientSlide-image">
                <img src={require('../assets/images/MOTILALOFS.NS_BIG-55e383aa.png')} alt="Client 6" />
              </div>
              <div className="clientSlide-image">
                <img src={require('../assets/images/HDFCLIFE.NS_BIG-38e723f5.png')} alt="Client 7" />
              </div>
              <div className="clientSlide-image">
                <img src={require('../assets/images/6i-removebg-preview.png')} alt="Client 8" />
              </div> */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSlider;
