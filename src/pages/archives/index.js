import React, {Component} from 'react'
import {
    Link
} from 'react-router-dom'
import {connect} from 'react-redux';
import {getArchives} from './action';
import './archives.scss'

class Archives extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.dispatch(getArchives());
    }

    render(){
        //console.log(this.props)
        return(
            <div className='archive'>
                <h2>Archives</h2>
                <ul>
                    {
                        this.props.archives.map((v,i)=>{
                          return   <li key={v.time}>
                                <Link to={`${this.props.match.url}/${v.time}`} className="title">
                                    <span className='time'>{v.date}</span>{v.title}
                                </Link>
                                <Link to="/">
                                    {v.archive}
                                </Link>
                            </li>
                        })
                    }

                </ul>


            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        archives: state.archivesStore.archives,
    }
}
export default connect(mapStateToProps)(Archives);
