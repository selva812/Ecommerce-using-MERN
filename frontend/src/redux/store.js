import {configureStore} from "@reduxjs/toolkit"
import {userreducer} from "./reducer/user"
const store= configureStore ({
    reducer:{
        user: userreducer
    }
})
export default store