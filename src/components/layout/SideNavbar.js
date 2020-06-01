import React, {useState} from 'react'
import './SideNavbar.css';

export default function SideNavbar({tradeList, handleChangeProductType, handleChangeOfferType, offerType, productType, allOfferType, allProductType}) {
    const offerTypeList = []
    const productTypeList = []
    tradeList.map(list => {
      if(offerTypeList.indexOf(list.offerType) < 0){
        offerTypeList.push(list.offerType);
      }
      if(productTypeList.indexOf(list.type) < 0){
        productTypeList.push(list.type);
      }
    })

    const loadFilters = () => {
      console.log(productType, offerType)
      if(offerType!=='all' || productType!=='all'){
        return (
          
          <article className="card-group-item">
            <header className="card-header">
              <h6 className="title">Filters</h6>
            </header>
            <div className="filter-content">
              <div className="card-body">
              { offerType!='all' && <a class="trigger info-color text-black" onClick={()=> allOfferType()}>{offerType}<i class="fas fa-minus ml-2"></i></a>}
              { productType!='all' && <a class="trigger info-color text-black" onClick={()=> allProductType()}>{productType}<i class="fas fa-minus ml-2"></i></a>}
              </div> 
            </div>
          </article> 
      );
      }   
    }

    
    return (
        <div>
            <div>
        <div className="card">
          <article className="card-group-item">
            <header className="card-header">
              <h6 className="title">Offer Type </h6>
            </header>
            <div className="filter-content">
              <div className="card-body">
                <form>
                {offerType== 'all' ? <label className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadio2" onChange={()=>handleChangeOfferType('all')}  checked/>
                  <span className="form-check-label">
                    All
                  </span>
                </label>:
                <label className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadio2" onChange={()=>handleChangeOfferType('all')}  />
                <span className="form-check-label">
                  All
                </span>
              </label>
                }
                {offerTypeList.map(list => {
                  return <label className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadio2" onChange={()=>handleChangeOfferType(list)} defaultValue />
                  <span className="form-check-label">
                    {list}
                  </span>
                </label>
                })}
                </form>
              </div> {/* card-body.// */}
            </div>
          </article> {/* card-group-item.// */}
          <article className="card-group-item">
            <header className="card-header">
              <h6 className="title">Product Type </h6>
            </header>
            <div className="filter-content">
              <div className="card-body">
                <form>
                {productType=='all' ? <label className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadio" onChange={()=>handleChangeProductType('all')} checked/>
                  <span className="form-check-label">
                    All
                  </span>
                </label>:
                <label className="form-check">
                <input className="form-check-input" type="radio" name="exampleRadio" onChange={()=>handleChangeProductType('all')}/>
                <span className="form-check-label">
                  All
                </span>
              </label>
                }
                {productTypeList.map(list => {
                  return <label className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadio" onChange={()=>handleChangeProductType(list)} defaultValue />
                  <span className="form-check-label">
                    {list}
                  </span>
                </label>
                })}
                </form>
              </div> {/* card-body.// */}
            </div>
          </article> {/* card-group-item.// */}
          { loadFilters()}
          </div>
          </div>
        </div>
    )
}
