
export const EmojiSet = {
    Birthday: "🎂",
    NewYearsEve: "🎉",
    Milestone: "🏆",
    WorkMeeting: "📅",
    Holidays: "🌴",
    Custom: "✏️", // For custom or additional emojis
} as const;

export type EmojiType = typeof EmojiSet[keyof typeof EmojiSet];


export interface EventMarker {
    shape: Shape;
    color: string;
    size: Size;
    labels?: Labels;
    emoji?: EmojiType;
    customLabels?: Labels[];
}


export enum Size {
    ExtraSmall = "xs",
    Small = "sm",
    Medium = "md",
    Large = "lg",
    ExtraLarge = "xl",
}

export enum Shape {
    Birthday = "birthday",
    NewYearsEve = "newYearsEve",
    Milestone = "milestone",
    newMilestone = "newMilestone",
    WorkMeeting = "workMeeting",
    Holidays = "holidays",
}

export enum Labels {
    Important = "important",
    Urgent = "urgent",
    NotUrgent = "notUrgent",
    Birthday = "birthday",
    NewYearsEve = "newYearsEve",
    Milestone = "milestone",
    newMilestone = "newMilestone",
    WorkMeeting = "workMeeting",
    Holidays = "holidays",
    AddALabel = "",
}

export interface ImagesAndIcons {
    imageUrl?: string;
    emoji?: EmojiType;
}

export interface TimeLineProps {
    vertical?: boolean;
    eventMarker?: EventMarker[];
    events?: Event[];
    eventDetails?: string;
    imagesAndIcons?: ImagesAndIcons[];
    collapsibleGroups?: boolean;
}

export interface Event {
    name: string;
    description?: string;
    emoji?: EmojiType;
}

export interface DefaultTimeLinePoint {
    position: number; // Position as a percentage (0 to 100)
    label: string;
}

export interface DefaultTimelineLineProps {
    points: DefaultTimeLinePoint[];
    vertical: boolean;
}

export interface ModalProps {
    children: React.ReactNode; // Content to be displayed inside the modal
    onClose: () => void; // Function to be called when the modal is closed
}