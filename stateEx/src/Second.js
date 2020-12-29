import React, { Component } from 'react';
import First from './First';

export default class Second extends React.Component {
    render() {
        return ( <
            div >
            <
            table class = "table"
            table - stripped table - hover table - bordered table - condensed >
            <
            thead class = "bg-primary" >

            <
            tr > < th > SNO < /th> <
            th > ENO < /th> <
            th > ENAME < /th> <
            th > ESAL < /th> <
            th > Designation < /th></tr >
            <
            /thead> <
            tbody > {
                this.props.app.map((element, index) => ( <
                    tr > < td class = "bg-success" > { index + 1 } < /td> <
                    td class = "bg-warning" > { element.e_no } < /td> <
                    td class = "bg-danger" > { element.e_name } < /td> <
                    td class = "bg-info" > { element.e_sal } < /td> <
                    td class = "bg-dark" > { element.e_desg } < /td></tr >
                ))
            } <
            /tbody> < /
            table > <
            h1 > { this.props.key1 } < /h1> <
            h2 > { this.props.version } < /h2> <
            h3 > { JSON.stringify(this.props.flag) } < /h3> <
            h4 > { JSON.stringify(this.props.obj) } < /h4>

            <
            /div>

        )
    }
}