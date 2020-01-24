import React from "react";
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import '../css/fileExplorer.css';

const nodes = [{
  value: 'global',
  label: 'Global',
  children: [
    {
      value: 'standards',
      label: 'Standards',
      children: [
        {
          value: 'sdtm',
          label: 'SDTM'
        },
        {
          value: 'adam',
          label: 'ADam'
        },
        {
          value: 'tfls',
          label: 'TFLs'
        },
        {
          value: 'pkpd',
          label: 'PK/PD'
        }
      ]
    },
    {
      value: 'oncology',
      label: 'Oncology',
      children: [
        {
          value: 'gastric',
          label: 'Gastric',
          children: [
            {
              value: "sam01",
              label: "SAM01",
              children: [
                {
                  value: "sam001-gas01",
                  label: "SAM001-GAS01",
                  children: [
                    {
                      value: "data",
                      label: "Data",
                      children: [
                        {
                          value: "raw",
                          label: "Raw"
                        },
                        {
                          value: "sdtm",
                          label: "SDTM"
                        },
                        {
                          value: "adam",
                          label: "ADaM"
                        }
                      ]
                    },
                    {
                      value: "programs",
                      label: "Programs",
                      children: [
                        {
                          value: "raw",
                          label: "Raw"
                        },
                        {
                          value: "sdtm",
                          label: "SDTM"
                        },
                        {
                          value: "adam",
                          label: "ADaM"
                        },
                        {
                          value: "tfls",
                          label: "TFLS"
                        },
                        {
                          value: "pkpd",
                          label: "PK/PD"
                        },
                        {
                          value: "explore",
                          label: "Explore"
                        }
                      ]
                    },
                    {
                      value: "logs",
                      label: "Logs"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}];

export default class FileExplorer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: [],
      expanded: []
    };
  }

  render() {
    return (
      <div>
        <CheckboxTree
          icons={ {
            parentClose: <span className="rct-icon fa fa-folder folder-color" />,
            parentOpen: <span className="rct-icon fa fa-folder-open folder-color" />
          } }
          nodes={ nodes }
          checked={ this.state.checked }
          expanded={ this.state.expanded }
          onCheck={ checked => this.setState({ checked }) }
          onExpand={ expanded => this.setState({ expanded }) }
        />
      </div>
    )
  }
}

FileExplorer.propTypes = {

}