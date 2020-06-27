import React, { Component } from "react";
import "../static/stylesheets/Blog.css";
import Navbar from "./Navbar";
class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <Navbar />
        <div className="container">
          <h1 className="header">Under construction. Coming soon!</h1>
        </div>
      </div>
    );
  }
}
export default Blog;
