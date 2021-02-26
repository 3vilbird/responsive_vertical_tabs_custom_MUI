import Home from "../Home";
import Customdropzone from "../Pages/CustomDropzone";
import VerticleTabs from "../Pages/VerticleTabs"
import FooterPage from "../Pages/FooterPage"








const CMProutes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/dropzone',
        component: Customdropzone,

    },
    {
        path: '/verticletabs',
        component: VerticleTabs,

    },
    {
        path: '/footer',
        component: FooterPage,

    },


]


export default CMProutes;