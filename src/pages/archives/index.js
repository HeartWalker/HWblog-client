import React, {Component} from 'react'
import {
    Link,
} from 'react-router-dom'
import {connect} from 'react-redux';
import {getArchives} from './action';
import './archives.scss'

class Archives extends Component {
    constructor(props){
        super(props);
        this.state = {
            archives: this.props.archives,
            archiveItme:[],
        }
    }
    componentDidMount(){
        this.props.dispatch(getArchives());


    }
    componentWillReceiveProps(nextProps){
        /*let archives = this.props.archives;
        if(nextProps.match.path != '/archive') {

        }

        this.setState({
            archives,
        })*/

        this.setState({
            archives:nextProps.archives,
        })
        let arr = [];
        let obj = {};
        this.props.archives.map((v, i)=>{
            if(!obj[v.archive]){
                obj[v.archive] = 1;
                arr.push(v.archive);
            }
        });
        this.setState({
            archiveItme:arr,
        })
    }
    fliterArchives = (archive) =>{
        let archives = this.props.archives.filter((v, i)=>{
                return v.archive === archive
            })

        this.setState({
            archives,
        })
    }
    render(){
        //console.log(this.props)
        return(
            <div className='archive'>
                <ul className='left'>
                    <li>
                        <h3>Archives:</h3>
                    </li>
                    {
                        this.state.archiveItme.map((v,i)=>{
                           return  <li key={v} onClick={()=>this.fliterArchives(v)}>
                                        <Link to={`#${v}`} style={this.props.location.hash===`#${v}` ? {color:'#e9cd4c'}:{}}>{v}</Link>
                                    </li>
                        })
                    }
                </ul>
                <ul className='right'>
                    {
                        this.state.archives.map((v,i)=>{
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
