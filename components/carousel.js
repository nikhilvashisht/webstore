function Carousel (props) {
        return (
            <div id="items-carousel" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="row">
                            <div className=" col-md-4 carousel-image">
                                <img src="images/applewatch.png" alt="" />
                            </div>
                            <div className="col-md-8">
                                <h2 className = "carousel-heading" >Apple Watch</h2>
                                <h6 className = "carousel-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, fugit molestiae. Fuga in et modi, consequuntur recusandae temporibus at exercitationem vitae qui id cu Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iste ad recusandae, nisi distinctio cupiditate? Qui odio deleniti assumenda, dolores voluptates similique architecto?</h6>
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-sm-4 carousel-image">
                                <img src="images/iphone.png" alt="" />
                            </div>
                            <div className="col-sm-8">
                                <h2 className = "carousel-heading">Iphone 13</h2>
                                <h6 className = "carousel-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, quidem! Dignissimos porro vitae quasi est eligendi soluta ratione te Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam sit debitis dolore deleniti pariatur ipsam ex praesentium veritatis consectetur odio dignissimos itaque nisi, fugiat, rerum ab aliquid et ut voluptate, ea eum! Debitis, ullam cum?</h6>

                            </div>
                        </div>

                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#items-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#items-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        );
    
}