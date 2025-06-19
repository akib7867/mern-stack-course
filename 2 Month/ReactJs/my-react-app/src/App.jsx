import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
function App() {


    return (
        <>
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Akib Alase</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <!-- Hero Section --> */}
            <section id="home" className="hero-section">
                <div className="container">
                    <h1>Hi, I'm Akib Alase</h1>
                    <p>MERN Stack Developer with 2 Years of Experience</p>
                    <a href="#contact" className="btn btn-primary btn-lg">Hire Me</a>
                </div>
            </section>

            {/* <!-- About Section --> */}
            <section id="about" className="py-5">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4  text-center">
                            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" alt="Profile" className=" w-50 img-fluid rounded shadow"></img>
                        </div>
                        <div className="col-md-6">
                            <p>I'm a dedicated MERN Stack developer with 2 years of experience in building scalable and user-friendly web applications. Proficient in MongoDB, Express.js, React, and Node.js, I specialize in creating seamless full-stack solutions.</p>
                            <p>My passion lies in solving complex problems and delivering clean, efficient code. I thrive in collaborative environments and am always eager to learn new technologies to enhance my skill set.</p>
                            <a href="path/to/your-resume.pdf" className="btn btn-primary mt-3">Download Resume</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Skills Section --> */}
            <section id="skills" className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title">Skills</h2>
                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card skill-card">
                                <img src="https://cdn-icons-png.flaticon.com/512/1205/1205510.png" alt="MongoDB"></img>
                                <div className="card-body">
                                    <h5 className="card-title">MongoDB</h5>
                                    <p className="card-text">Designing and managing NoSQL databases for efficient data storage and scalability.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card skill-card">
                                <img src="https://cdn-icons-png.flaticon.com/512/1183/1183669.png" alt="Express.js"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Express.js</h5>
                                    <p className="card-text">Building robust RESTful APIs for seamless backend functionality.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card skill-card">
                                <img src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png" alt="React"></img>
                                <div className="card-body">
                                    <h5 className="card-title">React</h5>
                                    <p className="card-text">Creating dynamic and responsive front-end interfaces with React.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card skill-card">
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="Node.js"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Node.js</h5>
                                    <p className="card-text">Developing high-performance server-side applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Experience Section --> */}
            <section id="experience" className="py-5">
                <div className="container">
                    <h2 className="section-title">Experience</h2>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card experience-card">
                                <i className="fas fa-briefcase fa-2x"></i>
                                <div className="card-body">
                                    <h5 className="card-title">MERN Stack Developer</h5>
                                    <p className="card-text"><strong>Tech Solutions Inc.</strong> | Jan 2023 - Present</p>
                                    <p className="card-text">Developed and maintained full-stack applications using MERN stack, implemented RESTful APIs, and optimized database performance for a 20% increase in application efficiency.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card experience-card">
                                <i className="fas fa-briefcase fa-2x"></i>
                                <div className="card-body">
                                    <h5 className="card-title">Junior Web Developer</h5>
                                    <p className="card-text"><strong>Startup XYZ</strong> | Jun 2022 - Dec 2022</p>
                                    <p className="card-text">Assisted in building React-based front-end interfaces and integrated third-party APIs for a SaaS product, improving user engagement by 15%.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Projects Section --> */}
            <section id="projects" className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title">Projects</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card project-card">
                                <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62" className="card-img-top" alt="E-Commerce"></img>
                                <div className="card-body">
                                    <h5 className="card-title">E-Commerce Platform</h5>
                                    <p className="card-text">A full-stack MERN application with user authentication, product filtering, and Stripe payment integration.</p>
                                    <a href="#" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card project-card">
                                <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62" className="card-img-top" alt="E-Commerce"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Task Management App</h5>
                                    <p className="card-text">A React-based task manager with MongoDB backend, featuring real-time updates and user roles.</p>
                                    <a href="#" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card project-card">
                                <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62" className="card-img-top" alt="E-Commerce"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Personal Portfolio</h5>
                                    <p className="card-text">A responsive portfolio website built with React and Bootstrap, showcasing my projects and skills.</p>
                                    <a href="#" className="btn btn-primary">View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Contact Section --> */}
            <section id="contact" className="py-5">
                <div className="container">
                    <h2 className="section-title">Contact Me</h2>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <form className="contact-form">
                                <div className="mb-3">
                                    <label for="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Akib Alase"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"> </input>
                                </div>
                                <div className="mb-3">
                                    <label for="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Send Message</button>
                            </form>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="map-container">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1635781234567" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <footer>
                <div className="container">
                    <p>© 2025 Akib Alase. All Rights Reserved.</p>
                    <p>
                        <a href="https://github.com/yourusername"><i className="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/yourusername"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:your.email@example.com"><i className="fas fa-envelope"></i></a>
                    </p>
                </div>
            </footer>


        </>
    )
}

export default App
