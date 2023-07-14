function Header() {
   return (
      <div className="row header-section">
         <div className="col-12 col-lg-10">
            <div className="logo-area d-sm-none">
               <a href="/"><img src="slipnet6s.jpg" alt="slipnet logo" /></a>
            </div>
            <div className="logo-area d-none d-sm-block">
               <a href="/"><img src="slipnet6s.jpg" alt="slipnet logo" /></a>
               <a href="/"><img className="monster" src="rghost.jpg" alt="blinky" /></a>
            </div>
         </div>
         <div className="col-2 d-none d-lg-block">
            <div className="float-end argh-head">
               <a href="/"><img src="argh.gif" alt="frustration" /></a>
            </div>
         </div>
      </div>
   )
}

export default Header;