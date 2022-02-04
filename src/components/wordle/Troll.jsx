import React from 'react'
class Troll extends React.Component {

    componentDidMount() {
        setTimeout(function() { window.open("/trollpic") }, 100);
        //window.open("/home");
    }

    render() {
        return (
          <div className="container">
          </div>
        );
      }
}

export default Troll