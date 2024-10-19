import React, { useState } from 'react';
import { Button, Icon, Popup } from 'semantic-ui-react';
import { InviteModal } from '../Modal/InviteModal';

export const InviteButton = () => {
  const [inviteModalOpen, setInviteModalOpen] = useState(false);

  return (
    <>
      {inviteModalOpen && (
        <InviteModal closeInviteModal={() => setInviteModalOpen(false)} />
      )}
      <Popup
        content="ชวนเพื่อนมาร่วมตี้!"
        trigger={
          <Button
            color="green"
            icon
            labelPosition="left"
            fluid
            className="toolButton"
            style={{ minWidth: '12em',
              background: 'linear-gradient(to right, #4CAF50, #8BC34A)',
              fontFamily: 'fonts, sans-serif',
              borderRadius: '10px'
             }}
            onClick={() => setInviteModalOpen(true)}
          >
            <Icon name="add user" />
            ชวนเพื่อน</Button>
        }
      />
    </>
  );
};
