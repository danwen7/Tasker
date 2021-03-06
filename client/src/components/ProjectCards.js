import React from "react";
import Auth from "../utils/auth";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import moment from "moment";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { keyframes } from "styled-components";
import OptionsButton from "./OptionsButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "30px",
  p: 4,
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledProjectBox = styled.div`
  display: flex;
  border-radius: 10px;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.5s linear;
  animation-fill-mode: forwards;
`;

const StyledProjectBoxHeader = styled.div`
  order: 2;
  margin-right: 24px;
  display: flex;
  align-items: ceneter;
  justify-content: space-between;
  margin-bottom: 16px;
  color: #1f1c2e;
`;

const StyledProjectBoxContentHeader = styled.div`
  order: 1;
  max-width: 120px;
  text-align: center;
  margin-bottom: 16px;
  max-width: 300px;
`;

const StyledHeaderP = styled.p`
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  opacity: 0.7;
  font-family: "DM Sans", sans-serif;
  @media (max-width: 550px) {
    font-size: 15px;
  }
`;

const StyledRepoNameDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  border-radius: 20px;
  flex-shrink: 0;
  padding: 4px 10px;
  font-weight: 700;
  position: absolute;
  bottom: 5px;
  right: 10px;
  opacity: 0.7;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    font-size: 9px;
  }
`;

const StyledHeadings = styled.h2`
  font-family: "DM Sans", sans-serif;
  font-size: 25px;
  color: rgb(31, 28, 46);
  font-weight: 700;
  opacity: 0.7;
  margin-bottom: 2%;
  @media (max-width: 921px) {
    font-size: 20px;
  }
  @media (max-width: 745px) {
    font-size: 15px;
  }
`;

const ProjectCard = function (props) {
  var renderOptionsMiddle = false;
  if (props.repoName == "") {
    renderOptionsMiddle = true;
  } else {
    renderOptionsMiddle = false;
  }
  console.log(renderOptionsMiddle);

  const themeColor = {
    pink: {
      bg: "#FFE6E3",
    },
    purple: {
      bg: "#A0A0FA",
    },
    green: {
      bg: "#D0FCDB",
    },
    lightBlue: {
      bg: "#CEDDFF",
    },
    lightYellow: {
      bg: "#FFEFC6",
    },
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = function (e) {
    e.stopPropagation();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  function getBaseURL() {
    return (
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.port && ":" + window.location.port) +
      "/"
    );
  }

  const handleRoomURL = function () {
    window.location.replace(`${getBaseURL()}projects?${props.workspaceID}`);
  };

  return (
    <div style={{ padding: "8px", transition: "0.2s" }}>
      <StyledProjectBox
        style={{
          backgroundColor: themeColor[props.workspaceColor].bg,
        }}
        onClick={handleRoomURL}
      >
        <StyledProjectBoxHeader>
          <span
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              fontSize: "12px",
            }}
          >
            {moment(props.updatedAt).format("MMM Do")}
          </span>
          {props.editButton && renderOptionsMiddle == false ? (
            <OptionsButton optionsMiddle={renderOptionsMiddle} handleOpen={handleOpen} />
          ) : (
            <OptionsButton optionsMiddle={renderOptionsMiddle} handleOpen={handleOpen} />
          )}
        </StyledProjectBoxHeader>

        <StyledProjectBoxContentHeader>
          <StyledHeaderP>{props.title}</StyledHeaderP>
        </StyledProjectBoxContentHeader>
      </StyledProjectBox>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <StyledHeadings>Edit Workspace</StyledHeadings>
            {/* <EditWorkspace
              title={props.title}
              repoName={props.repoName}
              userName={"sooova"}
              updatedAt={parseInt(props.updatedAt)}
              workspaceID={props.workspaceID}
              editButton={true}
              callback={() => props.callback()}
            /> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProjectCard;
