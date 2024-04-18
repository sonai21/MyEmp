import React, { useState } from "react";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonalInfo from "../components/PersonalInfo";
import JobInfo from "../components/JobInfo";
import SalaryInfo from "../components/SalaryInfo";
import { Button, Stack } from "@mui/material";

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && "page"}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  selected: PropTypes.bool,
};

export default function AddUser() {
  const [value, setValue] = useState(0);

  const [userData, setUserData] = useState({
    // firstName: "",
    // lastName: "",
    // email: "",
    // gender: "",
    // active: false,
    // jobTitle: "",
    // department: "",
    // salary: "",
  });

  // console.log(userData);

  const collectData = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setUserData({
      ...userData,
      [name]: newValue,
    });
    // console.log(data.target.value);
  };

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };
  const pages = [
    <PersonalInfo userData={userData} collectData={collectData} />,
    <JobInfo userData={userData} collectData={collectData} />,
    <SalaryInfo userData={userData} collectData={collectData} />,
  ];

  const handleSubmit = () => {
    console.log(userData);
  };
  return (
    <Box p={4} mt={4}>
      <Stack>
        <Button
          variant="contained"
          size="large"
          sx={{ bgcolor: "black", mx: "auto" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Stack>
      <Box marginTop={6} p={1} sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          role="navigation"
          centered
          textColor="secondary"
          indicatorColor="secondary"
        >
          <LinkTab label="Personal Info" href="/form1" />
          <LinkTab label="Job Info" href="/form2" />
          <LinkTab label="Salary Info" href="/form3" />
        </Tabs>
        {pages[value]}
      </Box>
    </Box>
  );
}
