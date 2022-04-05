import money from './slice'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
      money : money
    },
})

export default store;