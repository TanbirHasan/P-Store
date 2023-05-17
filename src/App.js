import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';
import ColorProvider from './context/ColorProvider';

function App() {
	return (
		<div className="App">
			<ColorProvider>
				<RouterProvider router={router} />
			</ColorProvider>
		</div>
	);
}

export default App;
