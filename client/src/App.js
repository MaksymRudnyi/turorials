import { FileUploader } from './components/FileUploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css';



function App() {
  return (
    <div className="App">
      <FileUploader />
      <ToastContainer />
    </div>
  );
}

export default App;
