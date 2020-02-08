import React from 'react';
import {
  MdAccountCircle,
  MdMailOutline,
  MdNotificationsNone
} from 'react-icons/md';
import Text from '../Text';
import { Container, IconsContainer } from './styled';

function HeaderBar() {
  return (
    <Container>
      <Text
        margin-left='80px'
        padding='27px 0'
        display='inline-block'
        cursor='pointer'>
        Sculptor
      </Text>
      <IconsContainer>
        <Text>
          <MdNotificationsNone
            style={{ marginRight: '25px', cursor: 'pointer' }}
          />
          <MdMailOutline style={{ marginRight: '25px', cursor: 'pointer' }} />
          <MdAccountCircle style={{ marginRight: '80px', cursor: 'pointer' }} />
        </Text>
      </IconsContainer>
    </Container>
  );
}

export default HeaderBar;
