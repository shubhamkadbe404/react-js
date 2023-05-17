const Add = (props) => {
    return(
        <div>
            <h1>This is Addtion Function</h1>
            <p>Addtion of 252 & 396 number's = {parseInt(props.a) + parseInt(props.b)}</p>
        </div>
    )
};

export default Add;