import React from "react";
import EditorJS from "@editorjs/editorjs";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";

function Editor() {
  const editor = new EditorJS({
    /**
     * Wrapper of Editor
     */
    holderId: "editorjs",
    /**
     * Tools list
     */
    tools: {
      /**
       * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
       */
      header: {
        class: Header,
        inlineToolbar: ["link"],
        config: {
          placeholder: "Header",
          levels: [1, 2, 3, 4],
          defaultLevel: 1,
        },
        shortcut: "CMD+SHIFT+H",
      },
      /**
       * Or pass class directly without any configuration
       */
      image: {
        class: Image,
        inlineToolbar: ["link"],
      },
      list: {
        class: List,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+L",
      },
      checklist: {
        class: CheckList,
        inlineToolbar: true,
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
        config: {
          quotePlaceholder: "Enter a quote",
          captionPlaceholder: "Quote's author",
        },
        shortcut: "CMD+SHIFT+O",
      },
      warning: Warning,
      marker: {
        class: Marker,
        shortcut: "CMD+SHIFT+M",
      },
      code: {
        class: Code,
        shortcut: "CMD+SHIFT+C",
      },
      delimiter: Delimiter,
      inlineCode: {
        class: InlineCode,
        shortcut: "CMD+SHIFT+C",
      },
      linkTool: LinkTool,
      embed: Embed,
      table: {
        class: Table,
        inlineToolbar: true,
        shortcut: "CMD+ALT+T",
      },
    },
    //@ts-ignore
    data: {},
  });
  editor.isReady.then(() => {
    editor
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  });

  return (
    <div>
      <div className="container">
        <div
          id="editorjs"
          style={{
            background: "white",
            height: "300px",
            width: "600px",
            overflowY: "auto",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Editor;
