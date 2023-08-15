import React from 'react';
import './Menu.css';
import { useSelector } from 'react-redux';
import { CButton } from '@coreui/react';

export const Menu = ({ handleColorChange, clickHandler }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <nav>
      {userInfo && userInfo.isAdmin && (
        <ul className='color-list'>
          <li style={{ backgroundColor: 'crimson' }}>
            <a
              href='/red'
              onClick={(event) => handleColorChange(event, 'crimson')}
            >
              Red
            </a>
          </li>
          <li style={{ backgroundColor: 'teal' }}>
            <a
              href='/green'
              onClick={(event) => handleColorChange(event, 'teal')}
            >
              Green
            </a>
          </li>
          <li style={{ backgroundColor: 'steelblue' }}>
            <a
              href='/blue'
              onClick={(event) => handleColorChange(event, 'steelblue')}
            >
              Blue
            </a>
          </li>

          <CButton
            className='custom-cbutton'
            color='danger'
            variant='outline'
            onClick={(event) => clickHandler(event)}
          >
            Delete
          </CButton>
        </ul>
      )}
    </nav>
  );
};
