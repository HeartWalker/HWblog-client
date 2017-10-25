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
        this.state = {
            archives: [],
        }
    }
    componentDidMount(){
        this.props.dispatch(getArchives());
    }
    componentWillReceiveProps(nextProps){
        //todo 处理显示每个archive的数据
        let archives = this.props.archives;
        if(nextProps.match.path != '/archive') {

        }

        this.setState({
            archives,
        })
    }
    fliterArchives = (archive) =>{
        let archives = this.props.archives;
        if(true) {
            archives = this.props.archives.filter((v, i)=>{
                return v.archive === archive
            })
        }

        this.setState({
            archives,
        })
    }
    render(){
        //console.log(this.props)
        //todo 提取archive
        return(
            <div className='archive'>
                <ul className='left'>
                    <li>
                        <h3>Archives:</h3>
                    </li>
                    <li>
                        <Link to='/'>aaaaaaa111</Link>
                    </li>
                </ul>
                <ul className='right'>
                    {
                        this.props.archives.map((v,i)=>{
                          return   <li key={v.time}>
                                <Link to={`${this.props.match.url}/${v.time}`} className="title">
                                    <span className='time'>{v.date}</span>{v.title}
                                </Link>
                                <span  onClick={()=>this.fliterArchives(v.archive)}>
                                    {v.archive}
                                </span >
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
