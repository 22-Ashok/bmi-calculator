import React from 'react'
import ReactDOM from 'react-dom/client'
import ParentComponent from './src/component/ParentComponent'

const App = () => {

    return (
        <>
          <ParentComponent />
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)