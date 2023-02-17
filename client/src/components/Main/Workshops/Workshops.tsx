import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useLoaderData } from "react-router-dom";

type WorkshopsType = {}[];

interface IWorkshop {
  photo: string;
  name: string;
  description: string;
  services: { serviceName: string; Cost: string }[];
}

export const Workshops = () => {
  const { workshops }: WorkshopsType | any = useLoaderData();
  console.log(workshops);
  return (
    <Box>
      <List sx={{ display: "flex" }}>
        {workshops.map((workshop: IWorkshop) => (
          <ListItem key={workshop.name}>
            <Card>
              <CardHeader title={workshop.name} />
              <CardMedia
                component="img"
                image={workshop.photo}
                height="194"
                alt="Paella dish"
              />
              <CardContent>
                <Typography>{workshop.description}</Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
