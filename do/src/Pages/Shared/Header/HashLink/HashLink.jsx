import { useLocation, useNavigate } from 'react-router-dom';

const HashLink = ({ id, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToId = (id) => {
    if (location.pathname === '/') {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(
        () =>
          document.getElementById(id).scrollIntoView({ behavior: 'smooth' }),
        100
      );
    }
  };

  return (
    <button
      className="py-2 px-4 hover:text-navy-300"
      onClick={() => scrollToId(id)}
    >
      {children}
    </button>
  );
};

export default HashLink;
