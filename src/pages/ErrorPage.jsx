import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center">
            <h1 className="display-1 text-danger">404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="mb-4">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary btn-lg">
                Go Back to Home
            </Link>
        </div>
      
  )
}

export default ErrorPage
