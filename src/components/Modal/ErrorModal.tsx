import React from 'react';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';

export const ErrorModal = ({ error }: { error: string }) => {
  return (
    <Modal inverted="true" basic open>
      <Header as="h1" style={{ textAlign: 'center' }}>
        {error}
      </Header>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          primary
          size="huge"
          onClick={() => {
            window.location.href = '/';
          }}
          icon
          labelPosition="left"
          style={{fontFamily: 'fonts', borderRadius: '10px'}}
        >
          <Icon name="home" />
          กลับไปที่หน้าหลัก
        </Button>
      </div>
    </Modal>
  );
};
