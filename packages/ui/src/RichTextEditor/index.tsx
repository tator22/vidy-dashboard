import { Delta, Sources } from "quill";
import ReactQuill, { UnprivilegedEditor } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./style.css";
import { FC } from "react";

export const RichTextEditor: FC<{
  value?: string;
  onChange?: (
    value: string,
    delta: Delta,
    source: Sources,
    editor: UnprivilegedEditor
  ) => void;
  placeholder?: string;
}> = ({ value, onChange, placeholder }) => {
  const toolbarOptions = [
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
  ];
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={{
        toolbar: toolbarOptions,
        clipboard: {
          matchVisual: false,
        },
      }}
      formats={[
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
      ]}
      placeholder={placeholder || "placeholder"}
    />
  );
};
