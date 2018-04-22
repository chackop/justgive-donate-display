import React, { Component } from 'react';

const APIURL = 'https://api.justgiving.com/0b324596/v1/charity/';
const CHARID_BRITF = 183092;
// const CHARID_MACSUPP = 2116;
// const CHARID_CANRES = 2357;
// const CHARID_OXF = 13441;
// const CHARID_NATR = 183560;
// const CHARID_SAVC = 18570;

class DataService extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     donData: [],
        // };
    }

    componentDidMount() {
        fetch(APIURL + CHARID_BRITF)
            .then((res) => {
                console.log(res);
            });
        // .then(data => this.setState({ donData: data.donData }));
    }

    render() {
        return (
            <div>
                <h1>DataService</h1>
            </div>
        );
    }
}

export default DataService;