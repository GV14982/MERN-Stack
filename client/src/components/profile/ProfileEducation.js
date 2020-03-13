import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({education : {
    school, degree, fieldofstudy, from, to, current, description
}}) => <div>
    <h3 className="text-dark">{school}</h3>
    <p>
        <Moment format="YYY/MM/DD">{from}</Moment> - {!to ? 'Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
    </p>
    <p>
        <strong>Degree: </strong>{degree}
    </p>
    <p>
        <strong>Field of Study: </strong>{fieldofstudy}
    </p>
    <p>
        {description ? <Fragment>
            <strong>Description: </strong> {description}
        </Fragment> : ''}
    </p>
</div>

ProfileEducation.propTypes = {
    experience: PropTypes.array.isRequired,
}

export default ProfileEducation