
import { EXPERTIZA_ROUTER,STR_ROUTE,POLITIKA_ROUTE,PROEKTIR_ROUTE,NADZOR_ROUTE,IZISK_ROUTE, GLAV_ROUTE, KONTACTS_ROUTE, OOMPANII_ROUTER,POJECTS_ROUTER,POJECTS_SHABLON_ROUTER,USLUGI_ROUTER} from "./utils/consts";
import GlavPages from "./pages/GlavPages";
import Okompanii from "./pages/Okompanii";
import Uslugi from "./pages/Uslugi";
import Expertiza from "./pages/Expertiza";
import Projects from "./pages/Projects";
import Project_shablon from "./pages/Project_shablon";
import Kontacts from "./pages/Kontacts";


import Izisk from "./pages/Izisk";
import Nadzor from "./pages/Nadzor";
import Proectir from "./pages/Proectir";
import Politika from "./pages/Politika";
import Str from "./pages/pages_projects/Str";


export const adminRoutes = [


]

export const publicRoutes = [
    {
        path: GLAV_ROUTE,
        Component: GlavPages
    },
    {
        path: OOMPANII_ROUTER,
        Component: Okompanii
    },
    {
        path: USLUGI_ROUTER,
        Component: Uslugi
    },
    {
        path: EXPERTIZA_ROUTER,
        Component: Expertiza
    },
    {
        path: POJECTS_ROUTER,
        Component: Projects
    },

    {
        path: POJECTS_SHABLON_ROUTER,
        Component: Project_shablon
    },
    {
        path: KONTACTS_ROUTE,
        Component: Kontacts
    },

    


    
            {
        path: IZISK_ROUTE,
        Component: Izisk
    },
    
            {
        path: NADZOR_ROUTE,
        Component: Nadzor
    },
    
            {
        path: PROEKTIR_ROUTE,
        Component: Proectir
    },
    
             {
        path: POLITIKA_ROUTE,
        Component: Politika
    },
    
        {
        path: STR_ROUTE + '/:id',
        Component: Str
    },
    
]

