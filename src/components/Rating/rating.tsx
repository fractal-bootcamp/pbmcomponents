import { useState } from "react";
import ToolTip from "../ToolTip/tooltip";

function getIconSvg(icon: string, filled: boolean) {
    switch (icon) {
        case "heart":
            return (
                <svg
                    width="32" height="32" viewBox="0 0 24 24" fill={filled ? '#22C55E' : 'black'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            );
        case "thumbs-up":
            return (
                <svg
                    width="32" height="32" viewBox="0 0 24 24" fill={filled ? '#22C55E' : 'black'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                    <path d="M14 9V5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-4h4.72a2 2 0 0 0 1.94-2.58l-1.72-7A2 2 0 0 0 16.72 9H14z" />
                </svg>
            );
        case "thumbs-down":
            return (
                <svg
                    width="32" height="32" viewBox="0 0 24 24" fill={filled ? '#22C55E' : 'black'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                    <path d="M10 15v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v4H5.28a2 2 0 0 0-1.94 2.58l1.72 7A2 2 0 0 0 7.28 15H10z" />
                </svg>
            );
        case "star":
        default:
            return (
                <svg
                    width="32" height="32" viewBox="0 0 24 24" fill={filled ? '#22C55E' : 'black'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            );
    }
}

type RatingProps = {
    halfRating: boolean;
    disabled: boolean;
    customDescription?: string;
    ratingIcon: "star" | "heart" | "thumbs-up" | "thumbs-down";
    startingRating: number;

}

function Rating({ halfRating, disabled, customDescription, ratingIcon, startingRating }: RatingProps) {
    const [rating, setRating] = useState(startingRating);

    const handleRating = (rating: number) => {
        setRating(rating);
    }

    return (
        <div className="flex items-center justify-center flex-row animate-draw">
            {[1, 2, 3, 4, 5].map((star) => (
                <div key={star}>
                    <ToolTip position="top" trigger="hover" content={customDescription || `${star}/5`} delay={200}>
                        <div
                            className={`${ratingIcon} ${star <= rating ? 'filled' : ''} ${disabled ? 'disabled' : ''} hover:animate-tada`}
                            onClick={() => !disabled && handleRating(star)}
                        >
                            {getIconSvg(ratingIcon, star <= rating)}
                        </div>
                    </ToolTip>
                </div>
            ))}
        </div>
    )
}

export default Rating;