import React, { useState } from 'react'

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombre) {
            newErrors.nombre = 'El nombre es requerido';
        } else if (formData.nombre.length < 2) {
            newErrors.nombre = 'El nombre debe tener al menos 2 caracteres';
        }
        
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

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden';
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Registro exitoso:', formData);
            alert('¡Registro exitoso!');
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
                <h3 className="card-title text-center mb-4">Registrarse</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre completo</label>
                        <input type="text" 
                        className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                        id="nombre" name="nombre" value={formData.nombre} 
                        onChange={handleChange}
                        placeholder="Tu nombre completo"/>
                        {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" 
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email" name="email" value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"/>
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" 
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password" name="password"
                        value={formData.password} onChange={handleChange}
                        placeholder="Mínimo 6 caracteres"/>
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
                        <input 
                        type="password" 
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        id="confirmPassword" name="confirmPassword"
                        value={formData.confirmPassword} onChange={handleChange}
                        placeholder="Repite tu contraseña" />
                        {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                    </div>
                    
                    <button type="submit" className="btn btn-success w-100 mb-3">
                        <i className="fas fa-user-plus me-2"></i>
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm
