import React from 'react';
import auth from './auth-service';
import { withRouter } from 'react-router-dom';

const { Consumer, Provider } = React.createContext();

// HOC
const withAuth = (WrappedComponent) => {


    return class extends React.Component {
        render() {

            return (
                <Consumer>
                    {
                        ({ login, signup, user, logout, isLoggedin }) => {
                            return (
                                <WrappedComponent
                                    login={login}
                                    signup={signup}
                                    user={user}
                                    logout={logout}
                                    isLoggedin={isLoggedin}
                                    {...this.props} />
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
        const { email, password } = user;
        auth
            .signup({ email, password })
            .then(user => {
                this.props.history.push('/signup/next')
                this.setState({ isLoggedin: true, user })
            })
            .catch((error) =>
                console.log(error)
            );
    };

    login = user => {
        const { email, password } = user;

        auth
            .login({ email, password })
            .then(user => this.setState({ isLoggedin: true, user }))
            .catch(err => console.log(err));
    };

    logout = () => {
        auth
            .logout()
            .then(() => this.setState({ isLoggedin: false, user: null }))
            .catch(err => console.log(err));
    };

    render() {

        const { isLoading, isLoggedin, user } = this.state;
        const { login, logout, signup } = this;

        return isLoading ? (
            <div>Loading</div>
        ) : (
                <Provider value={{ isLoggedin, user, login, logout, signup }}>
                    {this.props.children}
                </Provider>
            );
    }
}

export { Consumer, withAuth };

export default withRouter(AuthProvider); 