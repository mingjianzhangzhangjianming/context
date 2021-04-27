import { increment, withlistAsntAction } from "../redux/createAction";
import { connect} from "react-redux";
import App from "../component/App";

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
export default connect(
    state => ({
        count: state.reducerA.count,
        list: state.reducerA.list
    }),
    {
        add: increment,
        userInfo: withlistAsntAction
    }
)(App)