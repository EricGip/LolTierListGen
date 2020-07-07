import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Row } from "./types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { Avatar, Paper } from "@material-ui/core";
import { generate } from "shortid";

const useStyles = makeStyles(theme => ({
  Paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
      width: theme.spacing(16),
      height: theme.spacing(10)
    }
  },
  Button: {
    "& > *": {
      width: "100%",
      height: "20px",
      whiteSpace: 'nowrap'
    },
    width: "47%"
  },
  Textfield: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      height: "5ch"
    }
  },
  RowUp: {
    position: "relative",
    left: "8px",
  }
}));

interface Props {
  row: Row;
  listId: string;
  listType?: string;
  internalScroll?: boolean;
  isCombineEnabled?: boolean;
  onUp: () => void;
  onDown: () => void;
  onLabelChange: (newText: string) => void;
}

export const AuthorList: React.FC<Props> = ({
  listId,
  listType,
  row,
  onUp,
  onDown,
  onLabelChange
}) => {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
        <div>
          <TextField
            className={classes.Textfield}
            id={generate()}
            label="Tier Name"
            variant="outlined"
            value={row.label}
            onChange={e => onLabelChange(e.target.value)}
          />
        </div>

        <div className={classes.RowUp}>
          <Button
            className={classes.Button}
            variant="outlined"
            color="primary"
            onClick={onUp}
          >
            Move Up
          </Button>

          <Button
            className={classes.Button}
            variant="outlined"
            color="primary"
            onClick={onDown}
          >
            Move Down
          </Button>
        </div>
      </div>

      <Droppable
        droppableId={listId}
        type={listType}
        direction="horizontal"
        isCombineEnabled={false}
      >
        {dropProvided => (
          <Paper
            variant="outlined"
            elevation={25}
            square={false}
            {...dropProvided.droppableProps}
            style={{
              flex: 1,
              display: "flex",
              backgroundColor: "#DCDCDC",
              margin: 20,
              minHeight: 51,
              overflowX: "auto"
            }}
            ref={dropProvided.innerRef}
          >
            {row.urls.map((url, index) => (
              <Draggable key={url} draggableId={url} index={index}>
                {dragProvided => (

                  <div
                    {...dragProvided.dragHandleProps}
                    {...dragProvided.draggableProps}
                    ref={dragProvided.innerRef}
                  >
                    <Avatar
                      style={{
                        height: "51px",
                        width: "54px"
                      }}
                      src={url}
                    >

                    </Avatar>
                  </div>
                )}
              </Draggable>
            ))}
            {dropProvided.placeholder}
          </Paper>
        )}
      </Droppable>
    </div>
  );
};
