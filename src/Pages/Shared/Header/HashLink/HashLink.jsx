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
      className="py-4 px-4 hover:text-navy-300 border-b border-gray-300 border-dashed w-full md:w-auto text-center md:py-2 md:px-4 md:hover:text-navy-300  md:border-0"
      onClick={() => scrollToId(id)}
    >
      {children}
    </button>
  );
};

export default HashLink;
