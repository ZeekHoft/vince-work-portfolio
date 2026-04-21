import React from 'react'
import ListHackathon from './listhackathon'

export default function WidgetHackathon() {
    return (
        <>
            <div className="grid grid-cols-2 gap-20 pt-10 lg:w-300 place-items-center md:grid-cols-3 lg:grid-cols-2 gap-8 m-5 md:m-10 lg:m-20 ">
                <ListHackathon />
            </div>


        </>
    )
}
