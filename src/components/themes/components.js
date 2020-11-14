import {btnColor, secondaryBlue} from './color';

export const primaryBtn =  {
        background: "white",
        color: btnColor,
        border: `solid 2px ${btnColor}`,
        '&:hover': {
            background: btnColor,
            color: 'white'
        }
}

export const secondaryBtn =  {
    background: "white",
    color: secondaryBlue,
    border: `solid 2px ${secondaryBlue}`,
    '&:hover': {
        background: secondaryBlue,
        color: 'white'
    }
}