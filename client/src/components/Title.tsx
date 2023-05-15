import { FC } from 'react';

interface Props {
    title: string
}

const Input: FC<Props> = ({title}): JSX.Element => {
    return (
        <div className="py-6">
            <h1 className="font-body min-w-full text-4xl font-extrabold text-center linear-gradient(rgb(17, 24, 39), rgb(75, 85, 99))">{title}</h1>
        </div>
    )
}

export default Input;