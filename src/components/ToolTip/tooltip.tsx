import { useEffect, useState } from "react";

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

    const showTip = () => {
        setTimeout(() => {
            setShowToolTip(true);
            setIsVisible(true);
        }, delay);
    };

    const hideTip = () => {
        setShowToolTip(false);
        setTimeout(() => {
            setIsVisible(false);
        }, 200);
    };

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

export default ToolTip;