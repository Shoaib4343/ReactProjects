import React, { useContext } from 'react'


const FilterItem = ({ heading, item, setSelectCategory }) => {
    return (
        <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-600">{heading}</h3>
            <div className="mt-2 space-y-2">
                {
                    item.map((val) => {
                        return (
                            <>
                                <label className="flex items-center">
                                    <input onChange={(e) => e.target.checked ? setSelectCategory(pre => [...pre, val]) : setSelectCategory(pre => pre.filter(item => item !== val))} type="checkbox" className="form-checkbox text-blue-600" />
                                    <span className="ml-2 text-gray-600">{val}</span>
                                </label>
                            </>
                        )
                    })
                }



            </div>
        </div>
    )
}

export default FilterItem