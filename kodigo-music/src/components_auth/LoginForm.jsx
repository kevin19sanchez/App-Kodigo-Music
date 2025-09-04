import React from 'react'
import { useState } from 'react'


const LoginForm = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const newErrors = {}

        if (!formData.email) {
            newErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El email no es válido';
        }
    
        if (!formData.password) {
            newErrors.password = 'La contraseña es requerida';
        } else if (formData.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0
    };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (validateForm()) {
                console.log('Login exitoso:', formData);
                alert('¡Login exitoso!');
            }
        };

        const handleChange = (e) => {
            setFormData({
            ...formData,
            [e.target.name]: e.target.value
            });
        };

    return (
        <div className="card">
            <div className="card-body p-4">
                <h3 className="card-title text-center mb-4">Iniciar Sesión</h3>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo</label>
                        <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id='email' name='email' value={formData.email} onChange={handleChange}
                        placeholder='ejemplo@gmail.com'/>
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id='password' name='password' value={formData.password} onChange={handleChange}
                        placeholder='Contraseña'/>
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                    <button type='submit' className="btn btn-success w-100 mb-3">
                        <i className="fas fa-sign-in-alt me-2"></i>
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
