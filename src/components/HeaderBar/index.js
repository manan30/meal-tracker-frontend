import React from 'react';
import {
  MdAccountCircle,
  MdMailOutline,
  MdNotificationsNone
} from 'react-icons/md';
import { Link } from '../../GlobalStyles';
import Text from '../Text';
import { Container, IconsContainer } from './styled';

function HeaderBar() {
  return (
    <Container>
      <Link
        to='/'
        flex-auto='basis'
        flex-grow='8'
        margin-left='30px'
        cursor='default'>
        <Text cursor='pointer' width='0'>
          Sculptor
        </Text>
      </Link>
      <IconsContainer>
        <Link to='/notifications' height='20px' width='20px' cursor='pointer'>
          <MdNotificationsNone />
        </Link>
        <Link
          to='/messages'
          // flex-auto='basis'
          // flex-grow='1'
          height='20px'
          width='20px'
          cursor='pointer'>
          <MdMailOutline />
        </Link>
        <Link
          to='/profile'
          // flex-auto='basis'
          // flex-grow='1'
          height='20px'
          width='20px'
          cursor='pointer'>
          <MdAccountCircle />
        </Link>
      </IconsContainer>
    </Container>
  );
}

export default HeaderBar;
