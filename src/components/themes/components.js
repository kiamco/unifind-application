import {mainRed, mainRedTint, mainWhite, btnColor, secondaryBlue, transition, regFont, tert} from './color';

export const primaryBtn =  {
    fontFamily: `${regFont}`,
    fontWeight: "400",
    fontSize: "16px",
    width: "7em",
    color: `${mainRed}`,
    textTransform: 'capitalize',
    background: `${mainWhite}`,
    borderRadius: "17px",
    padding: "5px 15px",
    borderColor: "transparent",
    marginLeft: "1em",
    transition: `${transition}`,
    '&:hover': {
            background: 'white',
            color: `${mainRed}`,
            borderColor: `${mainRed}`,
    },
}

export const secondaryBtn =  {
    background: `${mainWhite}`,
    color: secondaryBlue,
    border: `solid 2px ${secondaryBlue}`,
    '&:hover': {
        background: secondaryBlue,
        color: `${mainWhite}`
    }
}

export const redButton = {
    fontWeight: "500",
    fontSize: "16px",
    width: "7em",
    color: `${mainWhite}`,
    textTransform: 'capitalize',
    background: `${mainRed}`,
    borderRadius: "17px",
    padding: "5px 15px",
    borderColor: "transparent",
    marginLeft: "1em",
    transition: `${transition}`,
    '&:hover': {
            background: `${mainRedTint}`,
            borderColor: `${mainRedTint}`,
    },
}
