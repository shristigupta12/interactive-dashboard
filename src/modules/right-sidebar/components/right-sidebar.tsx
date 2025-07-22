import { useRightSidebar } from "../../contexts/right-sidebar-context"
import { Sidebar } from "../../../components/sidebar";
import { Notifications } from "./notifications/notifications";
import { Activities } from "./activities/activites";
import { Contacts } from "./contacts/contacts";
import { motion } from "framer-motion";

export const RightSidebar = () => {
    const {isRightSidebarOpen} = useRightSidebar();
    return(
        <Sidebar direction="right" isOpen={isRightSidebarOpen} width=" w-[100vw] custom-md:w-[50vw] md:w-[280px]">
            <div className="flex flex-col gap-4 sm:gap-6 text-sm w-full">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Notifications />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <Activities />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    <Contacts />
                </motion.div>
            </div>
        </Sidebar>
    )
}