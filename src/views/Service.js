import React from "react";

function Map() {
  return (
    <>
      <div className="content">
        <div className="col-md-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1008.637934487436!2d76.58666046069204!3d31.652534364788156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d62efc9e605d%3A0x67e3b31ec5c71286!2sHamirpur%2C%20Himachal%20Pradesh%20177501!5e1!3m2!1sen!2sin!4v1640665560801!5m2!1sen!2sin"
            style={{ width: "100%", height: "100vh" }}
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Map;
