import React, { FC } from 'react';


interface Props {
    label: string;
    time: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void | null;
}

const Input: FC<Props> = ({label, time, onChange}): JSX.Element => {
    return (
        <div className="relative gap-x-3 w-4/12">
            <>
            <div className="flex mt-3 items-center">
                <div className="text-sm leading-6 w-36">
                    <label className="font-medium text-gray-900">{label}</label>
                </div>
                <div>
                    <input
                        type="text"
                        className="block w-4/12 rounded-md border-0 py-1.5
                        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                         placeholder:text-gray-400 focus:ring-2
                         focus:ring-inset focus:ring-indigo-600
                         sm:text-sm sm:leading-6"
                         value={time}
                         onChange={(e) => onChange(e)}
                    />
                </div>
            </div>
            </>
        </div>
    )
}

export default Input;