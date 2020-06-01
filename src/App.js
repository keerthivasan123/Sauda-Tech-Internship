import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SideNavbar from './components/layout/SideNavbar';
import List from './components/TradeList/List'
import {getTradeList} from './components/TradeList/index'
import './App.css';

function App() {
  const [state, setState] = useState({
    tradeList: [],
    offerType: "all",
    productType: "all",
    error: "",
    loading: false,
  })

  const {tradeList, error, loading, offerType, productType} = state;

  const preload = () => {
    setState({
      ...state,
      loading: true
    })
    getTradeList().then(data => {
      if(data.error) {
        setState({
          ...state, error: data.error
        })
      }
       else {
          setState({
            ...state,
            tradeList: data,
            loading: false
          });
      }
    })
  }
  useEffect(() => {
    preload();
  }, []);

  const loadingMessage = () => {
    return (
      loading && (
        <div id="loading">
            <div id='loader'><img id='center' src='https://flevix.com/wp-content/uploads/2019/07/Ring-Preloader.gif'></img></div>
        </div>
      )
    );
  };

  const handleChangeOfferType = (offerType) => {
    setState({
      ...state,
      offerType: offerType
    })
  }

  const handleChangeProductType = (productType) => {
    setState({
      ...state,
      productType: productType
    })
  }

  const allOfferType = () => {
    setState({
      ...state,
      offerType: 'all'
    })
  }

  const allProductType = () => {
    setState({
      ...state,
      productType: 'all'
    })
  }

  return (
    <div>
      <Navbar />
      <div className="row col-12" style={{paddingRight: "0px"}}>
      <aside className="col-lg-3 col-md-12 mt-3 center"> 
      <SideNavbar 
      tradeList={tradeList}
        handleChangeOfferType={handleChangeOfferType}
        handleChangeProductType={handleChangeProductType}
        offerType={offerType}
        productType={productType}
        allOfferType={allOfferType}
        allProductType={allProductType}
      />
      </aside>
      {loadingMessage()}
      <div className="col-lg-9 col-md-12 mt-3 center">
        <List 
        tradeList={tradeList}
        offerType={offerType}
        productType={productType}
        />
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
