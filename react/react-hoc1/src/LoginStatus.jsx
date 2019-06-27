import React, { Component } from 'react';
class LoginStatus extends Component {
    render() {
        // if (!login) {
        //     return null
        // }
        return (
            <button>已经登陆</button>
        );
    }
}

LoginStatus.displayName = 'LoginStatus'
export default LoginStatus