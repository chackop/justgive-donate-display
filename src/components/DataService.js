import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const APIURL = 'https://api.justgiving.com/0b324596/v1/charity/';
const CHARID_BRITF = 183092;
// const CHARID_MACSUPP = 2116;
// const CHARID_CANRES = 2357;
// const CHARID_OXF = 13441;
// const CHARID_NATR = 183560;
// const CHARID_SAVC = 18570;
// let donData;

class DataService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stateData: []
        };
    }

    componentDidMount() {
        fetch(APIURL + CHARID_BRITF)
            .then((res) => {
                // console.log(res);
                return res.text()
            })
            .then((str) => {
                let responseDoc = new DOMParser().parseFromString(str, 'application/xml');

                this.setState({
                    catergories: responseDoc.getElementsByTagName('categories')[0].textContent.split(/(?=[A-Z])/),
                    desc: responseDoc.getElementsByTagName('description')[0].textContent,
                    donationDisplayAmounts: responseDoc.getElementsByTagName('donationDisplayAmounts')[0].textContent,
                    emailId: responseDoc.getElementsByTagName('emailAddress')[0].textContent,
                    impactStatementWhat: responseDoc.getElementsByTagName('impactStatementWhat')[0].textContent,
                    logoAbsoluteUrl: responseDoc.getElementsByTagName('logoAbsoluteUrl')[0].textContent,
                    mobileAppeals: responseDoc.getElementsByTagName('mobileAppeals')[0].textContent,
                    name: responseDoc.getElementsByTagName('name')[0].textContent,
                    profilePageUrl: responseDoc.getElementsByTagName('profilePageUrl')[0].textContent,
                    registrationNumber: responseDoc.getElementsByTagName('registrationNumber')[0].textContent,
                });
                // donData.categories = responseDoc.getElementsByTagName('categories')[0].textContent.split(/(?=[A-Z])/);
                // console.log(donData);

                // return (

                // );
            })
            .catch(function (err) {
                console.log(err)
            });
    }

    render() {
        // if (!this.state.categories) {
        //     return (
        //         <p>Loading...</p>
        //     )
        // }
        return (
            <Card>
                <CardText>
                    {this.state.catergories}
                </CardText>
                <CardText>
                    {this.state.desc}
                </CardText>
                <CardText>
                    {this.state.donationDisplayAmounts}
                </CardText>
                <CardText>
                    {this.state.emailId}
                </CardText>
                <CardText>
                    {this.state.impactStatementWhat}
                </CardText>
                <CardText>
                    {this.state.logoAbsoluteUrl}
                </CardText>
                <CardText>
                    {this.state.mobileAppeals}
                </CardText>
                <CardText>
                    {this.state.name}
                </CardText>
                <CardText>
                    {this.state.profilePageUrl}
                </CardText>
                <CardText>
                    {this.state.registrationNumber}
                </CardText>
            </Card>
        );
    }
}

export default DataService;