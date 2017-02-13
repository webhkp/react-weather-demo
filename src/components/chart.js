import React, {Component} from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import _ from 'lodash';

export default class Chart extends Component {

    average(data) {
        return _.sum(data)/data.length;
    }

    render() {
        return (
            <div>
                <Sparklines data={ this.props.data } height={ 220 } width={ 380 }>
                    <SparklinesLine color={ this.props.color }/>
                </Sparklines>

                <div>Average: { this.average(this.props.data) }</div>
            </div>
        );
    }
}