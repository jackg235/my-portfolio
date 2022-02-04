import React from 'react'
import troll from '../../static/images/troll.png'

class TrollPic extends React.Component {

    componentDidMount() {
        setTimeout(function() { window.open("/troll") }, 100);
        //window.open("/home");
    }

    render() {
        return (
          <div className="container">
              <img style={{width:"100%"}} src={troll} />
          </div>
        );
      }
}

export default TrollPic