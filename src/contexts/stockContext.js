import { createContext, Component } from 'react'
import stockList from '../stocklist'
import axios from 'axios';


export const StockContext = createContext();

class StockContextProvider extends Component {
  // Fetching data from NSE API
  // The States
  state = { 
    stockData: [
      
    ],
    portfolioData: [
      
    ]
  }
  // Functionalities to add or delete from portfolio
  addToPortfolio = (stockList) => {
    const stocklist = [...this.state.portfolioData, stockList];
    this.setState({portfolioData: stocklist});  
  }
  deleteFromPortfolio = (stock) => {
    // 
  }
  render() { 
    return (
      <StockContext.Provider value={{...this.state, addToPortfolio: this.addToPortfolio, deleteFromPortfolio: this.deleteFromPortfolio}}>
        {this.props.children}
      </StockContext.Provider>
    );
  }
}
 
export default StockContextProvider;