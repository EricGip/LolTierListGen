import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderRows, reorder } from "./reorder";
import './App.css';

import top from "./data/top.json";
import jungle from "./data/jungle.json";
import mid from "./data/mid.json";
import ad from "./data/ad.json";
import support from "./data/support.json";

import { AuthorList } from "./AuthorList";
import { generate } from "shortid";
import Button from "@material-ui/core/Button";
import {
  AppBar,
  Toolbar,
  TextField,
  IconButton,
  Typography
} from "@material-ui/core";
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


  React.useEffect(() => {
    const data = localStorage.getItem('my-tier-list');
    if (data) try {
      setRows(JSON.parse(data));
    } catch (error) {
      console.error(error)
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('my-tier-list', JSON.stringify(rows))

  });

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

            <Typography
              style={{
                color: "#b9f2ff",
                position: "absolute",
                right: "7.5em",
                fontSize: 15,
                overflow: "auto"
              }}
            >
              Champions roles are based off their play rate.
              <br></br>
              Search for a champion on Op.gg
              <br></br>
              Boards saved in local storage
            </Typography>

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
            position: "absolute",
            left: "0em",
            width: "49%",
            color: "inherit",
            margin: 10,
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

        <Button
          style={{
            position: "relative",
            left: "50.5em",
            width: "48%",
            color: "inherit",
            margin: 10,
          }}
          variant="outlined"
          color="inherit"
          onClick={() => {
            window.localStorage.clear();
            window.location.reload();
            return false;
          }}
        >
          Clear Board
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
