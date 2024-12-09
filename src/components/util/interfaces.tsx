export interface TextProps {
    text: string
}

export interface Text2Props {
    text: string,
    text2: string
}

export interface TextColourProps {
    text: string,
    color: string
}

export interface LinkProps {
    linkURL: string
}

export interface SizeColourProps {
    styling: string
}

export interface BurgerMenuProps {
    shouldOpen: boolean,
    setBurgerState: (state: boolean) => void,
}

export interface BurgerOpenButtonProps {
    buttonText: string,
    onClick: () => void,
    isOpen: boolean,
}