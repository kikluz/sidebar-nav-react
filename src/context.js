import React, { useState, useContext } from 'react'
// useContext has to be wrappred on the all app 

const AppContext = React.createContext();
// create a Provider and pass the children  props
const AppProvider = ({ children }) => {
    // state value for sidebar 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // state value for modal 
    const [isModalOpen, setIsModalOpen] = useState(false);
    // here 4 fucntion (2 open close and open the sidebar  and 2 close and open the modal)
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        // here in the value will passing the objects 
        <AppContext.Provider value={{
            isModalOpen,
            isSidebarOpen,
            openModal,
            openSidebar,
            closeModal,
            closeSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}

//? creating a  custom hooks then we return the useContext coming from react and passing
// ?the AppContext (keep in my that in order to use custom hook we need to use "use" first) 
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }