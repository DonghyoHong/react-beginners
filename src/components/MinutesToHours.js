import {useState} from "react";

export function MinutesToHours() {
    const [amount, setAmount] = useState(0);
    const [invert, setInvert] = useState(false);

    const onChange = (event) => {
        setAmount(event.target.value);
    }

    const reset = () => setAmount(0);

    const onInvalid = () => {
        reset();
        setInvert((current) => !current);
    };

    return (
        <div>
            <div>
                <label htmlFor="minutes">Minutes</label>
                <input
                    id="minutes"
                    type="number"
                    placeholder="Minutes"
                    value={invert ? amount * 60 : amount}
                    onChange={onChange}
                    disabled={invert}
                />
                <h2>You Want to {amount}</h2>
            </div>
            <div>
                <label htmlFor="hours">Hours</label>
                <input id="hours"
                       type="number"
                       placeholder="Hours"
                       value={invert ? amount : Math.round(amount / 60)}
                       disabled={!invert}
                />
            </div>
            <button onClick={reset}>reset</button>
            <button onClick={onInvalid}>{invert ? "Turn Back" : "Invert"}</button>
        </div>
    );
}
