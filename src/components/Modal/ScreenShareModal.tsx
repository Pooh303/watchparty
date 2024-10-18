import React, { useContext } from 'react';
import { Modal, Button, Table } from 'semantic-ui-react';
import { SubscribeButton } from '../SubscribeButton/SubscribeButton';
import { MetadataContext } from '../../MetadataContext';

export const ScreenShareModal = ({
  closeModal,
  startScreenShare,
}: {
  closeModal: () => void;
  startScreenShare: (useMediaSoup: boolean) => void;
}) => {
  const { isSubscriber } = useContext(MetadataContext);
  const subscribeButton = <SubscribeButton />;
  return (
    <Modal open={true} onClose={closeModal}>
      <Modal.Header style={{ fontFamily: 'fonts' }}>แชร์หน้าจอ</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <div>คุณกำลังจะแชร์หน้าจออุปกรณ์ของคุณ !</div>
          <ul>
            <li>ฟีเจอร์นี้รองรับแค่บน Chrome และ Edge</li>
            {/* <li>
              Audio sharing only works if sharing your entire screen or a
              browser tab, not an application.
            </li> */}
          </ul>
          {/* <Table definition unstackable striped celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>WatchParty Free</Table.HeaderCell>
                <Table.HeaderCell>WatchParty Plus</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Method</Table.Cell>
                <Table.Cell>
                  Stream your video to each viewer individually.
                </Table.Cell>
                <Table.Cell>
                  Our relay server streams to viewers for you.
                  <br />
                  Higher quality and lower bandwidth usage.
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Latency</Table.Cell>
                <Table.Cell>{`< 1s`}</Table.Cell>
                <Table.Cell>{`< 1s`}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Recommended Max Viewers</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>20</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Recommended Upload Speed</Table.Cell>
                <Table.Cell>5 Mbps per viewer</Table.Cell>
                <Table.Cell>5 Mbps</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell></Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={() => {
                      startScreenShare(false);
                      closeModal();
                    }}
                  >
                    Start Screenshare
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  {isSubscriber ? (
                    <Button
                      color="orange"
                      onClick={() => {
                        startScreenShare(true);
                        closeModal();
                      }}
                    >
                      Start Screenshare w/Relay
                    </Button>
                  ) : (
                    subscribeButton
                  )}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table> */}
          {isSubscriber ? (
                    <Button
                      color="orange"
                      onClick={() => {
                        startScreenShare(true);
                        closeModal();
                      }}
                      style={{ fontFamily: 'fonts' }}
                    >
                      แชร์หน้าจอด้วย Relay
                    </Button>
                  ) : (
                    subscribeButton
                  )}
          <Button
                    onClick={() => {
                      startScreenShare(false);
                      closeModal();
                    }}
                    style={{ fontFamily: 'fonts' }}
                  >
                    แชร์หน้าจอ
                  </Button>
                  
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
