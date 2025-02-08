import React from "react";
import sidelogo from "./assets/image/siemens-logo.jpg";
import logo from "./assets/image/logo_360.jpg";

const form = () => {
  return (
    <div className="receipt_note">
      <header>
        <div className="header_left">
          <img src={sidelogo} alt="side_logo"></img>
        </div>
        <div className="header_center">
          <h2>PACKING SLIP</h2>
        </div>
        <div className="header_right">
          <img src={logo} alt="logo"></img>
        </div>
      </header>
      <header>
        <section className="details">
          <div className="consignee">
            <p>
              <strong>Consignee:</strong> SMS India, Gurgaon
            </p>
            <p>286 Udyog Vihar Phase-II, Gurgaon</p>
            <p>
              <strong>GSTIN:</strong> 06AABCS3848B1ZI
            </p>
            <p>
              <strong>Contact Person:</strong> Abhishek Saxena
            </p>
            <p>
              <strong>Email:</strong> abhishek.saxena@sms-group.com
            </p>
          </div>
          <div className="meta">
            <p>
              <strong>MRN No.:</strong> MRN242500936
            </p>
            <p>
              <strong>Date:</strong> 15-12-2024
            </p>
            <p>
              <strong>PO No.:</strong> WP242501143
            </p>
            <p>
              <strong>PO Date:</strong> 21-10-2024
            </p>
            <p>
              <strong>Challan No.:</strong> By hand
            </p>
            <p>
              <strong>Courier:</strong> By hand
            </p>
            <p>
              <strong>Docket Date:</strong> 15-12-2024
            </p>
          </div>
        </section>
      </header>
      <table className="items">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>MLFB No.</th>
            <th>Description</th>
            <th>Qty.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>3RH2131-1BB40</td>
            <td>Contactor_RLY_3NO_1NC_24VDC_S00</td>
            <td>5</td>
          </tr>
          <tr>
            <td>2</td>
            <td>3RH2131-1BB40</td>
            <td>Contactor_RLY_3NO_1NC_24VDC_S00</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
      <hr className="line_break"></hr>
      <footer className="footer">
        <div className="remarks">
          <a>
            <strong>Remarks:</strong>
            <br></br>
             Extra material out.
          </a>
          <br></br>
          <a>
            <strong>Terms & Conditions:</strong>
          </a>
          <br></br>
          Complaints, if any, must be made within 7 days.
          <br></br>
          All payments should be made by accounts payee
          <br></br> cheque or draft only.
        </div>
        <div className="signature">
          <a >
            <strong>
              For Diagnostic Automation & Controls
              <br></br>
              Private Limited
            </strong>
          </a>
          <div className="autograph">
          <a > 
            <strong> Authorised Signatory</strong>
          </a>
          </div>
        </div>
      </footer>
      <div className="footer_note">
        <div class='footer_text'>
          Diagnostic Automation & Controls Private Limited
        </div>
        <div>
          <div className="footer_bottom">
            <p>
              Y-45, Okhla Industrial Area, <br></br>Phase-II, New Delhi - 110
              020
            </p>
            <p>
              <strong>Phone:</strong> +91-11-43104310
              <br></br>
              <strong>E-Mail:</strong> info@diag.in
            </p>
            <p>
              <strong>CIN:</strong>U74999DL2016PTC292312
              <br></br>
              <strong>GSTIN:</strong>07AAFCD6270P1Z5
            </p>
          </div>
        </div>
        <hr className="line_break"></hr>
      </div>
    </div>
  );
};

export default form;
