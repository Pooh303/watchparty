import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from 'semantic-ui-react';
import { Hero } from '../Home/Home';

const mdStyle = {
  color: 'white',
  margin: '50px',
  maxWidth: '800px',
  fontFamily: 'fonts'
};


export const Privacy = () => {
  return (
    <div style={mdStyle}>
      <ReactMarkdown>
        {`
นโยบายความเป็นส่วนตัว  


ห้อง

- โดยค่าเริ่มต้น ห้องจะเป็นชั่วคราวและจะหมดอายุหลังจากหนึ่งวันของความไม่เคลื่อนไหว  
- ผู้ใช้มีตัวเลือกในการทำให้ห้องเป็นถาวร ซึ่งสามารถยกเลิกได้ทุกเมื่อ  
- เราจะไม่เก็บบันทึกเนื้อหาที่ผู้ใช้รับชม  

ข้อมูลส่วนบุคคล  

- คุณไม่จำเป็นต้องลงทะเบียนเพื่อใช้บริการ แต่คุณมีตัวเลือกในการลงชื่อเข้าใช้ด้วยอีเมลหรือผู้ให้บริการการตรวจสอบสิทธิ์ ซึ่งจะถูกใช้เพื่อแสดงชื่อและภาพของคุณในห้องที่คุณเข้าร่วม  
- หากคุณให้ข้อมูลนี้ เราอาจใช้เพื่อ ติดต่อคุณเกี่ยวกับการใช้บริการของคุณ หรือเพื่อเชื่อมโยงบัญชีของคุณกับการสมัครสมาชิก  
- เราจะไม่ขายข้อมูลส่วนบุคคลให้กับบุคคลที่สาม  
- คุณมีสิทธิ์ขอให้ลบข้อมูลผู้ใช้ของคุณ ตามกฎหมายต่าง ๆ ที่ควบคุมการปกป้องข้อมูล กรุณาติดต่อ support@watchparty.me เพื่อขอให้ลบข้อมูลผู้ใช้  
- ข้อมูลการชำระเงินจะถูกจัดการโดยผู้ให้บริการ เช่น Stripe เราจะไม่เก็บหรือเข้าถึงข้อมูลทางการเงินโดยตรง  

คุกกี้  

- เราใช้บริการเช่น Google Analytics เพื่อวัดการใช้งาน บริการเหล่านี้อาจตั้งค่าคุกกี้หรือข้อมูลอื่น ๆ บนอุปกรณ์ของคุณ  

เบราว์เซอร์เสมือน  

- เครื่องเสมือนจะถูกรีไซเคิลหลังจากแต่ละเซสชันสิ้นสุดและข้อมูลใด ๆ บนเครื่องจะถูกทำลาย  
- คำสั่งของคุณจะถูกเข้ารหัสขณะส่งไปยังเครื่องเสมือน  

YouTube  

- บริการมีความสามารถในการค้นหาและเล่นวิดีโอ YouTube Google/YouTube อาจใช้ข้อมูลที่ให้ไว้กับบริการค้นหา ตาม [นโยบายความเป็นส่วนตัวของ Google](https://policies.google.com/privacy)`}
      </ReactMarkdown>
    </div>
  );
};

export const Terms = () => {
  return (
    <div style={mdStyle}>
      <ReactMarkdown>
        {`
ข้อกำหนดในการให้บริการ


การใช้บริการนี้คุณตกลงตามข้อกำหนดดังต่อไปนี้:  
- คุณอายุเกิน 13 ปี  
- การใช้บริการของคุณอาจถูกยุติหากพบว่าคุณแชร์เนื้อหาที่ผิดกฎหมายหรือมีการละเมิด  
- บริการนี้ไม่มีการรับประกันเวลาในการทำงานหรือการเข้าถึง  
- คุณใช้บริการนี้โดยมีความเสี่ยงที่จะพบเนื้อหาที่ไม่เหมาะสม เนื่องจากเราไม่ทำการตรวจสอบห้องอย่างเข้มงวด เว้นแต่จะพบว่าเนื้อหานั้นผิดกฎหมายหรือมีการละเมิด  

การสมัครสมาชิก  

- หากคุณไม่พอใจกับบริการด้วยเหตุผลใดก็ตามหรือเชื่อว่าคุณถูกเรียกเก็บเงินโดยผิดพลาด กรุณาติดต่อ support@watchparty.me  
- เราจะคืนเงินเต็มจำนวนสำหรับการชำระเงินล่าสุด โดยไม่ถามคำถามใด ๆ  

YouTube  

- บริการนี้มีความสามารถในการค้นหาและเล่นวิดีโอ YouTube โดยการใช้การค้นหา YouTube [ข้อกำหนดในการให้บริการของ YouTube](https://www.youtube.com/t/terms)`}
      </ReactMarkdown>
    </div>
  );
};

export const FAQ = () => {
  return (
    <div style={mdStyle}>
      <ReactMarkdown>
        {`
คำถามที่พบบ่อย  
 
- VBrowser คืออะไร?  

เบราว์เซอร์เสมือน (VirtualBrowser) คือเบราว์เซอร์ที่รันอยู่บนคลาวด์ซึ่งสมาชิกในห้องสามารถเชื่อมต่อได้ ทุกคนในห้องจะเห็นสิ่งเดียวกัน ดังนั้นจึงเป็นวิธีที่ยอดเยี่ยมในการดูวิดีโอหรือทำงานร่วมกัน  

- ทำไมเซสชัน VirtualBrowser ของฉันถึงหยุดทำงาน?  

VirtualBrowser จะหยุดทำงานโดยอัตโนมัติหากไม่มีใครอยู่ในห้องเป็นระยะเวลาหนึ่ง  
เซสชัน VBrowser ยังถูกจำกัดที่สูงสุด 3 ชั่วโมงสำหรับผู้ใช้ฟรี และ 24 ชั่วโมงสำหรับสมาชิก  

- ทุกคนในห้องต้องเป็นสมาชิกเพื่อรับประโยชน์ไหม?  

ไม่, เพียงแค่ผู้ที่สร้าง VirtualBrowser เท่านั้นที่ต้องเป็นสมาชิก  

- ฉันจะเข้าถึงไซต์ที่แสดงข้อความ "ไม่สามารถใช้งานได้" ใน VBrowser ได้อย่างไร?  

บางไซต์อาจบล็อกการเข้าถึงที่ตรวจพบว่ามาจากคลาวด์ คุณอาจต้องติดตั้งส่วนขยาย VPN ภายในเบราว์เซอร์เสมือน  

- ทำไมฉันถึงไม่ได้ยินเสียงเมื่อแชร์หน้าจอ?  

เพื่อแชร์เสียง คุณต้องใช้ Chrome/Edge และแชร์แท็บหรือหน้าจอเดสก์ท็อป  

`}
      </ReactMarkdown>
    </div>
  );
};

export const DiscordBot = () => {
  return (
    <div>
      <Hero
        heroText={
          'Add the WatchParty Discord bot to your server to easily generate WatchParty links.'
        }
        subText={'/watch to generate a new empty room'}
        subText2={'/watch video <URL_HERE> to create a room with a video'}
        action={
          <Button
            style={{ marginTop: '1em' }}
            color="blue"
            size="big"
            target="_blank"
            href="https://discord.com/api/oauth2/authorize?client_id=1071394728513380372&permissions=2147485696&scope=bot"
          >
            Add to Discord
          </Button>
        }
        image={'/screenshot5.png'}
      />
    </div>
  );
};
