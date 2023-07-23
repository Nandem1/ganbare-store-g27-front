import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext'

const SweetAlertMessage = () => {
    const {errorType} = useContext(AuthContext);
  const showErrorAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
    });
  };

  const handleErrorMessage = () => {
    switch (errorType) {
      case 'userNotFound':
        showErrorAlert('Error', 'Usuario o contraseña incorrectos', 'error');
        break;
      case 'missingData':
        showErrorAlert('Error', 'Por favor, completa todos los campos', 'error');
        break;
      case 'noRegisteredUsers':
        showErrorAlert('Error', 'No existen usuarios registrados', 'error');
        break;
      default:
        break;
    }
  };

  if (errorType) {
    handleErrorMessage();
  }

  return null;
};

export default SweetAlertMessage;
