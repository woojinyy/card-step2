import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthLogic from './service/authLogic';
import firebaseApp from './service/firebase'
import { legacy_createStore } from 'redux';
import rootReducer from './redux/rootReducer'
import { setAuth } from './redux/userAuth/actions';
import ImageUploader from './service/imageUploader';
import ImageFileInput from './components/common/ImageFileInput';

const imageUploader= new ImageUploader()
//변수 선언시 소문자 = 함수   대문자=화면컴포넌트
const FileInput= (props) =><ImageFileInput {...props} imageUploader={imageUploader}/>
const authLogic=new AuthLogic(firebaseApp)
const store= legacy_createStore(rootReducer)//변수명 store해야해
store.dispatch(setAuth(authLogic.getUserAuth(),authLogic.getGoogleAuthProvider()))//action에 type주기 
console.log(store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Provider store={store}>
    <App FileInput={FileInput} />
  </Provider>
  </BrowserRouter>
  </>
);

