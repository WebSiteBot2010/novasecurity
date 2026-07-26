import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


// Layouts

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";


// Public Pages

import Home from "../pages/Home/Home";
import Premium from "../pages/Premium/Premium";
import Setup from "../pages/Setup/Setup";
import Support from "../pages/Support/Support";
import Login from "../pages/Login/Login";


// Dashboard

import GuildSelector from "../pages/Guilds/GuildSelector";
import GuildDashboard from "../pages/Guilds/GuildDashboard";


// Dashboard Modules

import General from "../pages/General/General";
import AutoMod from "../pages/AutoMod/AutoMod";
import AntiNuke from "../pages/AntiNuke/AntiNuke";
import BeastMode from "../pages/BeastMode/BeastMode";
import AntiRaid from "../pages/AntiRaid/AntiRaid";
import Verification from "../pages/Verification/Verification";
import AntiSpam from "../pages/AntiSpam/AntiSpam";
import AntiLink from "../pages/AntiLink/AntiLink";
import AntiPhishing from "../pages/AntiPhishing/AntiPhishing";
import BotLogs from "../pages/BotLogs/BotLogs";
import AuditLogs from "../pages/AuditLogs/AuditLogs";
import Backup from "../pages/Backup/Backup";


// Error

import NotFound from "../pages/NotFound/NotFound";



export default function Router(){


return (

<BrowserRouter>


<Routes>



{/* ===========================
        WEBSITE
=========================== */}


<Route element={<MainLayout/>}>


<Route
path="/"
element={<Home/>}
/>


<Route
path="/premium"
element={<Premium/>}
/>


<Route
path="/setup"
element={<Setup/>}
/>


<Route
path="/support"
element={<Support/>}
/>


<Route
path="/login"
element={<Login/>}
/>


</Route>





{/* ===========================
        DASHBOARD
=========================== */}



<Route element={<DashboardLayout/>}>


<Route
path="/dashboard"
element={<GuildSelector/>}
/>



<Route
path="/dashboard/:guildId"
element={<GuildDashboard/>}
/>



<Route
path="/dashboard/:guildId/general"
element={<General/>}
/>



<Route
path="/dashboard/:guildId/automod"
element={<AutoMod/>}
/>



<Route
path="/dashboard/:guildId/antinuke"
element={<AntiNuke/>}
/>



<Route
path="/dashboard/:guildId/beastmode"
element={<BeastMode/>}
/>



<Route
path="/dashboard/:guildId/antiraid"
element={<AntiRaid/>}
/>



<Route
path="/dashboard/:guildId/verification"
element={<Verification/>}
/>



<Route
path="/dashboard/:guildId/antispam"
element={<AntiSpam/>}
/>



<Route
path="/dashboard/:guildId/antilink"
element={<AntiLink/>}
/>



<Route
path="/dashboard/:guildId/antiphishing"
element={<AntiPhishing/>}
/>



<Route
path="/dashboard/:guildId/botlogs"
element={<BotLogs/>}
/>



<Route
path="/dashboard/:guildId/auditlogs"
element={<AuditLogs/>}
/>



<Route
path="/dashboard/:guildId/backup"
element={<Backup/>}
/>



</Route>





{/* ===========================
        404
=========================== */}


<Route
path="*"
element={<NotFound/>}
/>


</Routes>


</BrowserRouter>

)

}