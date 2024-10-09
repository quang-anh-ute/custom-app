import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './layout/Signin';
import Signup from './layout/Signup';
import CardMn from './layout/ProductList';
import './App.css';


function App() {
  return (
    <div>
      
      <Routes>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Signup/>} />
        <Route path='product' element={<CardMn/>} />
      </Routes>

      
    </div>
  );
}

export default App;



// import React, { useState, useEffect } from "react";
// import GjsEditor, {
//   AssetsProvider,
//   Canvas,
//   ModalProvider,
// } from "@grapesjs/react";
// import type { Editor, EditorConfig } from "grapesjs";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { MAIN_BORDER_COLOR } from "./modules/components/common";
// import CustomModal from "./modules/components/CustomModal";
// import CustomAssetManager from "./modules/components/CustomAssetManager";
// import Topbar from "./modules/components/Topbar";
// import RightSidebar from "./modules/components/RightSidebar";
// import "./style.css";
// import { Button, TextField } from "@mui/material";

// const projectID = 1;
// const projectEndpoint = `http://localhost:3000/projects/${projectID}`;

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

// const gjsOptions: EditorConfig = {
//   height: "100vh",
//   storageManager: false,
//   // storageManager: {
//   //   type: "remote",
//   //   stepsBeforeSave: 3,
//   //   options: {
//   //     remote: {
//   //       urlLoad: projectEndpoint,
//   //       urlStore: projectEndpoint,
//   //       // The `remote` storage uses the POST method when stores data but
//   //       // the json-server API requires PATCH.
//   //       fetchOptions: (opts) =>
//   //         opts.method === "POST" ? { method: "PATCH" } : {},
//   //       // As the API stores projects in this format `{id: 1, data: projectData }`,
//   //       // we have to properly update the body before the store and extract the
//   //       // project data from the response result.
//   //       onStore: (data) => ({ id: projectID, data }),
//   //       onLoad: (result) => result.data,
//   //     },
//   //   },
//   // },
//   undoManager: { trackSelection: false },
//   selectorManager: { componentFirst: true },
//   projectData: {
//     assets: [
//       "https://via.placeholder.com/350x250/78c5d6/fff",
//       "https://via.placeholder.com/350x250/459ba8/fff",
//       "https://via.placeholder.com/350x250/79c267/fff",
//       "https://via.placeholder.com/350x250/c5d647/fff",
//       "https://via.placeholder.com/350x250/f28c33/fff",
//     ],
//     pages: [
//       {
//         name: "Home page",
//         component: `<h1>GrapesJS React Custom UI</h1>`,
//       },
//     ],
//   },
// };

// // Define the ProjectData type
// interface ProjectData {
//   assets: string[];
//   pages: {
//     name: string;
//     component: string;
//   }[];
// }

// export default function App() {
//   const [editor, setEditor] = useState<Editor | null>(null);
//   const [jsonInput, setJsonInput] = useState<string>("");

//   const onEditor = (editor: Editor) => {
//     console.log("Editor loaded");

//     (window as any).editor = editor;
//     setEditor(editor);
//   };
//   const handleGetJSON = () => {
//     if (editor) {
//       const json = editor.getProjectData();
//       console.log(JSON.stringify(json));
//       // You can also save this JSON or display it in a modal
//     }
//   };

//   const handlePushJSON = () => {
//     if (editor) {
//       const projectData: ProjectData = JSON.parse(jsonInput);
//       const json = editor.loadProjectData(projectData);
//     }
//   };
//   return (
//     // @ts-ignore
//     <ThemeProvider theme={theme}>
//       <GjsEditor
//         className="gjs-custom-editor text-white bg-slate-900"
//         grapesjs="https://unpkg.com/grapesjs"
//         grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
//         options={gjsOptions}
//         plugins={[
//           {
//             id: "gjs-blocks-basic",
//             src: "https://unpkg.com/grapesjs-blocks-basic",
//           },
//         ]}
//         onEditor={onEditor}
//       >
//         <div className={`flex h-full border-t ${MAIN_BORDER_COLOR}`}>
//           <div className="gjs-column-m flex flex-col flex-grow">
//             <Topbar className="min-h-[48px]" />
//             <Canvas className="flex-grow gjs-custom-editor-canvas" />
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={handleGetJSON}
//               // style={{
//               //   position: "absolute",
//               //   top: "10px",
//               //   right: "10px",
//               //   zIndex: 1000,
//               // }}
//             >
//               Get JSON
//             </Button>
//             <TextField
//               label="JSON Input"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={4}
//               value={jsonInput}
//               onChange={(e) => setJsonInput(e.target.value)}
//               style={{ marginTop: "10px" }}
//             />
//             <Button
//               variant="contained"
//               color="secondary"
//               onClick={handlePushJSON}
//               style={{ marginTop: "10px" }}
//             >
//               Push JSON
//             </Button>
//           </div>
//           <RightSidebar
//             className={`gjs-column-r w-[300px] border-l ${MAIN_BORDER_COLOR}`}
//           />
//         </div>
//         <ModalProvider>
//           {({ open, title, content, close }) => (
//             <CustomModal
//               open={open}
//               title={title}
//               children={content}
//               close={close}
//             />
//           )}
//         </ModalProvider>
//         <AssetsProvider>
//           {({ assets, select, close, Container }) => (
//             <Container>
//               <CustomAssetManager
//                 assets={assets}
//                 select={select}
//                 close={close}
//               />
//             </Container>
//           )}
//         </AssetsProvider>
//       </GjsEditor>
//     </ThemeProvider>
//   );
// }
