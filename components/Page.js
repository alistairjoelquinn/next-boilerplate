import PropTypes from 'prop-types';

import GlobalStyles from './styles/GlobalStyles';

const Page = ({ children }) => {
    return (
        <div>
            <GlobalStyles />
            {children}
        </div>
    );
};

Page.propTypes = {
    children: PropTypes.any
};

export default Page;