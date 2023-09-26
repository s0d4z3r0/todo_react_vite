const Footer = () => {
  return (
    <div
      className="footer position-fixed bottom-0 w-100 text-center text-dark fw-bold shadow-lg p-2
    "
    >
      <p>
        Criado e Desenvolvido por: {/** */}
        <span className="text-footer">
          <a
            href="https://github.com/s0d4z3r0"
            className="text-decoration-none text-footer"
            target="_blank" rel="noreferrer"
          >
            &copy;André Falcao
          </a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
