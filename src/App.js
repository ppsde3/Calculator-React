import React from 'react';

function evil(fn) {
  return new Function('return ' + fn)();
}

class App extends React.Component {
  constructor(){
    super();
    this.state={
      input:'',
      output:''
    }

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleClear=this.handleClear.bind(this);
  }

    handleClick(eve){
      this.setState({
        input: (this.state.input)  + eve.target.value
      })
    }


    handleSubmit(){
      this.setState({
        input : eval(this.state.input)
      })
    }

    handleClear(){
      this.setState({
        input: "",
        output: ""
      })
    }

  render(){
  return (
    <div className="App">
      <form className="calculator">
        <table>
          <tr>
          <td colspan="4">
            <input type="text" name="display" id="display" value={this.state.input} readOnly/>
           </td>
          </tr>
         <tr>
            <td><input type="button" name="one" value="1" onClick={this.handleClick}/></td>
            <td><input type="button" name="two" value="2" onClick={this.handleClick}/></td>
            <td><input type="button" name="three" value="3" onClick={this.handleClick}/></td>
            <td><input type="button" class="operator" name="plus" value="+" onClick={this.handleClick}/></td>
         </tr>
         <tr>
            <td><input type="button" name="four" value="4" onClick={this.handleClick}/></td>
            <td><input type="button" name="five" value="5" onClick={this.handleClick}/></td>
            <td><input type="button" name="six" value="6" onClick={this.handleClick}/></td>
            <td><input type="button" class="operator" name="minus" value="-" onClick={this.handleClick}/></td>
          </tr>
         <tr>
            <td><input type="button" name="seven" value="7" onClick={this.handleClick}/></td>
            <td><input type="button" name="eight" value="8" onClick={this.handleClick}/></td>
            <td><input type="button" name="nine" value="9" onClick={this.handleClick}/></td>
            <td><input type="button" class="operator" name="times" value="*" onClick={this.handleClick}/></td>
          </tr>
        <tr>
            <td><input type="button" id="clear" name="clear" value="C" onClick={this.handleClear}/></td>
            <td><input type="button" name="zero" value="0" onClick={this.handleClick}/></td>
            <td><input type="button" name="doit" value="=" onClick={this.handleSubmit}/></td>
            <td><input type="button" class="operator" name="div" value="/" onClick={this.handleClick}/></td>
      </tr>
        </table>
        </form>
        </div>
  );
}}  

export default App;
