import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temp = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        // console.log(temps);

        return (
            <tr key={ name }>
                <td>{ name } </td>
                <td><Chart data={ temp } color="red" /></td>
                <td><Chart data={ pressure } color="blue" /></td>
                <td><Chart data={ humidity } color="black"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperatuer</th>
                    <th>Pressuer</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                { this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    };
}

// function mapDispatchToProps(dispatch) {
//     // return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
// }

export default connect(mapStateToProps, null)(WeatherList);