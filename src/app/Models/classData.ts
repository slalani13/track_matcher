export enum classes{
    ARCHITECT,
    EQUALIZER,
}

export interface class_data{
    base_reveal_ratio:number,
    reveal_increase:number,
    see_vowels:boolean,
}

export const class_stats: Map<classes, class_data> = new Map([
    [classes.ARCHITECT, {base_reveal_ratio:0.2, reveal_increase:0.2, see_vowels:true}],
    [classes.EQUALIZER, {base_reveal_ratio:0.6, reveal_increase:0.1, see_vowels:false}],
]);