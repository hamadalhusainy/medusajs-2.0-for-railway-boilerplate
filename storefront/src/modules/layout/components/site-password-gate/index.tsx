"use client"

import { FormEvent, ReactNode, useEffect, useState } from "react"

type SitePasswordGateProps = {
  children: ReactNode
}

const ACCESS_PASSWORD = "1974"
const ACCESS_STORAGE_KEY = "san-garden-site-access"

export default function SitePasswordGate({ children }: SitePasswordGateProps) {
  const [inputPassword, setInputPassword] = useState("")
  const [hasAccess, setHasAccess] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const isAuthorized = localStorage.getItem(ACCESS_STORAGE_KEY) === "true"

    if (isAuthorized) {
      setHasAccess(true)
    }
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (inputPassword === ACCESS_PASSWORD) {
      localStorage.setItem(ACCESS_STORAGE_KEY, "true")
      setHasAccess(true)
      setError("")
      return
    }

    setError("Incorrect password. Please try again.")
  }

  if (hasAccess) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-ui-bg-base px-6">
      <div className="w-full max-w-sm rounded-2xl border border-ui-border-base bg-white p-6 shadow-md">
        <h1 className="text-xl font-semibold text-ui-fg-base">Private Access</h1>
        <p className="mt-2 text-sm text-ui-fg-subtle">
          Enter the temporary password to continue.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
          <input
            type="password"
            value={inputPassword}
            onChange={(event) => setInputPassword(event.target.value)}
            placeholder="Password"
            className="h-10 rounded-md border border-ui-border-base px-3 text-sm outline-none focus:border-ui-fg-base"
            autoFocus
          />
          <button
            type="submit"
            className="h-10 rounded-md bg-ui-fg-base px-3 text-sm font-medium text-ui-bg-base hover:opacity-90"
          >
            Enter
          </button>
        </form>

        {error && <p className="mt-3 text-sm text-rose-600">{error}</p>}
      </div>
    </div>
  )
}
