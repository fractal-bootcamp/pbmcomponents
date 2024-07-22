import { useState } from "react";

type DropdownProps = {
    options: string[];
    placeholder: string;
    disabled?: boolean;
    multiSelect?: boolean;
    borderedOptions?: boolean;
}

function Dropdown({ options, placeholder, disabled, multiSelect, borderedOptions }: DropdownProps) {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleDropdownClick = () => {
        if (!disabled) {
            setShowOptions(!showOptions);
        }
    }


    const handleRemoveOption = (option: string) => {
        setSelectedOptions(prev => prev.filter(item => item !== option));
    }
    const handleOptionClick = (option: string) => {
        if (multiSelect) {
            setSelectedOptions(prev =>
                prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
            );
        } else {
            setSelectedOptions([option]);
            setShowOptions(false);
        }
    }

    return (
        <div className="flex flex-col">
            <div
                className={`flex flex-row items-center p-2 mx-4 mt-4 text-lg border-2 border-green-500 text-green-500 bg-black ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={handleDropdownClick}
            >
                <div className="m-3 text-md font-medium flex flex-wrap">
                    {selectedOptions.length > 0 ? (
                        selectedOptions.map(option => (
                            <div key={option} className={`flex items-center bg-black px-1 mx-1 text-green-500 ${borderedOptions ? 'border border-green-500' : ''}`}>
                                {option}
                                <button
                                    className="ml-2 text-green-500"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleRemoveOption(option);
                                    }}
                                >
                                    &times;
                                </button>
                            </div>
                        ))
                    ) : (
                        placeholder
                    )}
                </div>
                <div className="border-l-2 border-green-500 h-8 mx-2"></div>
                <button onClick={handleDropdownClick} disabled={disabled}>
                    <svg
                        className="w-4 h-4 mx-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
            {showOptions && (
                <div className="flex flex-col border-2 border-green-500 bg-black text-green-500 mx-4">
                    {options.filter(option => !selectedOptions.includes(option)).map(option => (
                        <div
                            key={option}
                            className="p-2 hover:bg-green-500 hover:text-black cursor-pointer"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown;