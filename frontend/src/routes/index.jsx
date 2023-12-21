import { BrowserRouter } from "react-router-dom";
//import {useAuth} from '../hooks/useAuth'
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
    //const user = useAuth()
    //{user ? <AppRoutes/> : <AuthRoutes/>} inside of browserrouter
    return (
        <BrowserRouter>
            
        </BrowserRouter>
    )
}