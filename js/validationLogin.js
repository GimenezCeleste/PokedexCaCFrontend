const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    if (!validarForm()) {
        e.preventDefault();
    } else {
        alert('Iniciando Sesión...');
    }
});
const validarForm = () => {
    let isValid = true;
    isValid = validarCampo('username') & validarCampo('password');
    return isValid;
};
const validarCampo = (campo) => {
    const field = document.getElementById(campo);
    const value = field.value.trim();
    if (value === '') {
        setError(field, "El campo es obligatorio.");
        return false;
    } else {
        setSuccess(field);
        return true;
    }
};
const setError = (input, message) => {
    const errorText = input.nextElementSibling.nextElementSibling;
    errorText.innerText = message;
    input.focus();
};
const setSuccess = (input) => {
    const errorText = input.nextElementSibling.nextElementSibling;
    errorText.innerText = '';
};
form.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        // Obtiene el valor del campo y elimina los espacios en blanco al principio y al final
        const value = input.value.trim();
        // Si el campo no está vacío, elimina cualquier mensaje de error
        if (value !== '') {
            setSuccess(input);
        }
    });
});