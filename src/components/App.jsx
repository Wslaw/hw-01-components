// import Profile from "./Profile/Profile";
// import user from '../data/user.json';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats = {user.stats}
//       />
//     </div>
//   );
// };


import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');
const Modal = ({ close, image }) => {
  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  });
  
  return createPortal(
    <div onClick={closeModal} className={style.overlay}>
      <div className={style.modal}>
        <img className={style.img} src={image.largeImageURL} alt="" />
      </div>
    </div>,
    modalRoot
  );
};
export default Modal;