import React, { useState, useEffect } from "react";
import GjsEditor, {
  AssetsProvider,
  Canvas,
  ModalProvider,
} from "@grapesjs/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../style.css";
import { Button, TextField } from "@mui/material";
import { Editor, EditorConfig } from "grapesjs";
import { MAIN_BORDER_COLOR } from "../modules/components/common";
import Topbar from "../modules/components/Topbar";
import RightSidebar from "../modules/components/RightSidebar";
import CustomModal from "../modules/components/CustomModal";
import CustomAssetManager from "../modules/components/CustomAssetManager";

const projectID = 1;
const projectEndpoint = `http://localhost:3000/projects/${projectID}`;

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const gjsOptions: EditorConfig = {
  height: "100vh",
  storageManager: false,
  undoManager: { trackSelection: false },
  selectorManager: { componentFirst: true },
  projectData: {
    assets: [
      "https://via.placeholder.com/350x250/78c5d6/fff",
      "https://via.placeholder.com/350x250/459ba8/fff",
      "https://via.placeholder.com/350x250/79c267/fff",
      "https://via.placeholder.com/350x250/c5d647/fff",
      "https://via.placeholder.com/350x250/f28c33/fff",
    ],
    pages: [
      {
        name: "Home page",
        component: `<h1>GrapesJS React Custom UI</h1>`,
      },
    ],
  },
};

// Define the ProjectData type
interface ProjectData {
  assets: string[];
  pages: {
    name: string;
    component: string;
  }[];
}

export default function GrapesEditor() {
  const [editor, setEditor] = useState<Editor | null>(null);
  const [jsonInput, setJsonInput] = useState<string>("");

  const onEditor = (editor: Editor) => {
    console.log("Editor loaded");

    (window as any).editor = editor;
    setEditor(editor);
  };

  const handleGetJSON = () => {
    if (editor) {
      const json = editor.getProjectData();
      console.log(JSON.stringify(json, null, 2));
      // You can also save this JSON or display it in a modal
    }
  };

  const handlePushJSON = () => {
    if (editor) {
      try {
        const projectData: ProjectData = JSON.parse(jsonInput);
        editor.loadProjectData(projectData);
      } catch (error) {
        console.error("Invalid JSON input:", error);
      }
    }
  };

  return (
    // @ts-ignore
    <ThemeProvider theme={theme}>
      <GjsEditor
        className="gjs-custom-editor text-white bg-slate-900"
        grapesjs="https://unpkg.com/grapesjs"
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        options={gjsOptions}
        plugins={[
          {
            id: "gjs-blocks-basic",
            src: "https://unpkg.com/grapesjs-blocks-basic",
          },
        ]}
        onEditor={onEditor}
      >
        <div className={`flex h-full border-t ${MAIN_BORDER_COLOR}`}>
          <div className="gjs-column-m flex flex-col flex-grow">
            <Topbar className="min-h-[48px]" />
            <Canvas className="flex-grow gjs-custom-editor-canvas" />
            <Button variant="contained" color="primary" onClick={handleGetJSON}>
              Get JSON
            </Button>
            <TextField
              label="JSON Input"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              style={{ marginTop: "10px" }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={handlePushJSON}
              style={{ marginTop: "10px" }}
            >
              Push JSON
            </Button>
          </div>
          <RightSidebar
            className={`gjs-column-r w-[300px] border-l ${MAIN_BORDER_COLOR}`}
          />
        </div>
        <ModalProvider>
          {({ open, title, content, close }) => (
            <CustomModal
              open={open}
              title={title}
              children={content}
              close={close}
            />
          )}
        </ModalProvider>
        <AssetsProvider>
          {({ assets, select, close, Container }) => (
            <Container>
              <CustomAssetManager
                assets={assets}
                select={select}
                close={close}
              />
            </Container>
          )}
        </AssetsProvider>
      </GjsEditor>
    </ThemeProvider>
  );
}
