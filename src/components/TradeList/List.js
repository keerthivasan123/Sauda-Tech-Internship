import React from 'react'
import "./List.css";
export default function List({tradeList, offerType, productType}) {
    return (
        <div class="row">
            {tradeList.map(item => {
                if((item.offerType.indexOf(offerType)<0 && offerType != 'all')||(item.type.indexOf(productType)<0 && productType != 'all')) return null;
          return (
            <div class="col-sm-6 mt-4">
                <div class="card">
                <div class="card-body">
                    <div className="card-title">
                    <p><span class="badge badge-secondary p-2" style={{background: "rgb(170,170,170)", color: "rgb(73,73,73)",}}>{item.status}</span><span style={{float: "right"}}><i class="fas fa-ellipsis-h" ></i></span></p>
                    </div>
                    <div className="row">
                        <div className="col-4 col-sm-4 straight">
                            <h6 style={{color: "rgb(117, 117, 117)"}}>BUYER</h6>
                            <p>{item.buyer}</p>
                        </div>
                        <div className="col-4 col-sm-4 straight">
                            <h6 style={{color: "rgb(117, 117, 117)"}}>STATION</h6>
                            <p>{item.station}</p>
                        </div>
                        <div className="col-4 col-sm-4 straight">
                            <h6 style={{color: "rgb(117, 117, 117)"}}>SHIPMENT</h6>
                            <p>{item.shipment}</p>
                        </div>
                        <div className="col-4 col-sm-4 straight">
                            <h6 style={{color: "rgb(117, 117, 117)"}}>TYPE</h6>
                            <p>{item.type}</p>
                        </div>
                        <div className="col-4 col-sm-4 straight">
                            <h6 style={{color: "rgb(117, 117, 117)"}}>RATE</h6>
                            <p>{item.rate} Rs</p>
                        </div>
                        <div className="col-4 col-sm-4 straight">
                            <h6 style={{color: "rgb(117, 117, 117)"}}>QUANTITY</h6>
                            <p>{item.quantity}</p>
                        </div>
                        <div className="col-4 col-sm-4 straight">
                            <h6 style={{color: "rgb(117, 117, 117)"}}>QUALITY</h6>
                            <p>{item.quality.split(" ")[0]} {item.quality.split(" ")[1]}<br/> {item.quality.split(" ")[2]} </p>
                            

                        </div>

                    </div>
                </div>
                </div>
            </div>
          );
        })}    
        </div>
    )
}
