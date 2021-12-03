import React, {useState} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

import data from './assets/json/data.json';

export default function Guestbook() {
    const [messages, setMessages] = useState(data);
    const notifyMessage = {
        add: function(message) {
            console.log(message);
            // console.log('ajax posting...');

            // 성공했다고 가정
            message.no = 10;
            message.password = '';

            setMessages([message, ...messages]);  // [{message}, []]  -> [{message}, {}, {}, {}] 해야하므로 ...messages로 써줌!
        },
        delete: function(no) {
            // console.log('메세지 상태에서 메세지 삭제:', no);
            setMessages(messages.filter(message => message.no !== no));
        }
    }

    return (
        <div className={styles.ScrollOuter}>
            <div>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage}/>
                    <MessageList messages={messages} notifyMessage={notifyMessage}/>
                </div>
            </div>
        </div>
    );
}