const Contact = () => {
  return (
    <footer className="mt-8 border-t pt-6 flex flex-col items-center gap-3 text-center">
      <div className="flex gap-4">
        <a href="mailto:porschegt315@hotmail.com" className="hover:underline">📧 Email</a>
        <a href="https://github.com/exhibition315" target="_blank" rel="noopener noreferrer" className="hover:underline">🐱 GitHub</a>
        <a href="https://www.linkedin.com/in/alvin-wang-14694293/" target="_blank" rel="noopener noreferrer" className="hover:underline">💼 LinkedIn</a>
      </div>
      <div className="text-xs text-gray-400 mt-2">© {new Date().getFullYear()} Alvin Wang. All rights reserved.</div>
    </footer>
  );
}

export default Contact;
