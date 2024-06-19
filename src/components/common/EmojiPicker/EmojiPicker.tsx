import React from 'react'
import EmojiPicker , {Theme} from 'emoji-picker-react';

const EmjiPicker = ({picImojie , setValue,setFormData, formData}:any) => {
  console.log("formData.comment",formData)

  return (
    <EmojiPicker
      open={picImojie}
      onEmojiClick={(e: any) => {
        if (formData && formData.comment !== undefined) {
          setFormData({ ...formData, comment: formData.comment + e.emoji });
        } else {
          setFormData({ ...formData, comment: e.emoji });
        }
      }}
      style={{ background: "#151c25" }}
      height={400}
    />
  );
}

export default EmjiPicker