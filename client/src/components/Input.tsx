import React, { FC } from 'react';


interface Props {
    label: string;
    time: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void | null;
}

const Input: FC<Props> = ({label, time, onChange}): JSX.Element => {
    return (
        <div className="relative gap-x-2 w-4/12">
            <>
            <div className="flex mt-3 items-center">
                <div className="text-sm leading-6 w-40">
                    <label className="font-medium text-gray-900">{label}：</label>
                </div>
                <div>
                    <input
                        type="text"
                        className='bg-gray-50 outline-none p-0 w-[50px] h-[30px]
                        border-b-2 border-black-300 text-sm
                        focus:border-b-2 focus:border-black'
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