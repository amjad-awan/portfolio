import React from 'react'
import EmojiPicker , {Theme} from 'emoji-picker-react';

const EmjiPicker = ({picImojie , setValue}:any) => {
    
  return (

      <EmojiPicker open={picImojie}  onEmojiClick={(e)=>setValue(e.emoji)} style={{background:"#151c25"}} height={400} />
  
  )
}

export default EmjiPicker