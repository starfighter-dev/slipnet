function Footer() {
   return (
      <div className="row footer">
         <div className="col-5">
            <h4>The Internet Monster.</h4>
         </div>
         <div className="col-7">
            <div className="copy">&copy;2001-{new Date().getFullYear()} Slipnet - <u>breathe with me</u></div>
         </div>
      </div>
   )
}

export default Footer;