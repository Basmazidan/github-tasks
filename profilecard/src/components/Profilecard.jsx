import "./Profilecard.css"

import avatar from '../assets/images/image-victor.jpg'
export const Profilecard = () => {
  return (
    <div className="Card-Div">
        <nav></nav>
        <img id="Img-Card" src={avatar} alt="" />

        <h2 id="myh2">Victor Crest <span id="myfirstspan">26</span></h2>
        <label id="mylabel" htmlFor="">london</label>
        <hr />
    <footer>
        <div className="counter-Div">
        <label htmlFor="">80k</label>
        <span>flowers</span>
        </div>
        <div className="counter-Div">
            <label htmlFor="">803k</label>
            <span>likes</span>
        </div>
        <div className="counter-Div">
            <label htmlFor="">1.4K</label>
            <span>Photos</span>
        </div>
    </footer>
    </div>
  )
}
export default Profilecard