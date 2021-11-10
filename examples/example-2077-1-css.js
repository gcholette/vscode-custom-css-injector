
const customCssStr = `
    /* dots */
    .monaco-workbench .activitybar>.content .monaco-action-bar .badge .badge-content {
      background: linear-gradient(45deg, #ffa500 35%, #fc28bb);
      color: black!important;
    }

    /* active tab */
    .monaco-workbench .part.editor>.content .editor-group-container>.title .tabs-container>.tab.sizing-fit.active {
      background: linear-gradient(30deg, #170542, #300188f2)!important;
      position: sticky;
    }

    /* active tab bottom line  */
    .monaco-workbench .part.editor>.content .editor-group-container>.title .tabs-container>.tab.sizing-fit.active::after {
      /*background: linear-gradient(90deg, rgba(255,0,172,1) 0%, rgba(255,235,0,1) 100%) !important; */
      background: linear-gradient(90deg, orange, magenta, cyan, orange, magenta, cyan,orange, magenta, cyan,orange, magenta, cyan,orange, magenta, cyan,orange, magenta, cyan,orange, magenta, cyan,orange, magenta, cyan,orange, magenta, cyan, orange, magenta, cyan, orange, magenta, cyan);
      background-size: 1800% 1800%;
      animation: breathingbg2 infinite 60s steps(820);

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
          background-position: 0% 100%;
        }
        50% {
          background-position: 100% 0%;
        }
        100% {
          background-position: 0% 100%;
        }
    }
    @keyframes breathingbg2 {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 50% 0%;
        }
        100% {
          background-position: 0% 50%;
        }
    }

    .part.activitybar.left {
      background: linear-gradient( 45deg, ${color1}50 3%, transparent 51%);
    }

    .composite-bar {
      background: linear-gradient( 180deg, ${color1}50, transparent);
    }

    .view-line {
      /*text-shadow: 0px 0px 3px;*/
      text-shadow: -9px 20px 22px;
    }
    .monaco-list-rows {
      background: transparent!important;
    }

    /* file explorer */
    .explorer-folders-view.file-icon-themable-tree.show-file-icons.align-icons-and-twisties {
      padding: 14px 0px 0px 0px;
    }

    .monaco-list-row.selected {
      background: #ffffff10!important;
      background-color: #ffffff10!important;
    }

    .monaco-list-row.selected:hover {
      background: #ffffff10!important;
      background-color: #ffffff10!important;
    }
    .monaco-list-row:hover {
      background: #ffffff10!important;
      background-color: #ffffff10!important;
    }

    .monaco-list.list_id_1.mouse-support.selection-none:before {
      outline: none!important;
    }

    * {
      outline: none!important;
    }
    *:focus {
      outline: none!important;
    }

    .monaco-breadcrumbs {
      background-color: #030d22;
      background: linear-gradient(45deg, #ff00ff45, #ffa5002e, #00ffff30);j
  }

  .monaco-sash.vertical::after {
    content: '';
    background: linear-gradient(0deg, cyan, magenta, orange, cyan, magenta, orange, cyan, magenta, orange);
    animation: breathingbg infinite 60s steps(240);
    background-size: 400% 400%;
    bottom: 0px;
    width: 1px;
    height: calc(100%);
    right: 0;
    position: absolute;
  }

  .monaco-grid-branch-node>.monaco-split-view2>.sash-container>.monaco-sash.vertical::after {
    content: '';
    background: linear-gradient(0deg, transparent, #9d00ff, transparent);
    bottom: 0px;
    width: 1px;
    height: calc(100%);
    right: 0;
    position: absolute;
  }

  .integrated-terminal>.monaco-split-view2>.sash-container>.monaco-sash.vertical::after {
    content: '';
    background: linear-gradient(0deg, cyan, magenta, orange, cyan, magenta, orange, cyan, magenta, orange);
    background-size: 400% 400%;
    bottom: 0px;
    width: 1px;
    height: calc(100%);
    right: 0;
    position: absolute;
    animation: breathingbg infinite 60s steps(240);
  }

  .monaco-sash.vertical.disabled::after {
    background: none;
    box-shadow: none;
  }

  @keyframes multicolor {
        0% {
          background: cyan;
        }
        25% {
          background: magenta;
        }
        50% {
          background: yellow;
        }
        75% {
          background: green;
        }
        100% {
          background: cyan;
        }
    }

    .editor-container::after {
      content: '';
      background: linear-gradient(90deg, cyan, magenta, orange, cyan, magenta, orange, cyan, magenta, orange);
      background-size: 400% 400%;
      animation: breathingbg infinite 60s steps(240);
      bottom: -1px;
      width: calc(100% - 1px);
      height: 3px;
      right: 0;
      position: absolute;
    }
    .monaco-list:before {
      outline: none!important;
    }
    .monaco-list:before:focus {
      outline: none!important;
    }
    .monaco-workbench .monaco-scrollable-element > .shadow.top {
      box-shadow: rgb(141 37 255 / 34%) 0px 11px 6px -6px inset;
    }
`
