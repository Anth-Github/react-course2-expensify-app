console.log('hoc.js');

// Higher order component (HOC) - A component(HOC) that renders another component. 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> The info is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private Info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated  ? ( 
                <WrappedComponent {...props} />
            ) : ( 
                <p>Please login to view the info</p>
            )}
        </div>
    )
}

const Admininfo = withAdminWarning(Info);
const Authinfo = requireAuthentication(Info);


// ReactDOM.render(<Admininfo isAdmin={true} info="These are the details" />, document.getElementById('app'));     
ReactDOM.render(<Authinfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));     


