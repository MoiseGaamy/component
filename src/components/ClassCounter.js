import React from "react";

class ClassCounter extends React.Component {
    constructor() {
        super();
        this.state = { defautNum: 0 };
   }
     
    addfive() {
        this.setState({
            defautNum: this.state.defautNum + 5,
        });
    }
    resetToZero() {
        this.setState({
            defautNum: 0,
        });
    }
    render() {
        return (
            <div className="compo">
                <div>Class Component</div>
                <h1>{this.state.defautNum}</h1>
                <button className="btn btn-primary" onClick={()=>this.addfive()}>addFive</button>
                <button className="btn btn-secondary" onClick={()=>this.resetToZero()}>resetToZero</button>
            </div>
        )
    }
}

export default ClassCounter;