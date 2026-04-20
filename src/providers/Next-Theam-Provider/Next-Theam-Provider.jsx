"use client";
import { ThemeProvider } from "next-themes";

const NextTheamProvider = ({children}) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
    );
};

export default NextTheamProvider;