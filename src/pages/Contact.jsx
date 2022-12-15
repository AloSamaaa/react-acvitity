import Googlemap from "./Googlemap"

export default function Contact() {
    return(
    <>
    <div className="row mt-3">
        <div className="col-7">
          <div className="container border ps-4 pt-5 fw-bold shadow-lg pb-5">
         <div className ="contactus">
            Contact us:<br/>
            Twitter: <a href="#">@KodegoGroup6</a><br/>
            Facebook: <a href="#">KodegoG6</a><br/>
            Github: <a href="#">G6repository</a><br/>
            Telegram: <a href="#">Group_6</a><br/>
            Instagram: <a href="#">@G6Kodego</a><br/>
            Line: <a href="#">g6iduno</a><br/>
            
         </div>       
          </div>
        </div>
        <div className="col-5">
          <div className="container border ps-4 pt-5 fw-bold shadow-lg pb-5">
            <Googlemap />
          </div>
        </div>
      </div>
    </>
    )
}
