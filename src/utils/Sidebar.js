import myDay from '../components/myDay/Index.jsx'
import Important from '../components/Important/Index'
import flaggedMessage from '../components/flaggedMessage/Index.jsx'
import Planned from '../components/Planned/Index.jsx'
import assignedToMe from '../components/assignedToMe/Index.jsx'
import Tasks from '../components/Tasks/Index.jsx'
import { ReactComponent as Sun } from "../assets/icons/sun.svg"
import { ReactComponent as Star } from "../assets/icons/star.svg"
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg"
import { ReactComponent as User } from "../assets/icons/user.svg"
import { ReactComponent as Home } from "../assets/icons/home.svg"
// import { ReactComponent as Cart } from "../assets/icons/cart4.svg"
import { ReactComponent as Hand } from "../assets/icons/hand.svg"


export const SidebarObj = [
    {
        id: 1,
        title: "My Day",
        Icon: Sun,
        Component: myDay,
        path: "myDay"
    },
    {
        id: 2,
        title: "Important",
        Icon: Star,
        Component: Important,
        path: "Important"
    },
    {
        id: 3,
        title: "Planned",
        Icon: Calendar,
        Component: Planned,
        path: "Planned"
    },
    {
        id: 4,
        title: "Assigned to me",
        Icon: User,
        Component: assignedToMe,
        path: "assignedToMe"
    },
    {
        id: 5,
        title: "Tasks",
        Icon: Home,
        Component: Tasks,
        path: "Tasks"
    },
    {
        id: 6,
        title: "Getting started",
        Icon: Hand,
        Component: flaggedMessage,
        path: "flaggedMessage"
    },
    // {
    //     id: 7,
    //     title: "Groceries",
    //     Icon: Cart,
    //     Component: Generic,
    //     path: "groceries"
    // },
]

