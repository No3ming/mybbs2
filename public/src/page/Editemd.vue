<template>
    <div id="test-editormd"></div>
</template>

<script>
  //import jquery from '../../static/libs/bower_components/editor.md/examples/js/jquery.min.js'
  import raphael from 'raphael'
  import editormd from '../../static/libs/bower_components/editor.md/editormd.js'
  import  "../../static/libs/bower_components/editor.md/languages/en"
  import  "../../static/libs/bower_components/editor.md/plugins/link-dialog/link-dialog"
  import  "../../static/libs/bower_components/editor.md/plugins/reference-link-dialog/reference-link-dialog"
  import  "../../static/libs/bower_components/editor.md/plugins/image-dialog/image-dialog"
  import  "../../static/libs/bower_components/editor.md/plugins/code-block-dialog/code-block-dialog"
  import  "../../static/libs/bower_components/editor.md/plugins/table-dialog/table-dialog"
  import  "../../static/libs/bower_components/editor.md/plugins/emoji-dialog/emoji-dialog"
  import  "../../static/libs/bower_components/editor.md/plugins/goto-line-dialog/goto-line-dialog"
  import  "../../static/libs/bower_components/editor.md/plugins/help-dialog/help-dialog"
  import  "../../static/libs/bower_components/editor.md/plugins/html-entities-dialog/html-entities-dialog"
  import  "../../static/libs/bower_components/editor.md/plugins/preformatted-text-dialog/preformatted-text-dialog"

  export default {
    data () {
      return {
        txt: '# hello'
      }
    },
    mounted () {
      this.axios.get("/static/libs/bower_components/editor.md/examples/test.md")
        .then((rep) =>{
          editormd("test-editormd", {
            width: "90%",
            height: 640,
            path : '/static/libs/bower_components/editor.md/lib/',
            markdown : rep.data,
            //toolbar  : false,             // 关闭工具栏
            codeFold : true,
            searchReplace : true,
            saveHTMLToTextarea : true,      // 保存 HTML 到 Textarea
            htmlDecode : "style,script,iframe|on*",            // 开启 HTML 标签解析，为了安全性，默认不开启
            emoji : true,
            taskList : true,
            tocm            : true,          // Using [TOCM]
            tex : true,                      // 开启科学公式 TeX 语言支持，默认关闭
            //previewCodeHighlight : false,  // 关闭预览窗口的代码高亮，默认开启
            flowChart : true,                // 疑似 Sea.js与 Raphael.js 有冲突，必须先加载 Raphael.js ，Editor.md 才能在 Sea.js 下正常进行；
            sequenceDiagram : true,          // 同上
            //dialogLockScreen : false,      // 设置弹出层对话框不锁屏，全局通用，默认为 true
            //dialogShowMask : false,     // 设置弹出层对话框显示透明遮罩层，全局通用，默认为 true
            //dialogDraggable : false,    // 设置弹出层对话框不可拖动，全局通用，默认为 true
            //dialogMaskOpacity : 0.4,    // 设置透明遮罩层的透明度，全局通用，默认值为 0.1
            //dialogMaskBgColor : "#000", // 设置透明遮罩层的背景颜色，全局通用，默认为 #fff
            imageUpload : true,
            imageFormats : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
            imageUploadURL : "./php/upload.php",
            onload : function() {
              console.log('onload', this);
              //this.fullscreen();
              //this.unwatch();
              //this.watch().fullscreen();

              //this.setMarkdown("#PHP");
              //this.width("100%");
              //this.height(480);
              //this.resize("100%", 640);
            }
          });
        });
    }
  }
</script>

<style>
  html, body, #editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  textarea, #editor div {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  code {
    color: #f66;
  }
</style>