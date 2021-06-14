import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Container from '../Container';

import { headerThemePropType } from '../CaseHeader';

const Team = ({ styles, content, background, headerTheme }) => {
    return (
        <Container headerTheme={headerTheme} isFluid background={background}>
            <div className={styles.container}>
                <h2 className={styles.title}>Team</h2>
                <div className={styles.departmentsContainer}>
                    {content.map(item => (
                        <div key={item.department} className={styles.teamContainer}>
                            <span className={styles.department}>
                                <FormattedMessage id={item.department} />
                            </span>
                            {item.names.map(member => (
                                <span key={member} className={styles.names}>
                                    {member}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

Team.propTypes = {
    styles: PropTypes.shape({
        title: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        names: PropTypes.string.isRequired,
        departmentsContainer: PropTypes.string.isRequired,
        teamContainer: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.arrayOf(
        PropTypes.shape({
            department: PropTypes.string,
            names: PropTypes.arrayOf(PropTypes.string),
        }),
    ).isRequired,
    background: PropTypes.string,
    ...headerThemePropType,
};

Team.defaultProps = {
    textColor: '#333',
    backgroundColor: 'white',
    headerTheme: 'dark',
};

export default Team;
