import React, {Component} from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
class Sigout extends Component {
    componentWillMount(){
        this.props.signoutUser();
    }
    render() {
        return (
            <div>Bye bye</div>
        );
    }
}

export default connect(null,actions)(Sigout);