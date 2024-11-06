import { createContext, useState, ReactNode } from "react";
import Home from "./Home/Home";

interface PageContextType {
    page: JSX.Element | undefined;
    setPage: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>;
}

const PageContext = createContext<PageContextType | null>(null);

interface PageProviderProps {
    children: ReactNode;
}

const PageProvider = ({ children }: PageProviderProps) => {
    const [page, setPage] = useState<JSX.Element | undefined>(<Home key={"Home"} />);

    return (
        <PageContext.Provider value={{ page, setPage }}>
            {children}
        </PageContext.Provider>
    );
};

export { PageProvider, PageContext };
