import { FC } from 'react';

interface Props {
    tasks: {
        label: string;
        time: number;
    }[]
}

const Input: FC<Props> = ({tasks}): JSX.Element => {
    return (
        <div className="relative flex flex-wrap gap-x-3">
            {tasks.map((task) => (
                <>
                <div className="text-sm leading-6">
                    <label className="font-medium text-gray-900">{task.label}</label>
                </div>
                <div>
                    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" value={task.time} />
                </div>
                </>
            ))}
        </div>
    )
}

export default Input;