
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add the background styles directly to the body element
document.body.style.backgroundImage = `url('/lovable-uploads/30f5d435-b6e0-4dd7-adac-5b059edd71e8.png')`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundAttachment = 'fixed';

createRoot(document.getElementById("root")!).render(<App />);
