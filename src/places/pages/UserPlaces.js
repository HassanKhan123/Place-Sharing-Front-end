import React from 'react'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES=[
    {
        id:'p1',
        title:'Empire State Builing',
        description:'One of the most famous sky scrapers in the world',
        image:'https://images.pexels.com/photos/472037/pexels-photo-472037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        address:'20 W 34th St, New York, NY 10001',
        location:{
            lat:40.7485492,
            lng:-73.9879522,
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Empire State Builing',
        description:'One of the most famous sky scrapers in the world',
        image:'https://images.pexels.com/photos/472037/pexels-photo-472037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        address:'20 W 34th St, New York, NY 10001',
        location:{
            lat:40.7485492,
            lng:-73.9879522,
        },
        creator:'u2'
    }
]

const UserPlaces = () => {

    return <PlaceList items={DUMMY_PLACES}/>
}

export default UserPlaces
