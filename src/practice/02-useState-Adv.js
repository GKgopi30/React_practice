import React, { useState } from 'react'

function Index() {
    const intialObj = {
        fisrtName: 'kommavarapu',
        lastName: 'Gopi',
        age: 24,
    }


    const [data, setData] = useState(intialObj)
    const changeFirstNm = () => {
        setData(
            {
                ...data,
                fisrtName: 'K',
                age: 25
            }
        )

    }
    return (
        <>
            <h1>frist Name:{data.fisrtName}</h1>
            <button onClick={changeFirstNm}>change first name</button>
            <h2>last Name:{data.lastName}</h2>
            <h3>Age:{data.age}</h3>
        </>
    )
}

export default Index