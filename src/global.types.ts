export type StateDispatch<stateType> = React.Dispatch<React.SetStateAction<stateType>>
export type StateHook<stateType> = [stateType, StateDispatch<stateType>];

export enum Alignment {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right'
}