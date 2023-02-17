import { Box, Button, CardMedia, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";

import axios from "axios";
import { api } from "../../../utils/axiosDefault";

import { StyledTypography, StyledFormControl } from "./CreateWorkshopStyled";
api();
interface IWorkshop {
  name: string;
  description: string;
}
interface IService {
  serviceName?: string;
  servicePrice?: string;
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fileImage, setFileImage] = useState<string | Blob>("");
  const [workshopData, setWorkshopData] = useState<IWorkshop>(initialForm);
  const [service, setService] = useState<IService>(initialService);
  const [services, setServices] = useState<Services>([]);
  // const [photoUrl, setPhotoUrl] = useState("");

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

  const uploadImage: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const input = event.target;

    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];
    setFileImage(file);
    let img: string = URL.createObjectURL(file);
    setSelectedImage(img);
  };

  const sendData = async () => {
    const photo = await uploadImageToServer();

    const data = { ...workshopData, services, photo };

    axios.post("/workshop", data);
  };

  const uploadImageToServer = async () => {
    if (!selectedImage) {
      return;
    }
    const formData = new FormData();
    formData.append("file", fileImage);
    formData.append("upload_preset", "mycx4hvf");
    let data = "";
    // try {
    //   const res = await axios.post(
    //     "https://api.cloudinary.com/v1_1/dbadzgenl/image/upload",
    //     formData
    //   );
    //   console.log(res);
    //   setPhotoUrl(res.data["secure_url"]);
    // } catch (error) {
    //   console.log(error);
    // }
    await axios
      .post("https://api.cloudinary.com/v1_1/dbadzgenl/image/upload", formData)
      .then((resp) => {
        data = resp.data["secure_url"];
      });
    return data;
  };

  return (
    <Box>
      <StyledTypography variant="h3">Create Workshop</StyledTypography>
      <div>
        {selectedImage && (
          <Box>
            <CardMedia
              image={selectedImage}
              // src={URL.createObjectURL(selectedImage)}
              sx={{ height: 250 }}
            >
              {/* <img
                alt="workshop"
                width={"250px"}
                src={URL.createObjectURL(selectedImage)}
              /> */}
            </CardMedia>

            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </Box>
        )}

        <Button variant="contained" component="label">
          Upload Photo
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={uploadImage}
          />
        </Button>
      </div>
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
