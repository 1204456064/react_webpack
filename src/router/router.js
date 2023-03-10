import ButtonCompoent from "../views/components/button";
import TableCompoent from "../views/components/table";
import App from "../App";
const routes = [
    {
        path:'/',
        component: App,
        exact: true
    },
    {
        path:'/button',
        component: ButtonCompoent,
        exact: true
    },
    {
        path:'/table',
        component: TableCompoent,
        exact: true
    }
]

export default routes