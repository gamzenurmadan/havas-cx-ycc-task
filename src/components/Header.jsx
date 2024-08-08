import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header({heading, paragraph, linkName, linkUrl='#'}){
    return(
    <div className='mb-10'>
        <div className='flex justify-center'>
            <img 
            className='h-14 w-14'
            src= 'src\assets\default-press.jpg'
            />
        </div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'> {heading} </h2>
        <p className='mt-2 mb-5 text-center text-sm text-gray-600'> 
            {paragraph} {' '}
            <Link to={linkUrl} className='font-medium text-purple-600 hover:text-purple-500'>
                {linkName}
            </Link>
        </p>
    </div>
    );
}

Header.propTypes = {
    heading: PropTypes.string,
    paragraph: PropTypes.string,
    linkName: PropTypes.string,
    linkUrl: PropTypes.string
}