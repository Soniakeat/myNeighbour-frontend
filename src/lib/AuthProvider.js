import React from "react";
import auth from "./auth-service";
import profilesApi from "../services/profiles-service";
import itemsApi from "../services/items-service";

import { withRouter } from "react-router-dom";

const { Consumer, Provider } = React.createContext();

// HOC
const withAuth = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {({
            login,
            signup,
            signupNext,
            user,
            logout,
            isLoggedin,
            updateProfile,
            updateItem
          }) => {
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                signupNext={signupNext}
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
                updateProfile={updateProfile}
                updateItem={updateItem}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// PROVIDER
class AuthProvider extends React.Component {
  state = { isLoggedin: false, user: null, isLoading: true };

  componentDidMount() {
    auth
      .me()
      .then(user =>
        this.setState({ isLoggedin: true, user: user, isLoading: false })
      )
      .catch(err =>
        this.setState({ isLoggedin: false, user: null, isLoading: false })
      );
  }

  signup = user => {
    const {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      postalCode
    } = user;
    return auth
      .signup({ email, password, firstName, lastName, phoneNumber, postalCode })
      .then(user => {
        /* this.props.history.push('/signup/next') */
        this.setState({ isLoggedin: true, user });
      })
      .catch(error => console.log(error));
  };

  updateProfile = user => {
    const { email, firstName, lastName, phoneNumber, postalCode, id } = user;
    return profilesApi
      .editProfile(id, { email, firstName, lastName, phoneNumber, postalCode })
      .then(user => {
        /* this.props.history.push('/signup/next') */
        this.setState({ user });
      })
      .catch(error => console.log(error));
  };

  updateItem = item => {
    return itemsApi
      .editItem(item)
      .then(item => {
        /* this.props.history.push('/signup/next') */
        this.setState({ item });
      })
      .catch(error => console.log(error));
  };

  login = user => {
    const { email, password } = user;

    auth
      .login({ email, password })
      .then(user => {
        this.props.history.push("/items");
        this.setState({ isLoggedin: true, user });
      })
      .catch(error => console.log(error));
  };

  logout = () => {
    auth
      .logout()
      .then(() => this.setState({ isLoggedin: false, user: null }))
      .catch(err => console.log(err));
  };

  render() {
    const { isLoading, isLoggedin, user } = this.state;
    const {
      login,
      logout,
      signup,
      signupNext,
      updateProfile,
      updateItem
    } = this;

    return isLoading ? (
      <div>Loading</div>
    ) : (
      <Provider
        value={{
          isLoggedin,
          user,
          login,
          logout,
          signup,
          signupNext,
          updateProfile,
          updateItem
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, withAuth };

export default withRouter(AuthProvider);
