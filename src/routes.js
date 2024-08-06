
import Buys from "./View/Buys"
import Home from "./View/Home"
import Ipaid from "./View/Ipaid"
import Iphone from "./View/Iphone"
import Mac from "./View/Mac"
import MacCompare from "./View/MacCompare"
import MacLearn from "./View/MacLearn"
import Vision from "./View/Vision"
import Watch from "./View/Watch"
import Tv from './View/Tv'


export const AllRoutes=[
    {path:"/", component:<Home/>},
    {path:"/mac", component:<Mac/>},
    {path:"/maclearn",component:< MacLearn/>},
    {path:"/maccompare", component:< MacCompare/>},
    {path:"/ipaid", component:<Ipaid/>},
    {path:"/buys", component:<Buys/>},
    {path:"/iphone", component:< Iphone/>},
    {path:"/watch", component:< Watch/>},
    {path:"/vision", component:<Vision/>},
    {path:'/tv',component:<Tv/>}
]

