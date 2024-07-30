import { Button } from "antd";
import { useCallback } from "react";
import { resetCount, setCount } from "../../store/count";

function ActionButton() {
    const handleAddTen = useCallback(() => {
        setCount(v => v + 10);
    },[]);

    const handleDeclareTen = useCallback(() => {
        setCount(v => v - 10);
    },[]);

    const handleIncrement = useCallback(() => {
        setCount(v => v + 1);
    },[]);

    const handleReset = useCallback(() => {
        resetCount();
    },[]);

    const handleSetCount = useCallback(() => {
        setCount(100);
    },[]);

    return (
        <>
            <Button onClick={handleAddTen}>增加10</Button>
            <Button onClick={handleDeclareTen}>减少10</Button>
            <Button onClick={handleIncrement}>自增</Button>
            <Button onClick={handleReset}>重置</Button>
            <Button onClick={handleSetCount}>设置为100</Button>
        </>
    )
}

export default ActionButton;