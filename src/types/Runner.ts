import { ReturnResult } from "../hooks/usePython"

export interface Runner {
  init: (
    stdout: (msg: string) => void,
    onLoad: ({
      id,
      version,
      banner
    }: {
      id: string
      version: string
      banner?: string
    }) => void,
    setReturnValue: (returnResult: ReturnResult) => void,
    packages?: string[][]
  ) => Promise<void>
  interruptExecution: () => void
  readFile: (name: string) => void
  writeFile: (name: string, data: string | ArrayBufferView) => void
  mkdir: (name: string) => void
  rmdir: (name: string) => void
  unlink: (name: string) => void
}

export interface PythonRunner extends Runner {
  run: (code: string) => Promise<void>
}

export interface PythonConsoleRunner extends Runner {
  run: (code: string) => Promise<{ state: string; error?: string }>
}
