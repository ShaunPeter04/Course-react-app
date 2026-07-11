import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary border-opacity-25 sticky-top py-3 shadow-lg" style={{ backgroundColor: '#0f172a' }}>
                <div className="container">
                    {/* Glowing Deep Sea Brand */}
                    <a className="navbar-brand fw-bold text-uppercase tracking-widest text-white d-flex align-items-center" href="/">
                        <i className="bi bi-compass text-info me-2 fs-4"></i>
                        <span>Course <span className="text-info fw-light">Management</span></span>
                    </a>

                    {/* Clean Borderless Toggler */}
                    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation Links */}
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto align-items-lg-center gap-1 gap-lg-3 mt-3 mt-lg-0">
                            <Link className="nav-link active px-4 py-2 rounded-pill bg-info text-dark fw-bold shadow border border-info hover-bg-light transition-all" aria-current="page" to="/">
                                <i className="bi bi-plus-lg me-1"></i> Insert Course
                            </Link>
                            <Link className="nav-link px-3 py-2 text-white-50 fw-medium hover-text-info" to="/view">
                                View Courses
                            </Link>

                            {/* Glowing Sapphire Action Button */}

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar