import { useEffect, useState } from "react";

type ErrorAlertProps = {
    message: string;
    dismiss: "manual" | "auto";
    dismissTime?: number;
    type: "Error" | "Success" | "Info" | "Warning";

}


function ErrorAlert({ message, dismiss, dismissTime, type }: ErrorAlertProps) {
    const [show, setShow] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (dismiss === "auto") {
            if (dismissTime) {
                const timer = setTimeout(handleClose, dismissTime);
                return () => clearTimeout(timer);
            }
            else {
                const timer = setTimeout(handleClose, 5000);
                return () => clearTimeout(timer);
            }
        }
    }, [dismiss, dismissTime]);

    const handleClose = () => {
        setFadeOut(true);
        setTimeout(() => setShow(false), 500);
    };

    const getIcon = () => {
        switch (type) {
            case "Error":
                return (
                    <svg className="flex-shrink-0 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0Zm1 15H9v-2h2v2Zm0-4H9V5h2v6Z" />
                    </svg>
                );
            case "Success":
                return (
                    <svg className="flex-shrink-0 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0Zm-1 15L4 10l1.41-1.41L9 12.17l5.59-5.59L16 8l-7 7Z" />
                    </svg>
                );
            case "Info":
                return (

                    <svg className="flex-shrink-0 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                );
            case "Warning":
                return (
                    <svg className="flex-shrink-0 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0Zm1 15H9v-2h2v2Zm0-4H9V5h2v6Z" />
                    </svg>
                );
            default:
                return null;
        }
    };


    function closeButton() {
        return (
            <button type="button" onClick={handleClose} className={` ms-auto -mx-1.5 -my-1.5 bg-black text-green-500 rounded-lg focus:ring-2 focus:ring-green-500 p-1.5 hover:bg-green-900 inline-flex items-center justify-center h-8 w-8`} >

                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        )
    }

    return (
        <>
            {show ? (
                <div className={`flex items-center p-4 mx-4 my-4 text-lg text-green-500 bg-black animate-fadeinbouncedown ${fadeOut ? 'animate-fadeoutup' : ''}`} >
                    {getIcon()}

                    <div className="ms-3 text-lg font-medium">
                        {type}: {message}
                    </div>
                    {dismiss === "manual" ? closeButton() : null}
                </div>
            ) : null}
        </>
    )
}

//example alert queue
const AlertQueue = [

    {
        message: "You dun goofed",
        dismiss: "manual",
        type: "Error"
    },
    {
        message: "Auto Alert 7000 seconds",
        dismiss: "auto",
        dismissTime: 7000,
        type: "Error"
    },
    {
        message: "Auto Alert with no time",
        dismiss: "manual",
        type: "Error"
    },
    {
        message: "Auto Alert Manual",
        dismiss: "manual",
        type: "Info"
    },
    {
        message: "Auto Alert with no time",
        dismiss: "manual",
        type: "Warning"
    },
    {
        message: "Auto Alert with no time",
        dismiss: "manual",
        type: "Success"
    },


]


function Alert() {
    return (
        <>
            {AlertQueue.map((alert) => {
                return <ErrorAlert message={alert.message} dismiss={alert.dismiss} dismissTime={alert.dismissTime} type={alert.type} />
            })}
        </>
    );
}

export default Alert;