import React, { useContext } from 'react';
import { Divider, Header, Icon, SemanticICONS, Step } from 'semantic-ui-react';
import firebase from 'firebase/compat/app';

import { NewRoomButton } from '../TopBar';
import styles from './Home.module.css';
import { MetadataContext } from '../../MetadataContext';

export const Home = () => {
  const { user } = useContext(MetadataContext);
  return (
    <div>
      <div className={styles.container}>
        <Hero
          heroText={'ดูวิดีโอด้วยกันกับเพื่อน ๆ ได้ทุกที่'}
          subText={'ไม่ต้องลงทะเบียนหรือดาวน์โหลด'}
          action={
            <div style={{ marginTop: '8px', width: '300px' }}>
              <NewRoomButton size="huge" />
            </div>
          }
          image={'/screenshot4.png'}
        />
        <Divider horizontal>
          <Header inverted as="h4">
            <Icon name="cogs" />
            Features
          </Header>
        </Divider>
        <div className={styles.featureSection}>
          <Feature
            icon="sync"
            title="Synchronized Play"
            text="การเริ่มหยุดและเลื่อนวิดีโอจะซิงค์ให้ตรงกันกับทุกคน"
          />
          <Feature
            icon="conversation"
            title="Chat"
            text="แชทกับคนอื่นได้ในห้องของคุณ"
          />
          <Feature
            icon="list"
            title="Queues"
            text="ลำดับคิววีดีโอได้หลายรายการ"
          />
          <Feature
            icon="video"
            title="Video chat"
            text="เข้าร่วมวิดีโอแชทและคุยแบบเห็นหน้า"
          />
        </div>
        <Hero
          heroText={'แสดงความรู้สึกร่วมกันในทุกช่วงเวลา'}
          subText={"ค้นหาช่วงเวลาแห่งความสุขร่วมกันได้ แม้จะอยู่ห่างไกลกัน"}
          image={'/screenshot18.png'}
          color="green"
        />
        <Divider horizontal>
          <Header inverted as="h4">
            <Icon name="film" />
            Watch anything together
          </Header>
        </Divider>
        <div className={styles.featureSection}>
          <Feature
            icon="desktop"
            title={`VirtualBrowser`}
            text="เบราว์เซอร์เสมือนที่รันบนคลาวด์"
          />
          <Feature
            icon="youtube"
            title={`YouTube`}
            text="ดูวิดีโอด้วยกันจาก YouTube"
          />
          <Feature
            icon="slideshare"
            title={`Screensharing`}
            text="แชร์แท็บหรือหน้าจอของคุณ"
          />
          <Feature
            icon="file"
            title={`File`}
            text="อัปโหลดและสตรีมไฟล์ของคุณ"
          />
          <Feature
            icon="linkify"
            title={`URL`}
            text="รองรับ URL ของวิดีโอเพื่อให้ทุกคนสามารถดูได้"
          />
        </div>
        <Hero
          heroText={'โหมดภาพยนตร์'}
          subText={
            'วิดีโอและแชทมาอยู่ตรงกลางเพื่อให้มีสิ่งรบกวน้อยที่สุด'
          }
          image={'/screenshot14.png'}
        />
        <Divider horizontal />
        <div
          style={{
            padding: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className={styles.heroText}>เริ่มต้น</div>
          <div className={styles.featureSection}>
            <Step.Group style={{ margin: '8px' }}>
              <Step>
                <Icon name="certificate" />
                <Step.Content>
                  <Step.Title>1.</Step.Title>
                  <Step.Description>สร้างห้อง</Step.Description>
                </Step.Content>
              </Step>

              <Step>
                <Icon name="group" />
                <Step.Content>
                  <Step.Title>2.</Step.Title>
                  <Step.Description>แชร์ลิงก์กับเพื่อน</Step.Description>
                </Step.Content>
              </Step>

              <Step>
                <Icon name="film" />
                <Step.Content>
                  <Step.Title>3.</Step.Title>
                  <Step.Description>เลือกสิ่งที่จะดู</Step.Description>
                </Step.Content>
              </Step>

              <Step>
                <Icon name="thumbs up outline" />
                <Step.Content>
                  <Step.Title>4.</Step.Title>
                  <Step.Description>สำเร็จ!</Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
          </div>
          <div style={{ width: '160px' }}>
            <NewRoomButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({
  icon,
  text,
  title,
}: {
  icon: string;
  text: string;
  title: string;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flex: '1 1 0px',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        minWidth: '180px',
      }}
    >
      <Icon fitted size="huge" name={icon as SemanticICONS} />
      <h4 className={styles.featureTitle}>{title}</h4>
      <div className={styles.featureText}>{text}</div>
    </div>
  );
};

export const Hero = ({
  heroText,
  subText,
  subText2,
  action,
  image,
  color,
}: {
  heroText?: string;
  subText?: string;
  subText2?: string;
  action?: React.ReactNode;
  image?: string;
  color?: string;
}) => {
  return (
    <div className={`${styles.hero} ${color === 'green' ? styles.green : ''}`}>
      <div className={styles.heroInner}>
        <div style={{ padding: '30px', flex: '1 1 0' }}>
          <div className={styles.heroText}>{heroText}</div>
          <div className={styles.subText}>{subText}</div>
          <div className={styles.subText}>{subText2}</div>
          {action}
        </div>
        <div
          style={{
            flex: '1 1 0',
          }}
        >
          <img
            alt="hero"
            style={{ width: '100%', borderRadius: '10px' }}
            src={image}
          />
        </div>
      </div>
    </div>
  );
};
