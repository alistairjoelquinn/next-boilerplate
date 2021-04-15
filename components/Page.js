import PropTypes from 'prop-types';

import Header from './Header';
import GlobalStyles from './styles/GlobalStyles';

const Page = ({ children }) => {
    return (
        <div>
            <GlobalStyles />
            <Header />
            {children}
        </div>
    );
};

Page.propTypes = {
    children: PropTypes.any
};

export default Page;