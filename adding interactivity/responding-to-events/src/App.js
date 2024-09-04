import './App.css';


// function Button() {
//   function handleButton() {
//     alert('Button clicked!');
//   }
//   return (
//     <button onClick={handleButton}>
//       i don't do anything
//     </button>
//   );
// }

// export default Button;

// function AlertButton({message, children}) {
//   return (
//     <button onClick={() => alert(message)}>
//     { children }
//   </button>
//   );
// }

// function Toolbar() {
//   return (
//     <div>
//       <AlertButton message={'Playing!'}>
//         Play Movie
//       </AlertButton>
//       <AlertButton message={'Uploading!'}>
//         Upload Image
//       </AlertButton>
//     </div>
//   );
// }

// export default Toolbar

// function Button({onClick,children}) {
//   return (
//     <button onClick={onClick}>
//       { children }
//     </button>
//   );
// }

// function PlayButton({movieName}) {
//   return (
//     <Button onClick={() => alert(`Playing ${movieName}!`)}>
//       Play "{ movieName }"
//     </Button>
//   );
// }

// function UploadButton() {
//   return (
//     <Button onClick={() => alert('Uploading!')}>
//       Upload Image
//     </Button>
//   );
// }

// function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName={"Kiki's Delivery Service"}/>
//       <UploadButton />
//     </div>
//   );
// }

// export default Toolbar;

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//     { children }
//   </button>
//   );
// }

// function Toolbar({onPlayMovie, onUploadImage}) {
//   return (
//     <div>
//       <Button onClick={onPlayMovie}>
//         Play Movie
//       </Button>
//       <Button onClick={onUploadImage}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert('Playing!')}
//       onUploadImage={() => alert('Uploading!')}
//     />
//   );
// }

// export default App;

// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <button onClick={() => alert('Playing!')}>
//         Play Movie
//       </button>
//       <button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </button>
//     </div>
//   );
// }

// function Button({onClick, children}) {
//   return (
//     <button onClick={e => {
//       e.stopPropagation();
//       onClick();
//     }}>
//       { children }
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <Button onClick={() => alert('Playing!')}>
//         Play Movie
//       </Button>
//       <Button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

// export default function Signup() {
//   return (
//     <form onSubmit={e => {
//       e.preventDefault();
//       alert('Submitting!');
//     }}>
//       <input />
//       <button>Send</button>
//     </form>
//   );
// }

export default function ColorSwitch({
  onChangeColor
}) {
  return (
    <button>
      Change color
    </button>
  );
}
