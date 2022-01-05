import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  //const notification = useSelector(state => state.message)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (props.message) {
    return (
      <div style={style}>
        {props.message}
      </div>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(Notification)
