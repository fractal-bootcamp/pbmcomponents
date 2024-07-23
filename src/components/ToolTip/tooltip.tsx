import { useState, useEffect, useRef } from "react";

function getPositionClasses(position: "top" | "bottom" | "left" | "right") {
    switch (position) {
        case "top":
            return "bottom-full mb-2 left-1/2 transform -translate-x-1/2";
        case "bottom":
            return "top-full mt-2 left-1/2 transform -translate-x-1/2";
        case "left":
            return "right-full mr-2 top-1/2 transform -translate-y-1/2";
        case "right":
            return "left-full ml-2 top-1/2 transform -translate-y-1/2";
        default:
            return "";
    }
}

type ToolTipProps = {
    children: React.ReactNode;
    position: "top" | "bottom" | "left" | "right";
    trigger: "hover" | "focus";
    content: string;
    delay: number;
}

function ToolTip({ children, position, trigger, content, delay }: ToolTipProps) {
    const [showToolTip, setShowToolTip] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const timeouts = useRef<{ showTipTimeout: NodeJS.Timeout | null, hideTipTimeout: NodeJS.Timeout | null }>({ showTipTimeout: null, hideTipTimeout: null });

    const showTip = () => {
        const timeoutId = setTimeout(() => {
            setShowToolTip(true);
            setIsVisible(true);
        }, delay);
        timeouts.current.showTipTimeout = timeoutId;
    };

    const hideTip = () => {
        setShowToolTip(false);
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 200);
        timeouts.current.hideTipTimeout = timeoutId;
    };

    useEffect(() => {
        return () => {
            if (timeouts.current.showTipTimeout) {
                clearTimeout(timeouts.current.showTipTimeout);
            }
            if (timeouts.current.hideTipTimeout) {
                clearTimeout(timeouts.current.hideTipTimeout);
            }
        };
    }, []);

    const triggerProps = trigger === "hover" ? {
        onMouseEnter: showTip,
        onMouseLeave: hideTip
    } : {
        onFocus: showTip,
        onBlur: hideTip
    };

    return (
        <div className="relative inline-block" {...triggerProps}>
            {children}
            {isVisible && (
                <div className={`${showToolTip ? 'animate-fadein' : 'animate-fadeout'} absolute p-2 bg-black w-max text-green-500 border-2 border-green-500 ${getPositionClasses(position)}`}>
                    {content}
                </div>
            )}
        </div>
    )
}

export default ToolTip;