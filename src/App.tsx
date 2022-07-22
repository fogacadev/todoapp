import { ThemeProvider } from "styled-components";
import { Checkbox } from "./components/Form/Checkbox";
import { DeleteButton } from "./components/Form/DeleteButton";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Task } from "./components/Task";
import { Todos } from "./pages/todos";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Todos />
            <GlobalStyle />
        </ThemeProvider>
    )
}