import Box from "@mui/material/Box"
import Header from "../../components/Header"

const Dashboard = () => {
    return (
        <Box m="1.5em">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Dashboard" subtitle="One Stop SL Shop " />
            </Box>
        </Box>
    )
}
export default Dashboard