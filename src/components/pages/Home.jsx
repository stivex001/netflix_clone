import React from 'react'
import Main from '../Main'
import Others from '../Others'
import requests from '../../Api'

const Home = () => {
  return (
    <div>
        <Main />
        <Others ID='1' title='Up Coming' URL={requests.requsetUpcoming} />
        <Others ID='2' title='Popular' URL={requests.requestPopular} />
        <Others ID='3' title='Now Playing' URL={requests.requestNow} />
        <Others ID='4' title='Trending' URL={requests.requestTrending} />
        <Others ID='5' title='Top Rated' URL={requests.requestToprated} />
    </div>
  )
}

export default Home