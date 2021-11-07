const customCssStr = `
    /* top level */
    .monaco-editor {
      background: linear-gradient( 90deg, #00000020, #ffffff06)!important;
    }

    /* text editor */
    .view-lines.monaco-mouse-cursor-text {
      background: linear-gradient( 90deg, #00000020, #ffffff06)!important;
    }

    /* minimap */
    .minimap.slider-mouseover .minimap-decorations-layer {
      background: linear-gradient( 45deg, #ff00761f 33%, transparent 66%);
      background-size: 400% 400%;
    }

    /* dots */
    .monaco-workbench .activitybar>.content .monaco-action-bar .badge .badge-content {
      background: linear-gradient(45deg, #ffa500 35%, #fc28bb);
      color: black!important;
    }

    /* active tab */
    .monaco-workbench .part.editor>.content .editor-group-container>.title .tabs-container>.tab.sizing-fit.active {
      background: linear-gradient(45deg, #ff00a854, #ff760059)!important; 
      position: sticky;
    }

    /* active tab bottom line  */
    .monaco-workbench .part.editor>.content .editor-group-container>.title .tabs-container>.tab.sizing-fit.active::after {
      background: linear-gradient(90deg, rgba(255,0,172,1) 0%, rgba(255,235,0,1) 100%) !important;
      opacity: 1;

      content: '';
      z-index: 10;

      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      height: 4px;
    }

    /* force transparence in left menu */
    .monaco-list.list_id_1 .monaco-list-rows {
      background: transparent;
    }

    @keyframes breathingbg {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
    }

    /* left bar */
    .content {
      background: linear-gradient( 45deg, #ff00761f 33%, transparent 66%);
      background-size: 400% 400%;
      animation: breathingbg 20s ease infinite;
    }

    .composite-bar {
      background: linear-gradient( 180deg, #ff006610, transparent);
    }

    .view-line {
      /*text-shadow: 0px 0px 3px;*/
      text-shadow: 12px 11px 24px;
    }
`
