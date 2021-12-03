import React from 'react';
import PropTypes from 'prop-types';
import styles from './assets/scss/Message.scss';

export default function Message({no, name, message, notifyDeleteMessage}) {
    // 여기서 클릭 받는 건 좋지 않음 ㅠㅠ
    // bottom-up 생각하기 !
    // no 알려줄테니까 니가(부모인 MessageList) 처리해줘!!!
    /* 
    const onDeleteClick = () => {
        console.log('Click!: ' + no);
    } 
    */
    
    return (
        <li className={styles.Message}>
            <strong>{name}</strong>
            <p>
                {/* {message.replace("\n", "<br/>")}    이렇게 하면 절대 안 됨!! <br/>을 컴포넌트 처리해야하니까! */}
                {
                    message && message
                        .split('\n')
                        .map(
                            (line, index) => index > 0 ? 
                                <span key={`${no}-${index}`}>
                                    <br/> {line}
                                </span>
                                : line
                        )
                }
            </p>
            <strong/>
            <a onClick={ () => notifyDeleteMessage(no)}>삭제</a>    {/* click이 되었을 때 실행 시키니까 함수 정의를 해야 함!!! */}
        </li>
    );
}

Message.propTypes = {
    no: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}