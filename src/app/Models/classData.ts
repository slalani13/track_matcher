export enum classes{
    ARCHITECT,
    EQUALIZER,
}

export interface class_data{
    reveal_ratio:number,
    reveal_increase:number,
    see_vowels:boolean,
}

export const class_stats: Map<classes, class_data> = new Map([
    [classes.ARCHITECT, {reveal_ratio:0.2, reveal_increase:0.2, see_vowels:true}],
    [classes.EQUALIZER, {reveal_ratio:0.5, reveal_increase:0.1, see_vowels:false}],
]);