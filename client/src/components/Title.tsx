import { FC } from 'react';

interface Props {
    title: string
}

const Input: FC<Props> = ({title}): JSX.Element => {
    return (
        <div>
            <h1 className="text-4xl text-center">{title}</h1>
        </div>
    )
}

export default Input;