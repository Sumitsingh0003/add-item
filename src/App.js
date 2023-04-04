import './App.css';
// import MainPage from './component/MainPage';
import { connect } from "react-redux";
import AddItems from './component/AddItems';

function App() {
  return (
   <>
     {/* <MainPage />  */}
     <AddItems />
   </>
  );
}

export default connect()(App);
