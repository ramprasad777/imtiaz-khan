import Header from "./Components/Header/Header";

function Layout(props){
    return(
        <>
        <Header />
            
            {
                props.children
            }
        </>
    )
}
export default Layout;