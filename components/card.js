function Card(props) {
    return (
        <div className="card">
            <img src={'images/' + props.source + '.png'} className="card-img-top" alt="." />
            <div className="card-body">
                <h4 className="card-text">{props.name}</h4>
                <div className="d-grid"><a className="btn btn-dark">Add to cart</a></div>
            </div>
        </div>
    );

}