import React from "react";
import "./Booking.css";
const PassengerCard = () => {
  return (
    <div className="passenger-area">
      <h2 className="section-title">Passengers</h2>
      <div className="passenger-info card">
        <form>
          <div className="card-title">
            <p className="title-icon"></p>
            <div className="title-text">
              <h3>Passenger 1</h3>
              <p>Use all given names and surnames exactly as per passport/Id</p>
            </div>
          </div>
          <div className="card-body">
            <div className="from-group">
              <div className="form-control">
                <label className="">Given names</label>
                <input
                  type="text"
                  className=""
                  placeholder="e.g. Oliver James"
                ></input>
              </div>
              <div className="form-control">
                <label className="">Surname(s)</label>
                <input
                  type="text"
                  name="lastName"
                  className=""
                  placeholder="e.g Brown"
                ></input>
              </div>
            </div>
            <div className="from-group">
              <div className="form-control">
                <label className="">Nationality</label>
                <input
                  type="text"
                  className=""
                  placeholder="e.g. United Kingdom"
                ></input>
              </div>
              <div className="form-control">
                <label className="">Gender</label>
                <input
                  type="text"
                  name="lastName"
                  className=""
                  placeholder="e.g Brown"
                ></input>
              </div>
              <div className="form-control">
                <label className="">Date Of birth</label>
                <input type="text" className="" placeholder="Month"></input>
                <input type="number" className="" placeholder="DD"></input>
                <input type="number" className="" placeholder="YYYY"></input>
              </div>
            </div>
            <div className="from-group">
              <div className="form-control">
                <label className="">Passport or ID number</label>
                <input
                  type="text"
                  className=""
                  placeholder="e.g. United Kingdom"
                ></input>
              </div>
              <div className="form-control">
                <label className="">Passport or Id expiry date</label>
                <input type="text" className="" placeholder="Month"></input>
                <input type="number" className="" placeholder="DD"></input>
                <input type="number" className="" placeholder="YYYY"></input>
              </div>
              <div className="form-control">
                <label className="">No expiry</label>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                ></input>
              </div>
            </div>
            <div className="form-control">
              <label className="">Cabin Luggage</label>
              <input
                type="text"
                className=""
                placeholder="e.g. United Kingdom"
              ></input>
            </div>
            <div className="form-control">
              <h4 className="">Checked luggage</h4>
              <label className="">Select one option</label>
              <input
                type="text"
                className=""
                placeholder="e.g. United Kingdom"
              ></input>
            </div>
            <div className="form-control">
              <input
                type="text"
                className=""
                placeholder="e.g. United Kingdom"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PassengerCard;
