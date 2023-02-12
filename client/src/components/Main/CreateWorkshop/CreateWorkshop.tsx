import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { api } from "../../../utils/axiosDefault";

import { StyledTypography, StyledFormControl } from "./CreateWorkshopStyled";
api();
interface IWorkshop {
  name: string;
  description: string;
  // services: never[];
}
interface IService {
  serviceName?: string;
  servicePrice?: string;
  // services: never[];
}
const initialService = {
  serviceName: "",
  servicePrice: "",
};

type Services = {}[];

const initialForm = {
  name: "",
  description: "",
  services: [],
};

export const CreateWorkshop = () => {
  const [workshopData, setWorkshopData] = useState<IWorkshop>(initialForm);
  const [service, setService] = useState<IService>(initialService);

  const [services, setServices] = useState<Services>([]);

  const handlerWorkshopData: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setWorkshopData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handlerService: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setService((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addService = () => {
    setServices((prev) => {
      return [...prev, service];
    });
  };

  const sendData = async () => {
    const data = { ...workshopData, services };
    const res = await axios.post("/workshop", data);
    console.log(res);
  };

  return (
    <Box>
      <StyledTypography variant="h3">Create Workshop</StyledTypography>

      <StyledFormControl>
        <TextField
          value={workshopData.name}
          onChange={handlerWorkshopData}
          name="name"
          id="outlined-basic"
          label="Name Workshop"
          variant="outlined"
        />
        <TextField
          value={workshopData.description}
          onChange={handlerWorkshopData}
          name="description"
          id="outlined-basic"
          label="Description"
          variant="outlined"
        />
        <Typography>Services</Typography>
        <Box>
          <form>
            <TextField
              onChange={handlerService}
              name="serviceName"
              value={service.serviceName}
              id="outlined-basic"
              label="Name Service"
              variant="outlined"
            />
            <TextField
              onChange={handlerService}
              name="servicePrice"
              value={service.servicePrice}
              id="outlined-basic"
              label="Cost"
              variant="outlined"
            />
            <Button onClick={addService} variant="outlined">
              Add
            </Button>
          </form>
        </Box>
        {services.length !== 0 && (
          <Box sx={{ border: 1, borderColor: "violet" }}>
            {services.map((service: IService, idx) => {
              return (
                <Typography key={service.serviceName}>{`${idx + 1}) ${
                  service.serviceName
                } : ${service.servicePrice}`}</Typography>
              );
            })}
          </Box>
        )}
        <Button onClick={sendData} variant="contained">
          Save Workshop
        </Button>
      </StyledFormControl>
    </Box>
  );
};
