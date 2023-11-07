import React from 'react';
import { createRoot } from 'react-dom/client';
import PersonalNotes from './PersonalNotes';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<PersonalNotes />);