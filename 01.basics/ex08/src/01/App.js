import React from 'react';

export default function() {
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials - 특징1: HTML과 차이점</p>
            {/* 
                1. 속성은 Camel Case 
            */}
            <input type="text" maxLength="10" />

            {/* 
                2. Element는 꼭 닫혀야 한다. 
                오류) <br>, <hr>, <input type='text'>, <img src=''> ...
            */}
            <br/>
            <hr/>
            <img src='http://ohfun.net/contents/article/images/2016/0809/1470710793254873.png'/>
            
            {/* 
                3. 속성 이름은 DOM API 기반이다.
                HTML: <div id="box" class=""></div>
                DOM API: document.getElementById('box').className = 'box';
            */}
            <div id="box" className="box">
                box~!
            </div>
        </div>
    )
}