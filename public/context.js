const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const UserContext = React.createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyB1XJJKZfSxQUjMdXbk0C32ahoJsGQLhNU",
  authDomain: "capstone-76abd.firebaseapp.com",
  projectId: "capstone-76abd",
  storageBucket: "capstone-76abd.appspot.com",
  messagingSenderId: "925100363494",
  appId: "1:925100363494:web:4675ea0c9e54163f48b527",
};

firebase.initializeApp(firebaseConfig);

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: "20rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {/*} {props.status && (<div id='createStatus'>{props.status}</div>)}*/}
      </div>
    </div>
  );
}
