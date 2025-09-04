import Header from '../components/Header'
import LoginForm from '../components_auth/LoginForm'
import RegisterForm from '../components_auth/RegisterForm'
import React, { useState } from 'react'

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
            <main className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        
                        {/* Botones para cambiar entre Login y Register */}
                        <div className="text-center mb-4">
                            <div className="btn-group" role="group">
                                <button type="button" 
                                    className={`btn ${isLogin ? 'btn-success' : 'btn-outline-success'}`}
                                    onClick={() => setIsLogin(true)}>
                                    Iniciar Sesión
                                </button>
                                <button type="button" 
                                    className={`btn ${!isLogin ? 'btn-success' : 'btn-outline-success'}`}
                                    onClick={() => setIsLogin(false)}>
                                    Registrarse
                                </button>
                            </div>
                        </div>

                        {/* Formulario dinámico */}
                        {isLogin ? <LoginForm /> : <RegisterForm />}
                    </div>
                </div>
            </main>
    )
}

export default Auth

{/* Enlaces adicionales */}
                        {/* <div className="text-center mt-3">
                            {isLogin ? (
                                <div>
                                    <p className="text-muted">
                                        ¿No tienes una cuenta?{' '}
                                        <button 
                                            className="btn btn-link p-0 text-success" 
                                            onClick={() => setIsLogin(false)}>
                                            Regístrate aquí
                                        </button>
                                    </p>
                                    <button className="btn btn-link text-muted">
                                        ¿Olvidaste tu contraseña?
                                    </button>
                                </div>
                            ) : (
                                <p className="text-muted">
                                    ¿Ya tienes una cuenta?{' '}
                                    <button 
                                        className="btn btn-link p-0 text-success" 
                                        onClick={() => setIsLogin(true)}>
                                        Inicia sesión aquí
                                    </button>
                                </p>
                            )}
                        </div> */}

                        {/* Separador */}
                        {/* <hr className="my-4" /> */}

                        {/* Opciones de login social */}
                        {/* <div className="d-grid gap-2">
                            <button className="btn btn-outline-primary">
                                <i className="fab fa-facebook-f me-2"></i>
                                Continuar con Facebook
                            </button>
                            <button className="btn btn-outline-info">
                                <i className="fab fa-google me-2"></i>
                                Continuar con Google
                            </button>
                            <button className="btn btn-outline-dark">
                                <i className="fab fa-apple me-2"></i>
                                Continuar con Apple
                            </button>
                        </div> */}
