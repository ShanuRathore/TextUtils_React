import React from 'react'

function Alert(props) {
    const capitalizeFirst = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <div style={{ height: 50 }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
                <strong>{capitalizeFirst(props.alert.type)}</strong>:{props.alert.msg}
            </div>}
        </div>
    )
}
export default Alert
