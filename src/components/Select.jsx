import React, { useId ,forwardRef} from 'react'

const Select = ({
    options,
    lable,
    className,
    ...props
}, ref) => {
    const id = useId();
    return (
        <div className='w-full'>
            {lable && <label htmlFor={id} className="" ></label> }
            <select id={id} ref={ref} {...props} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}></select>
            {
                options?.map((option)=>{
                    <option key={option} value={option}>
                        {option}
                    </option>
                })
            }
        </div>
    )
}

export default forwardRef(Select);
