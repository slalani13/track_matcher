export enum difficulty{
    EASY,
    NORMAL,
    DIFFICULT
}

export interface Settings {
    theme: string;
    competitive_difficulty: difficulty;
    competitive_time: number;
}