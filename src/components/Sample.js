import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa'

export default class Grid extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let url = 'http://localhost:5000/image/test/' + (this.props.image_id);

        let icon, className;

        if (this.props.score === "1") {
            icon = <FontAwesome.FaCheckCircle />;
            className = "sample correct"
        } else {
            icon = <FontAwesome.FaTimesCircle />;
            className = "sample incorrect"
        }

        return (
            <div className={className}>
                <div className="overlay" />
                <div className="label">{this.props.label}</div>
                <div className="score">
                    {icon}
                </div>
                <img src={url} />
            </div>
        );
    }
}