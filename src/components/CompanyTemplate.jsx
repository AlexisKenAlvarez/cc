import React from 'react'

const CompanyTemplate = ({ list, title }) => {
    return (
        <div className="font-raleway">
            <h2 className='uppercase text-rd font-[800]'>{title}</h2>
            <ul className="flex flex-col gap-y-2 mt-4">
                {list.map((items, i) => {
                    return (
                        <li className="items-center flex gap-x-2" key={i}>
                            <div className="w-3 h-3 rounded-sm bg-rd"></div>
                            <p className="">{items}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CompanyTemplate