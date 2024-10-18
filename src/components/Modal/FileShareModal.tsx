import React from 'react';
import { Modal, Button, Table } from 'semantic-ui-react';
import { SubscribeButton } from '../SubscribeButton/SubscribeButton';
import { MetadataContext } from '../../MetadataContext';

export class FileShareModal extends React.Component<{
  closeModal: () => void;
  startFileShare: (useMediaSoup: boolean) => void;
}> {
  static contextType = MetadataContext;
  declare context: React.ContextType<typeof MetadataContext>;
  render() {
    const { closeModal } = this.props;
    const subscribeButton = <SubscribeButton />;
    return (
      <Modal open={true} onClose={closeModal}>
        <Modal.Header style={{ fontFamily: 'fonts' }}>แชร์มีเดียไฟล์</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <div>คุณกำลังจะแชร์ไฟล์จากอุปกรณ์ของคุณ !</div>
            <ul>
              <li>ฟีเจอร์นี้รองรับแค่บน Chrome และ Edge</li>
              {/* <li>
                Certain codecs such as AC3 aren't supported in Chrome (they work
                in Edge due to licensing)
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
                  <Table.Cell>Max Viewers</Table.Cell>
                  <Table.Cell>5</Table.Cell>
                  <Table.Cell>20</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Upload Speed</Table.Cell>
                  <Table.Cell>5 Mbps per viewer</Table.Cell>
                  <Table.Cell>5 Mbps</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        this.props.startFileShare(false);
                        this.props.closeModal();
                      }}
                    >
                      Start Fileshare
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    {this.context.isSubscriber ? (
                      <Button
                        color="orange"
                        onClick={() => {
                          this.props.startFileShare(true);
                          this.props.closeModal();
                        }}
                      >
                        Start Fileshare w/Relay
                      </Button>
                    ) : (
                      subscribeButton
                    )}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table> */}
                    <Button
                        color="orange"
                        onClick={() => {
                          this.props.startFileShare(true);
                          this.props.closeModal();
                        }}
                        style={{ fontFamily: 'fonts' }}
                      >
                        แชร์มีเดียไฟล์ด้วย Relay
                      </Button>
                    <Button
                      onClick={() => {
                        this.props.startFileShare(false);
                        this.props.closeModal();
                      }}
                      style={{ fontFamily: 'fonts' }}
                    >
                      แชร์มีเดียไฟล์
                    </Button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
