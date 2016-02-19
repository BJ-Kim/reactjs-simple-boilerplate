import React      from 'react';
import AuthAction from '../actions/AuthAction';
import AuthStore  from '../stores/AuthStore';

class MainPage extends React.Component {
  constructor() {
    super();

    this.state         = this._getLoginState();
    this._handleSubmit = this._handleSubmit.bind(this);
    this._onChange     = this._onChange.bind(this);
  }

  _getLoginState() {
    return {
      user : AuthStore.user,
    }
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  _handleSubmit(event) {
    event.preventDefault()
    
    const email    = this.refs.email.value
    const password = this.refs.password.value

    AuthAction.login(email, password);
  }

  componentDidMount() {
    // Add change lister to the Auth Store
    AuthStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this._onChange);
  }

  render() {
    var loginForm = (
      <section>
        <h1>Login</h1>
        <form className="simple-form" onSubmit={this._handleSubmit.bind(this)}>
          <input type="text" ref="email" name="login" placeholder="Username or Email" />
          <input type="password" ref="password" name="password" placeholder="Password" />
          <input type="submit" name="commit" value="Login" />
        </form>
      </section>
    );
    var welcomeMsg = (
      <h1>Hello {this.state.user}</h1>
    )

    return this.state.user ? welcomeMsg : loginForm;
  }
}

export default MainPage;
