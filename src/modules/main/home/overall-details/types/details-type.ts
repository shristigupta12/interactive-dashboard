export interface DetailsType {
    id: string;
    title: string;
    value: string;
    color: string;
    percentageChange: number;
    changeType: "positive" | "negative" | "neutral";
}