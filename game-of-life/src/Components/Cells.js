import React from 'react';

class Cells extends React.Component {
    constructor() {
    super();
    this.state = {
        alive: false
    };


    createCell => (x) => {
        let grid = []
        let total = x * x
        while (total > 0) {
            grid.push(<div key={total} className="cells" status={this.state.alive}></div>)
            total --
        }
        return grid
    }
}

    render() {
        // function createCell(x) {
        //     let grid = []
        //     let total = x * x
        //     while (total > 0) {
        //         grid.push(<div key={total} className="cells" status={this.state.alive}></div>)
        //         total --
        //     }
        //     return grid
        // }

        return (
            <>
            <div className="container">
            {createCell(15)}
            {console.log(this.state.alive)}
            </div>
            </>
        )
    }
}

export default Cells;