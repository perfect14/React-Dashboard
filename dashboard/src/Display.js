import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <i class="fab fa-whmcs"></i> Dashboard
          <span className="add">
            Add Startup <i class="fas fa-caret-down"></i>
          </span>
        </nav>

        <div className="banner">Dashboard</div>

        <div className="flex">
          <div className="dashboard">
            <div className="dash">
              <i class="fab fa-whmcs"></i> Dashboard
            </div>
            <div className="add-startup">
              <i class="fas fa-plus"></i> Add startup
            </div>
            <div className="details">
              <i class="far fa-list-alt"></i> Startup Details
            </div>
          </div>
          <div className="startups">
            <div className="all">All Startups</div>
            <div className="container">
              <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Filter Startups"
              />
              <div className="row row-line">
                <div className="col-md-3"> Company</div>
                <div className="col-md-2">Market/Industry</div>
                <div className="col-md-2">Location</div>
                <div className="col-md-2">Joined</div>
                <div className="col-md-1">Approve</div>
                <div className="col-md-2">Action</div>
              </div>

              <div className="container">
                <div className="row real-estate">
                  <div className="col-md-3">
                    <div className="container">
                      <div className="row company-flex">
                        <div className="pic-box"></div>
                        <div className="">Company Name</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">Real Estate</div>
                  <div className="col-md-2">Lagos</div>
                  <div className="col-md-2">Dec, 12, 2016</div>
                  <div className="col-md-1">
                    <i class="far fa-check-square green-text"></i>
                  </div>
                  <div className="col-md-2 action-flex">
                    <div className="pen">
                      <i class="fas fa-pencil-alt white-text"></i>
                    </div>
                    <div className="trash">
                      <i class="far fa-trash-alt white-text"></i>
                    </div>
                  </div>
                </div>

                <div className="row local-business">
                  <div className="col-md-3">
                    <div className="container">
                      <div className="row company-flex">
                        <div className="pic-box"></div>
                        <div className="">Company Name</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">local Business</div>
                  <div className="col-md-2">Accra</div>
                  <div className="col-md-2">Dec, 13, 2016</div>
                  <div className="col-md-1">
                    <i class="far fa-check-square green-text"></i>
                  </div>
                  <div className="col-md-2 action-flex">
                    <div className="pen">
                      <i class="fas fa-pencil-alt white-text"></i>
                    </div>
                    <div className="trash">
                      <i class="far fa-trash-alt white-text"></i>
                    </div>
                  </div>
                </div>

                <div className="row specialty-food">
                  <div className="col-md-3">
                    <div className="container">
                      <div className="row company-flex">
                        <div className="pic-box"></div>
                        <div className="">Company Name</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">Specialty Food</div>
                  <div className="col-md-2">Texas</div>
                  <div className="col-md-2">Dec, 13, 2016</div>
                  <div className="col-md-1">
                    <i class="far fa-check-square green-text"></i>
                  </div>
                  <div className="col-md-2 action-flex">
                    <div className="pen">
                      <i class="fas fa-pencil-alt white-text"></i>
                    </div>
                    <div className="trash">
                      <i class="far fa-trash-alt white-text"></i>
                    </div>
                  </div>
                </div>

                <div className="row e-commerce">
                  <div className="col-md-3">
                    <div className="container">
                      <div className="row company-flex">
                        <div className="pic-box"></div>
                        <div className="">Company Name</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">E-Commerce</div>
                  <div className="col-md-2">Nairobi</div>
                  <div className="col-md-2">Dec, 14, 2016</div>
                  <div className="col-md-1">
                    <i class="far fa-check-square green-text"></i>
                  </div>
                  <div className="col-md-2 action-flex">
                    <div className="pen">
                      <i class="fas fa-pencil-alt white-text"></i>
                    </div>
                    <div className="trash">
                      <i class="far fa-trash-alt white-text"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;