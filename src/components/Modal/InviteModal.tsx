import React, { useState } from 'react';
import { Modal, Header, Input } from 'semantic-ui-react';

export const InviteModal = ({
  closeInviteModal,
}: {
  closeInviteModal: () => void;
}) => {
  const [inviteLinkCopied, setInviteLinkCopied] = useState(false);

  const handleCopyInviteLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setInviteLinkCopied(true);
  };

  return (
    <Modal open centered={false} size="tiny" onClose={closeInviteModal}>
      <Modal.Header as="h3" style={{ fontFamily: 'fonts' }}>ชวนเพื่อนและร่วมรับชมไปด้วยกัน</Modal.Header>
      <Modal.Content>
        <Header as="h5">คัดลอกและแชร์ลิ้งก์นี้:</Header>
        <Input
          fluid
          readOnly
          action={{
            color: 'teal',
            labelPosition: 'right',
            icon: 'copy',
            content: 'copy',            
            onClick: handleCopyInviteLink,
          }}
          defaultValue={window.location.href}
        />
        {inviteLinkCopied && (
          <div style={{ marginTop: 15 }}>
            <b style={{ color: 'green' }}>ลิ้งก์คัดลอกไปยังคลิปบอร์ด</b>
          </div>
        )}
      </Modal.Content>
    </Modal>
  );
};
