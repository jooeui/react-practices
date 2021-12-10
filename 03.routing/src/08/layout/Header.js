import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import '../assets/scss/layout/Header.scss';

export default function Header() {
    const [authUser, setAuthUser] = useState(null);
    // useContext ?     < 여기 저장. 어느 컴포넌트에서나 접근 가능
    useEffect(() => {
        console.log("요청", "AJAX 인증 정보");
        console.log("응답", "인증 정보: authUser");
        setAuthUser({
            no: 10,
            name: "긴주이"
        });
        // setAuthUser(null);
    }, []);

    return (
        <header>
            <h1>
                <NavLink to={'/'}>Header</NavLink>
            </h1>
            <ul>
                {
                    authUser ?
                    <Fragment>
                        <li><NavLink to="/user/settings">회원정보</NavLink></li>
                        <li><a
                                href=""
                                onClick={e => {
                                    e.preventDefault();
                                    console.log('AJAX: 로그아웃');
                                    location.href='/';
                                }}>로그아웃</a>
                        </li>
                        <li>{`${authUser.name}님 안녕하세요`}</li>
                    </Fragment> :
                    <Fragment>
                        <li><NavLink to="/user/login">로그인</NavLink></li>
                        <li><NavLink to="/user/join">회원가입</NavLink></li>
                    </Fragment>

                }
                </ul>
            </header>
    );
}