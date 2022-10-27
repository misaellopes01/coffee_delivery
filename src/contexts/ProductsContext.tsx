import { createContext, ReactNode } from "react";


interface ProductsContextType {

}

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
    children: ReactNode
}

export function ProductsContextProvider({ children }: ProductsContextProviderProps) {


    return (
        <ProductsContext.Provider value={{

        }}>
            {children}
        </ProductsContext.Provider>
    )
}