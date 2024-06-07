import React from "react";

export function Btn({text, background, changeValue}) {
    //props 대신 {data} 로 컴포넌트에 넘겨주기로 한 데이터 형태를 받을 수 있음
    // -> data.text, data.backgroun
    // props를 쓰게 되면 컴포넌트에 선언되어 있는 것들을 가져올 수 잇음
    // -> props.data.text, props.data.backgroun
    console.log(`${text} was rendered.`);
    // Re-Render가 다시 되지 않도록 Memo를 이용하면 됨


    return (
        <div>
            <button onClick={changeValue}
                    style={{
                        background: background
                        , color: "white"
                        , padding: "10px 20px"
                        , border: 0
                        , borderRadius: 10
                        , fontSize: 16
                    }}>{text}
            </button>
        </div>
    );
}