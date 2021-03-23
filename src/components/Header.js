import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click');
    }
    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
            </header>
            <Button color='green' text='Add' 
            onClick={onClick} />
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header
