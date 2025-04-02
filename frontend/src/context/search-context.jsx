"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

const SearchContext = createContext(undefined)

export function SearchProvider({ children }) {
  const [globalSearchQuery, setGlobalSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState("")

  return (
    <SearchContext.Provider
      value={{
        globalSearchQuery,
        setGlobalSearchQuery,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}
