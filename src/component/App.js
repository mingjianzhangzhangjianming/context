import { Component } from "react";
import { increment, withlistAsntAction } from "../redux/createAction";
import { connect} from "react-redux";
import { Input } from "antd";
import "./app.less"
// const mapStateToProps = state => ({
//     count: state.reducerA.count,
//     list: state.reducerA.list
// })

// const mapDispatchToProps = dispatch => ({
//     add: (val) => dispatch(increment(val)),
//     userInfo: (val) => dispatch(withlist(val))
// })

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(App)

//简写
@connect(
    state => ({
        count: state.reducerA.count,
        list: state.reducerA.list
    }),
    {
        add: increment,
        userInfo: withlistAsntAction
    }
)
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleChange = (e) => {
        this.props.add(e.target.value)
    }
    componentDidMount() {
        this.props.userInfo()
    }
    render() {
        console.log(this.props)
        return (
            <div id="app">
                <Input onChange={this.handleChange} style={{width: 480}}/>
                <h3>react-redux {this.props.count}</h3>
                <ul>
                    {
                        this.props.list.map((item,index) => <li key={index}>{item.text}</li>)
                    }
                </ul>
                
            </div>
        )
    }
}

export default  App
