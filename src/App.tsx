import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderRows, reorder } from "./reorder";

import top from "./data/top.json";
import jungle from "./data/jungle.json";
import mid from "./data/mid.json";
import ad from "./data/ad.json";
import support from "./data/support.json";

import { AuthorList } from "./AuthorList";
import { generate } from "shortid";
import Button from "@material-ui/core/Button";
import { AppBar, Toolbar, TextField, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import Tooltip from "@material-ui/core/Tooltip";

const aId = generate();

const GitHub = "https://github.com/EricGip";

function App() {
  const [rows, setRows] = React.useState([
    { id: aId, label: "", urls: [] },
    {
      id: generate(),
      label: "Top",
      urls: top
    },
    {
      id: generate(),
      label: "Jungle",
      urls: jungle
    },
    {
      id: generate(),
      label: "Middle",
      urls: mid
    },
    {
      id: generate(),
      label: "Bottom",
      urls: ad
    },
    {
      id: generate(),
      label: "Support",
      urls: support
    }
  ]);

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) => {
        if (!destination) {
          return;
        }

        setRows(reorderRows(rows, source, destination));
      }}
    >
      <div
        style={{
          backgroundColor: "#89CFF0"
        }}
      >
        <AppBar
          position="static"
          style={{
            backgroundColor: "#a19fa4"
          }}
        >
          <Toolbar>
            <Button
              variant="contained"
              disabled
              style={{
                color: "#b9f2ff",
                position: "absolute",
                left: "1"
              }}
            >
              League of Legends Tier List Generator
            </Button>

            <TextField
              label="Tier List Title"
              variant="outlined"
              style={{
                color: "inherit",
                width: "500px",
                margin: "auto"
              }}
            />

            <Tooltip title="Links to GitHub">
              <IconButton
                aria-label="hello"
                edge="end"
                href={GitHub}
                target="_blank"
              >
                <GitHubIcon
                  style={{
                    color: "#89CFF0",
                    position: "absolute",
                    right: "5px",
                    fontSize: 50,
                    overflow: "auto"
                  }}
                />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        <Button
          style={{
            color: "inherit",
            margin: 15
          }}
          variant="outlined"
          color="inherit"
          onClick={() => {
            setRows([
              {
                id: generate(),
                label: "",
                urls: []
              },
              ...rows
            ]);
          }}
        >
          add row
        </Button>

        {rows.map((row, i) => (
          <AuthorList
            onLabelChange={newText =>
              setRows(
                rows.map(x =>
                  x.id === row.id ? { ...row, label: newText } : x
                )
              )
            }
            onUp={() => setRows(reorder(rows, i, i - 1))}
            onDown={() => setRows(reorder(rows, i, i + 1))}
            internalScroll
            key={row.id}
            listId={row.id}
            listType="CARD"
            row={row}
          />
        ))}
      </div>
    </DragDropContext>
  );
}

export default App;
