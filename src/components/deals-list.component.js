import React, { Component } from "react";
import DealsService from "../services/deals.service";
import { Link } from "react-router-dom";

export default class DealsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveDeals = this.retrieveDeals.bind(this);
    this.refreshList = this.refreshList.bind(this);
    // this.setActiveTutorial = this.setActiveTutorial.bind(this);
    // this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      deals: [],
      sortedDeals: [],
      currentDeal: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveDeals();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveDeals() {
    DealsService.getAll()
      .then(response => {
        this.setState({
          deals: response.data.data.deals
        });
        console.log(response.data.data.deals);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveDeals();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  sortTrips(sortBy) {
    DealsService.sortDeals(sortBy)
      .then(response => {
        this.setState({
          sortedDeals: response.data
        });
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

  
  }

  render() {
    const { searchTitle, deals, currentDeal, currentIndex } = this.state;

    return (
    <div class="card shadow mb-5 bg-white rounded">
        <div class="card-body">
            <p class="card-title text-center shadow mb-5 rounded">Trip Sorter</p>
            <div class="icons text-center">
                <i class="fa fa-plane fa-2x" aria-hidden="true"></i>
                <i class="fa fa-taxi fa-2x" aria-hidden="true"></i>
                <i class="fa fa-train fa-2x" aria-hidden="true"></i> </div>            
            <div class="row">
                <div class="col-sm-6"> <select class="browser-default custom-select mb-4" id="select">
                        <option value="" disabled="" selected="">From</option>
                        {deals && deals.map((deal, index) => (
                          <option
                              key={index}
                              value={deal.departure}
                            >
                            {deal.departure}
                          </option>
                        ))}
                    </select> 
                </div>
                <div class="col-sm-6"> <select class="browser-default custom-select mb-4" id="select">
                        <option value="" disabled="" selected="">To</option>
                        {deals && deals.map((deal, index) => (
                          <option
                              key={index}
                              value={deal.arrival}
                            >
                            {deal.arrival}
                          </option>
                        ))}
                    </select>
                </div>
            </div>
            <div class="col-sm-12"> <select class="browser-default custom-select mb-4" id="select">
                        <option value="" disabled="" selected="">Sort Type</option>
                        <option value="cheapest">Cheapest</option>
                        <option value="fastest">Fastest</option>
                    </select>
              </div>
           
            <button
                className="btn btn-outline-success"
                type="button"
                onClick={this.sortTrips("cheapest")}
              >
                Search
              </button>
        </div>
    </div>
   );
  }
}