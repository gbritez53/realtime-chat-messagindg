import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import  Cookies from 'universal-cookie'

import { ChanelContainer, ChanelListContainer } from './components'

const App = (): JSX.Element => {
  const apyKey = import.meta.env.VITE_STREAM_API_KEY
  const client = StreamChat.getInstance(apyKey)
  
  return (
    <main className='app_wrapper'>
      <Chat 
        client={client}
        theme='team dark'
      >
        <ChanelListContainer
        
        />
        <ChanelContainer
        
        />
      </Chat>
    </main>
  )
}

export default App
