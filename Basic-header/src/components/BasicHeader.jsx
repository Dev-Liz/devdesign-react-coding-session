import PropTypes from 'prop-types'

function BasicHeader({title}) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

BasicHeader.propTypes = {
  title : PropTypes.string.isRequired
}

export default BasicHeader