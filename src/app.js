import react, {Component} from 'react';
import reactDOM from 'react-dom';


class App extends Component {
    render(){
        return (
            <div className="app">
                hellow
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
