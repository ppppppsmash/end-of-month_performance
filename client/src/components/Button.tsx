import React, { FC } from 'react';


interface Props {
    name: string;
    onClick(): void
}

const Button: FC<Props> = ({name, onClick}): JSX.Element => {
    return (
        <button className="w-[100px] bg-gray-900 rounded-xl h-10
            text-white text-sm font-semibold active:bg-gray-500
            hover:scale-[0.95] active:scale-[1] transition focus:outline-none
            focus:shadow-outline duration-150 ease-in-out"
            type="button"
            onClick={() => onClick()}
        >{name}</button>
    )
}

export default Button;