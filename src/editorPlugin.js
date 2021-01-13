import _Quill from 'quill';
import Editor from '../src/components/Editor.vue';

const Quill = window ? window.Quill : _Quill;

const install = (Vue, globalOptions) => {
  if (globalOptions) {
    Editor.props.globalOptions.default = () => globalOptions;
  }

  Vue.component(Editor.name, Editor);
}

const VueQuillEditor = { Quill, Editor, install };

export default VueQuillEditor;
export { Quill, Editor, install };