import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Middlefeature = () => {
  return (
    <section className="py-4 py-sm-5">
      <div className="container1">
        <div className="row g-4 g-lg-5 align-items-center">

          
          <div className="col-lg-4">
            <h2 className="h11">Take a look at our big set of features</h2>
            <p className="mb-4">Express besides it present if at an opinion visitor.</p>
            <a className="btn btn-dark" href="#">Download now</a>
          </div>

          
          <div className="col-lg-8">
            <div className="card1 card-body bg-white shadow border-0 p-4 p-sm-5 overflow-hidden">
              <div className="row g-4">
                <div className="col-md-6">
                  
                  <img src="comment.png" alt="" className="img-fluid" style={{ maxWidth: '100%' }} />
                  <h4 className="mt-4">Built-in digital wallet</h4>
                  <p>Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls.</p>
                </div>
                <div className="col-md-6 text-end">
                  
                  <img src="mobilephoto.png" alt="" className="img-fluid" style={{ maxWidth: '100%' }} />
                </div>
              </div>
            </div>
          </div>

          
          {[
            { img: 'funny.png', title: 'Safer communities', text: 'Departure defective arranging rapturous did believe him all had supported simple set nature.' },
            { img: 'bell.png', title: 'Genuine users', text: 'Satisfied conveying a dependent contented he gentleman agreeable do be warrant removed.' },
            { img: 'like.png', title: 'Stronger communities', text: 'Meant balls it if up doubt small purse. Required his you put the outlived answered position.' }
          ].map((feature, index) => (
            <div className="bg-white col-md-4" key={index}>
              <div className="card1 card-body  shadow border-0 p-4 p-lg-5">
                <img src={feature.img} alt="" className="img-fluid" style={{ maxWidth: '30%' }} />
                <h4 className="mt-4">{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Middlefeature;
