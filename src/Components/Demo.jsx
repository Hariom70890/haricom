import React, { useState } from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import Stack from "@mui/joy/Stack";
import AddIcon from "@mui/icons-material/Add";

const BasicModalDialog = () => {
   const [open, setOpen] = useState(false);
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      companySize: "",
   });

   const handleSubmit = (event) => {
      event.preventDefault();
      localStorage.setItem("projectData", JSON.stringify(formData));
      setOpen(false);
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   return (
      <React.Fragment>
         <Button
            variant="text"
            color="white"
            onClick={() => setOpen(true)}
         >
            Demo
         </Button>
         <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog>
               <DialogTitle>Create new project</DialogTitle>
               <DialogContent>
                  Fill in the information for the new project.
               </DialogContent>
               <form onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Odit harum vitae, adipisci repellat voluptas hic
                        atque assumenda, iusto quasi aut iure consectetur qui?
                        In, eaque.
                     </p>
                     <FormControl>
                        <Input
                           required
                           name="firstName"
                           placeholder="First Name"
                           onChange={handleChange}
                           style={inputStyle}
                        />
                     </FormControl>
                     <FormControl>
                        <Input
                           required
                           name="lastName"
                           placeholder="Last Name"
                           onChange={handleChange}
                           style={inputStyle}
                        />
                     </FormControl>
                     <FormControl>
                        <Input
                           required
                           name="email"
                           placeholder="Work Email Address"
                           onChange={handleChange}
                           style={inputStyle}
                        />
                     </FormControl>
                     <FormControl component="fieldset">
                        <FormLabel component="legend">Company size</FormLabel>
                        <RadioGroup
                           row
                           aria-label="company-size"
                           name="companySize"
                           value={formData.companySize}
                           onChange={handleChange}
                        >
                           {[1, 2, 3, 4].map((size) => (
                              <FormControlLabel
                                 key={size}
                                 value={`${size * 100}${size === 4 ? "+" : ""}`}
                                 control={<Radio />}
                                 label={`${size * 100}${size === 4 ? "+" : ""}`}
                              />
                           ))}
                        </RadioGroup>
                     </FormControl>

                     <Button
                        type="submit"
                        variant="contained"
                        startIcon={<AddIcon />}
                        style={{
                           margin: "10px auto",
                           width: "80%",
                           background: "blue",
                           color: "white",
                        }}
                     >
                        Submit
                     </Button>
                  </Stack>
               </form>
            </ModalDialog>
         </Modal>
      </React.Fragment>
   );
};

const inputStyle = {
   borderRadius: "26px",
   border: "2px solid black",
   fontSize: "16px",
   padding: "10px",
   width: "100%",
};

export default BasicModalDialog;
