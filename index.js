

function Content(props) {
    return (
        <>
            <div className="header">
                <Navbar />
            </div>
            <div className="carousel">
                <Carousel />
            </div>

            <div className="row content">
                <div className="col-md-2 col-xs-12 menu">
                    <Menu />
                </div>
                <div className="col-md-10 col-xs-12 items">
                    <div className="row item-row">
                        <div className="col-lg-4 col-md-6 card-col">
                            <Card name="Smart-band" source="band" />
                        </div>
                        <div className="col-lg-4 col-md-6 card-col">
                            <Card name="Wireless earbuds" source="earbuds" />
                        </div>
                        <div className="col-lg-4 col-md-6 card-col">
                            <Card name="Wireless earphones" source="earphones" />
                        </div>
                        <div className="col-lg-4 col-md-6 card-col">
                            <Card name="Laptop" source="laptop" />
                        </div>
                        <div className="col-lg-4 col-md-6 card-col">
                            <Card name="Headphones" source="sonyheadphones" />
                        </div>
                        <div className="col-lg-4 col-md-6 card-col">
                            <Card name="Samsung Galaxy" source="samsung" />
                        </div>
                    </div>
                    <div className="row item-row mt-2">

                    </div>

                </div>
            </div>
        </>
    );
}