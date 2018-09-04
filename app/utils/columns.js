import React from 'react';
import { Link } from 'react-router-dom';

export const COLUMNS = [
  {
    Header: 'Username',
    accessor: 'username',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    width: 120,
    Cell: props => {
      console.log('props', props);
      return (
        <div>
          <Link to={`/details/${props.original._id}`}>More Details</Link>
        </div>
      );
    },
  },
];
