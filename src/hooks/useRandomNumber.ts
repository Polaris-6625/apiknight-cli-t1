import { useEffect, useState } from "react"
import { getRandomNumber } from "@/utils/createRadomNumber"

export const useRandomNumber = () => {
    const [currentNumber,setCurrentNumber] = useState<number>(0);

    // 不断调用生成随机数的方法,setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            const randomNumber = getRandomNumber();
            setCurrentNumber(randomNumber);
        }, 1000)
        // 清除定时器
        return () => {
            clearInterval(interval);
        }
    },[]);

    return [currentNumber];
}