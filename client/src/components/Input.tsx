import { FC } from 'react';

interface Props {
    label: string;
    time: string;
    onChange(e: any): void;
}

const Input: FC<Props> = ({label, time, onChange}): JSX.Element => {
    return (
        <div className="relative gap-x-3 w-5/12">
            <>
            <div>
                <div className="text-sm leading-6">
                    <label className="font-medium text-gray-900">{label}</label>
                </div>
                <div>
                    <input onChange={(e) => onChange(e)} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" value={time} />
                </div>
            </div>
            </>
        </div>
    )
}

export default Input;