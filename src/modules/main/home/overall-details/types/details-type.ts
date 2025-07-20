export interface DetailsType {
    id: string;
    title: string;
    value: string;
    color: string;
    darkModeColor: string;
    percentageChange: number;
    textColor: string;
    darkModeTextColor: string;
    changeType: "positive" | "negative" | "neutral";
}