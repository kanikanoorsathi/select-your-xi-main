import React from "react";
import footerLogo from "../../assets/logo-footer.png";
import bgshadow from "../../assets/bg-shadow.png"

const Footer = () => {
  return (
    <div className="bg-black w-full py-40 mt-24">
      <div>
        <img className=" mx-auto" src={footerLogo} alt="" />
      </div>
      <div>
        <footer className="footer sm:footer-horizontal text-white p-10">
          <nav>
            <h1 className=" font-bold text-lg text-white">About us</h1>
            <p className=" font-normal text-sm text-gray-400 w-full md:w-60">We are a passionate team dedicated to providing the best services to our customers.</p>

            
          </nav>
          <nav>
            <h1 className=" font-bold text-lg text-white">Quick Links</h1>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h1 className=" font-bold text-lg text-white">Subscribe</h1>
            <p className=" font-normal text-sm text-gray-400 w-full md:w-60">Subscribe to our newsletter for the latest updates.</p>
            <form>
               <fieldset className="w-80">
                  <label>Enter your email address</label>
                    <div className="join mt-3">
                        <input type="text" placeholder="username@site.com" className="input input-bordered border-gray-300 bg-white text-black"/>
                        <button style={{backgroundImage: `url(${bgshadow})`}} className="btn bg-no-repeat bg-cover bg-center bg-orange-300  text-black ">Subscribe</button>
                   </div>
                </fieldset>
            </form>
          </nav>
          
        </footer>
      </div>
    </div>
  );
};

export default Footer;
