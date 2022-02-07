import React, { useState } from "react";
import dashboard from "./dashboard.css";

import IconButton from "@mui/material/IconButton";
import damir from "assets/img/damir-bosnjak.jpg";
import icon1 from "assets/img/icon1.png";
import icon4 from "assets/img/icon4.png";
import icon5 from "assets/img/icon5.png";
import icon from "assets/img/icon.png";
import icon2 from "assets/img/icon2.png";
import Tooltip from "@mui/material/Tooltip";
import icon3 from "assets/img/icon3.png";
import mike from "assets/img/mike.jpg";
function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="content col-sm-12">
        <div className="row">
          <div className="col-sm-4">
            <div className="dash">
              <div className="appoint">
                <img src={icon1}></img>
                <Tooltip title="More">
                  <IconButton>
                    <i class="fa fa-ellipsis-h"></i>
                  </IconButton>
                </Tooltip>
                <h4>Appointments</h4>
              </div>

              <ul className="appoint-list">
                <li>
                  <img src={mike}></img>
                  <div className="float-right">
                    <button type="button" class="btn btn-success">
                      <i class="fas fa-check"></i>
                    </button>
                    <button type="button" class="btn btn-danger">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <span>Dr Doctor Trang</span>
                  <p>Acupuncture practitioner</p>
                  <p>
                    <i className="fas fa-user-nurse" />
                    08:00 12-17-2019
                  </p>
                </li>
                <li>
                  <img src={mike}></img>
                  <div className="float-right">
                    <button type="button" class="btn btn-success">
                      <i className="fas fa-check"></i>
                    </button>
                    <button type="button" class="btn btn-danger">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <span>Dr Doctor Trang</span>
                  <p>Acupuncture practitioner</p>
                  <p>
                    <i className="fas fa-user-nurse" />
                    08:00 12-17-2019
                  </p>
                </li>
                <li>
                  <img src={mike}></img>
                  <div className="float-right">
                    <button type="button" class="btn btn-success">
                      <i className="fas fa-check"></i>
                    </button>
                    <button type="button" class="btn btn-danger">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <span>Dr Doctor Trang</span>
                  <p>Acupuncture practitioner</p>
                  <p>
                    <i className="fas fa-user-nurse" />
                    08:00 12-17-2019
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="dash">
              <div className="appoint">
                <img src={icon}></img>
                <Tooltip title="More">
                  <IconButton>
                    <i class="fa fa-ellipsis-h"></i>
                  </IconButton>
                </Tooltip>
                <h4>Prescriptions</h4>
              </div>
              <ul className="appoint-list">
                <li>
                  <img className="IMG" src={mike}></img>
                  <span>Vitamin C</span>
                  <p>5mg</p>
                </li>
                <li>
                  <img className="IMG" src={mike}></img>
                  <span>Vitamin A</span>
                  <p>2mg</p>
                </li>
              </ul>
            </div>
            <div className="dash">
              <div className="appoint">
                <img src={icon2}></img>
                <a href="#">
                  <i class="fa fa-ellipsis-h float-right"></i>
                </a>
                <h4>Alert</h4>

                <h5 className="temp">
                  Outside temperature:{" "}
                  <p className="temp">increase 40 degrees</p>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="dash">
              <div className="appoint">
                <img src={icon3}></img>
                <Tooltip title="More">
                  <IconButton>
                    <i className="fa fa-ellipsis-h"></i>
                  </IconButton>
                </Tooltip>
                <h4>News</h4>
              </div>
              <ul className="appoint-list">
                <li className="list-nav">
                  <div className="float-right">
                    <a href="#">
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                  <span>
                    50% discount for the first 2 visits to the dentist
                  </span>
                  <p>Save money for the first two times</p>
                </li>
                <li className="list-nav">
                  <div className="float-right">
                    <a href="#">
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                  <span>100% promotion for the first blood test on June 2</span>
                  <p>Health check to detect disease</p>
                </li>
                <li className="list-nav">
                  <div className="float-right">
                    <a href="#">
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                  <span>20% discount for Mon when visit Pathologist</span>
                  <p>Feel pressured to come right away</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="dash">
              <div className="appoint">
                <img src={icon5}></img>

                <Tooltip title="Calender">
                  <IconButton>
                    <i className="fa fa-calendar"></i>
                  </IconButton>
                </Tooltip>
                <h4>Recent results</h4>
              </div>
              <div id="bar-chart"></div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="dash">
              <div className="appoint">
                <img src={icon4}></img>
                <Tooltip title="More">
                  <IconButton>
                    <i className="fa fa-ellipsis-h"></i>
                  </IconButton>
                </Tooltip>
                <h4>Notification</h4>
              </div>
              <ul className="appoint-list">
                {[
                  {
                    a: 1,
                    b: 2,
                    icon: "notify",
                    text: "Dr Alet Robinson changed date of your visit",
                  },
                  {
                    a: 5,
                    b: 76,
                    icon: "notify2",
                    text: "Dr 425 Alet Robinson changed date of your visit",
                  },
                  {
                    a: 24,
                    b: 534,
                    icon: "notify2",
                    text: "Dr 65 Alet Robinson changed date of your visit",
                  },
                  {
                    a: 234,
                    b: 74,
                    icon: "notify1",
                    text: "Dr 4 Alet Robinson changed date of your visit",
                  },
                  {
                    a: 5435,
                    b: 23423,
                    icon: "notify",
                    text: "Dr 2 Alet Robinson changed date of your visit",
                  },
                ].map((i) => {
                  return (
                    <li key={`ap_${i}`}>
                      <i className={`fas fa-circle ${i.icon}`}></i>
                      <div className="float-right">{i.a} days ago</div>
                      <span>{i.text}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="text-center">
                <button type="button" class="btn btn-warning">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
