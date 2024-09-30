import React from 'react'

const MeetContext = React.createContext({
  userName: '',
  topic: 'Arts and Culture',
  showError: false,
  isRegistered: false,
  changeName: () => {},
  changeTopic: () => {},

  registerName: () => {},

  updateError: () => {},
})
export default MeetContext
