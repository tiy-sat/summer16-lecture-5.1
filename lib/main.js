import React from 'react'

// https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack
export default React.createClass({
  componentDidMount(){
    // Overriding the inherited method "componentDidMount" to run our own code
    //   during reacts lifecycle
    console.log("i guess component mounted?", this);
  },
  newElement(){

  },
  onLinkClickHandler(e){
    // Find element to add to (data-js)
    var sectionElement = this.refs.section;
    console.log(this.newElement);
    // Have string/html to add
    // Replace/append inner html
    sectionElement.innerHTML += "<article>new</article>";
  },
  render() {
    // The parens after the return wrap our JSX strings
    return (
      <section ref="section">
        <article>
          <h2>Article title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a href="#" onClick={this.onLinkClickHandler}> Add Another Article </a>
        </article>
      </section>
    )
  }
})
