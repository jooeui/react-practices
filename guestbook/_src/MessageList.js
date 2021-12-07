import React, {Fragment, useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Message from './Message';
import styles from './assets/scss/MessageList.scss';
import modalStyles from "./assets/scss/modal.scss";

Modal.setAppElement('body');

export default function MessageList({messages, notifyMessage}) {
    const refForm = useRef(null);   // focus를 Real Dom에서 하기 위해 useRef 사용
    // dialog를 띄우는데 너무 많은 데이터들이 필요함 - 지금은 password만 하는데도 너무 많은데 여러 input이 생기면 더 복잡할 수도!!
    // const [isOpen, setIsOpen] = useState(false);
    // const [password, setPassword] = useState('');
    // const [messageNo, setMessageNo] = useState(0);  // 모달을 띄우고(notifyDeleteMessage) no는 사라지기 때문에 상태를 저장 해줘야함!

    const [modalData, setModalData] = useState({isOpen: false})
    useEffect( () => {
        setTimeout( () => {
            refForm.current && refForm.current.password.focus();
        }, 200);
    }, [modalData]);

    // submit이 되지 않아용
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("삭제된당:", messageNo, e.target.password.value);
        // console.log("삭제된당:", modalData);
        try {
            if(e.target.password.value === ''){
                return;
            }

            // const response = await fetch(`/api/${modalData.messageNo}`, {
            //     method: 'delete',
            //     header: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     },
            //     body: JSON.stringify({password: modalData.passwordd})
            // });

            // if(!response.ok){
            //     throw `${response.status} ${response.statusText}`;
            // }

            // const jsonResult = response.json;

            // 비밀번호가 틀린 경우
            // jsonResult.data = null;
            // setModalData(Object.assign({}, modalData, {label: '비밀번호가 일치하지 않습니다.', password: ''}));

            // 삭제가 잘 된 경우
            // jsonResult.data = 10;
            setModalData({isOpen: false, password: ''});
            notifyMessage.delete(modalData.messageNo);
        } catch (err) {
            console.log(err);
        }
    }

    const notifyDeleteMessage = (no) => {
        // setMessageNo(no);
        // setPassword('');
        // setIsOpen(true);    // modal 띄운다!!!!!
        
        // 위 세개를 modalData로 묶음!!!!!!!!
        setModalData({
            label: '작성 시 입력했던 비밀번호를 입력하세요.',
            isOpen: true,
            messageNo: no,
            password: ''    // 모달을 띄울 때 password input reset
        })
    } 

    return (
        <Fragment>
            <ul className={styles.MessageList}>
                {messages.map(message => <Message key={`guestbook_message_${message.no}`}
                                                  no={message.no}
                                                  name={message.name}
                                                  message={message.message}
                                                  notifyDeleteMessage={notifyDeleteMessage} />)}
            </ul>
            <Modal
                isOpen={modalData.isOpen}
                // onRequestClose={() => setIsOpen(false)}  // isOpen을 modalData에 넣어줬기 때문에 xx
                // onRequestClose={() => setModalData({isOpen: false})}    // 이렇게 하면 기존 데이터를 날려버림(새로운 데이터로 치환)
                onRequestClose={ () => setModalData({isOpen: false}) }
                shouldCloseOnOverlayClick={true}
                className={modalStyles.Modal}
                overlayClassName={modalStyles.Overlay}
                style={{content: {width: 350}}}>
                <h1>비밀번호 입력</h1>
                <div>
                    {/* 
                        제어 컴포넌트 사용 - form 없이 input만 써도 됨 / useState, input value, onChange 사용해야함 
                        비제어 컴포넌트 - form이 있어야 함! 
                    */}
                    <form 
                        ref={refForm}
                        className={styles.DeleteForm}
                        onSubmit={handleSubmit}>
                        <label>{modalData.label || ''}</label>
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            name={'password'}
                            value={modalData.password}
                            placeholder={'비밀번호'}
                            onChange={ (e) => {setModalData(Object.assign({}, modalData, {password: e.target.value}))} }/>
                    </form>
                </div>
                <div className={modalStyles['modal-dialog-buttons']}>
                    <button onClick={ () => {
                        refForm.current.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}));
                    } }>
                        확인
                    </button>
                    <button onClick={ () => setModalData(Object.assign({}, modalData, {isOpen: false})) }>취소</button>
                </div>
            </Modal>
        </Fragment>
    );
}

MessageList.propType = {
    message: PropTypes.arrayOf(PropTypes.shape(Message.propType))
}